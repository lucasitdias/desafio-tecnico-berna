// Importa o hook utilizado para controlar estados internos do componente.
import { useEffect, useState } from 'react';
// Importa os componentes responsáveis por navegação entre páginas.
import { Link, useNavigate } from 'react-router-dom';
// Importa os ícones utilizados nos campos de autenticação.
import { Mail, Lock } from 'lucide-react';
// Importa o serviço responsável pelo processo de autenticação.
import { authService } from '../../services/authService.js';
// Importa as funções responsáveis pela validação dos dados informados.
import { validateEmail, validatePassword } from '../../utils/validators.js';
// Importa o componente reutilizável de botão.
import Button from '../../components/Button.jsx';
// Importa o componente reutilizável de entrada de dados.
import Input from '../../components/Input.jsx';
// Importa o componente responsável por exibir mensagens ao usuário.
import FeedbackMessage from '../../components/FeedbackMessage.jsx';
// Importa o componente responsável por atualizar o título da página.
import PageTitle from '../../components/PageTitle.jsx';
// Importa a imagem principal exibida na tela de login.
import bernaLogin from '../../assets/berna-login.png';
// Importa a logo da aplicação.
import logo from '../../assets/logo.png';

// Componente responsável pela autenticação do usuário na aplicação.
const LoginPage = () => {
  // Armazena o email informado pelo usuário.
  const [email, setEmail] = useState('');

  // Armazena a senha informada pelo usuário.
  const [password, setPassword] = useState('');

  // Controla a exibição ou ocultação da senha.
  const [showPassword, setShowPassword] = useState(false);

  // Controla se o usuário deseja manter o email salvo.
  const [rememberMe, setRememberMe] = useState(false);

  // Armazena mensagens de erro durante o processo de login.
  const [error, setError] = useState('');

  // Controla o estado de carregamento durante a autenticação.
  const [loading, setLoading] = useState(false);

  // Recupera o email salvo anteriormente quando a página de login é carregada.
  useEffect(() => {
    // Busca o email armazenado no navegador.
    const savedEmail = localStorage.getItem('remember-email');

    // Verifica se existe um email salvo.
    if (savedEmail) {
      // Preenche automaticamente o campo de email.
      setEmail(savedEmail);

      // Mantém o checkbox de lembrar usuário marcado.
      setRememberMe(true);
    }
  }, []);

  // Inicializa o recurso de navegação entre rotas.
  const navigate = useNavigate();

  // Processa o envio do formulário de autenticação.
  const handleSubmit = async (e) => {
    // Impede o comportamento padrão de envio do formulário.
    e.preventDefault();

    // Limpa mensagens de erro anteriores.
    setError('');

    // Valida se o formato do email informado é válido.
    if (!validateEmail(email)) {
      // Exibe mensagem de erro quando o email possui formato inválido.
      return setError('Por favor, insira um e-mail válido.');
    }

    // Valida se a senha atende aos requisitos definidos pela aplicação.
    if (!validatePassword(password)) {
      // Exibe mensagem de erro quando a senha não atende aos critérios.
      return setError('A senha deve ter no mínimo 8 caracteres, incluindo uma letra e um número.');
    }

    // Ativa o carregamento enquanto a autenticação é processada.
    setLoading(true);

    try {
      // Executa a autenticação do usuário através do serviço configurado.
      await authService.login(email, password);
      // Verifica se o usuário optou por manter o email salvo no navegador.
      if (rememberMe) {
        // Armazena o email informado para preencher automaticamente no próximo acesso.
        localStorage.setItem('remember-email', email);
      } else {
        // Remove o email salvo quando o usuário desativa a opção de lembrar acesso.
        localStorage.removeItem('remember-email');
      }

      // Redireciona o usuário para o dashboard após autenticação.
      navigate('/dashboard');
    } catch (err) {
      // Exibe a mensagem de erro retornada pelo processo de autenticação.
      setError(err.message);
    } finally {
      // Remove o estado de carregamento após finalizar a autenticação.
      setLoading(false);
    }
  };

  // Atualiza o estado da opção de lembrar usuário.
  const handleRememberMeChange = (e) => {
    // Define o valor atual do checkbox como estado do componente.
    setRememberMe(e.target.checked);
  };

  // Retorna a estrutura visual da página de login.
  return (
    <>
      {/* Define o título exibido na aba do navegador. */}
      <PageTitle title="Login - Berna" />

      {/* Cria o container principal centralizado da página. */}
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        {/* Cria o card principal dividido entre imagem e formulário. */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Cria a coluna esquerda contendo a imagem principal. */}
          <div className="hidden md:block relative">
            {/* Exibe a imagem ilustrativa da tela de login. */}
            <img src={bernaLogin} alt="Projeto Berna" className="w-full h-full object-cover" />
          </div>

          {/* Cria a coluna direita contendo o formulário de autenticação. */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            {/* Organiza a logo e a mensagem inicial da página. */}
            <div className="mb-8 flex flex-col items-center text-center">
              {/* Exibe a logo principal da aplicação. */}
              <img src={logo} alt="Logo Berna" className="h-16 w-auto mb-4" />

              {/* Exibe a mensagem de orientação para o usuário. */}
              <p className="text-gray-600 text-base">Acesse sua conta</p>
            </div>

            {/* Cria o formulário responsável pelo envio dos dados de login. */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Renderiza o campo responsável pela entrada do email. */}
              <Input
                // Define o identificador do campo.
                id="email"
                // Define o nome utilizado no formulário.
                name="email"
                // Define o tipo de entrada como email.
                type="email"
                // Define o texto de identificação do campo.
                label="E-mail"
                // Mantém o valor do campo sincronizado com o estado.
                value={email}
                // Atualiza o email conforme o usuário digita.
                onChange={(e) => setEmail(e.target.value)}
                // Exibe uma sugestão de preenchimento no campo.
                placeholder="Digite seu e-mail"
                // Bloqueia alteração durante o carregamento.
                disabled={loading}
                // Exibe o ícone de email no campo.
                icon={Mail}
              />

              {/* Renderiza o campo responsável pela entrada da senha. */}
              <Input
                // Define o identificador do campo.
                id="password"
                // Define o nome utilizado no formulário.
                name="password"
                // Alterna entre texto visível e senha oculta.
                type={showPassword ? 'text' : 'password'}
                // Define o texto de identificação do campo.
                label="Senha"
                // Mantém o valor da senha sincronizado com o estado.
                value={password}
                // Atualiza a senha conforme o usuário digita.
                onChange={(e) => setPassword(e.target.value)}
                // Exibe uma sugestão de preenchimento no campo.
                placeholder="Digite sua senha"
                // Bloqueia alteração durante o carregamento.
                disabled={loading}
                // Exibe o ícone de senha no campo.
                icon={Lock}
                // Habilita o botão de visualização da senha.
                showToggle
                // Alterna o estado de exibição da senha.
                onToggle={() => setShowPassword(!showPassword)}
                // Define o estado atual de visibilidade da senha.
                isPasswordVisible={showPassword}
              />

              {/* Cria a área com opção de lembrar usuário e recuperação de senha. */}
              <div className="flex items-center justify-between text-sm">
                {/* Cria o controle de seleção para salvar o email. */}
                <label htmlFor="rememberMe" className="flex items-center gap-2 cursor-pointer">
                  {/* Renderiza o checkbox de lembrar usuário. */}
                  <input
                    // Define o identificador do checkbox.
                    id="rememberMe"
                    // Define o nome do campo.
                    name="rememberMe"
                    // Define o tipo de entrada como checkbox.
                    type="checkbox"
                    // Mantém o estado do checkbox sincronizado.
                    checked={rememberMe}
                    // Atualiza o estado ao alterar a seleção.
                    onChange={handleRememberMeChange}
                    // Bloqueia alteração durante o carregamento.
                    disabled={loading}
                    // Aplica os estilos visuais do checkbox.
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  {/* Exibe o texto da opção de lembrar usuário. */}
                  <span className="text-gray-700">Lembrar-me</span>
                </label>

                {/* Exibe o link para recuperação de senha. */}
                <Link
                  to="/forgot-password"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Esqueci minha senha
                </Link>
              </div>

              {/* Exibe mensagens de erro relacionadas ao login. */}
              <FeedbackMessage message={error} type="error" />

              {/* Renderiza o botão responsável pelo envio da autenticação. */}
              <Button type="submit" disabled={loading}>
                {/* Exibe o texto conforme o estado atual da autenticação. */}
                {loading ? 'Autenticando...' : 'Entrar'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

// Exporta o componente para utilização nas rotas da aplicação.
export default LoginPage;
