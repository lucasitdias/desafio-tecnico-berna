// Importa o hook responsável pelo gerenciamento de estados locais do componente.
import { useState } from 'react';
// Importa os componentes responsáveis por navegação entre rotas.
import { Link, useNavigate } from 'react-router-dom';
// Importa o ícone utilizado no campo de email.
import { Mail } from 'lucide-react';

// Importa o componente reutilizável de entrada de dados.
import Input from '../../components/Input';
// Importa o componente reutilizável de botão.
import Button from '../../components/Button';
// Importa o componente responsável por exibir mensagens de retorno ao usuário.
import FeedbackMessage from '../../components/FeedbackMessage';
// Importa o componente responsável por atualizar o título da página.
import PageTitle from '../../components/PageTitle';

// Importa a função responsável pela validação de email.
import { validateEmail } from '../../utils/validators';
// Importa o serviço responsável pelo processo de recuperação de senha.
import { passwordRecoveryService } from '../../services/passwordRecoveryService';

// Componente responsável pelo fluxo de solicitação de recuperação de senha.
const ForgotPasswordPage = () => {
  // Inicializa a navegação entre páginas da aplicação.
  const navigate = useNavigate();

  // Armazena o email informado pelo usuário.
  const [email, setEmail] = useState('');

  // Controla o estado de carregamento durante a solicitação.
  const [loading, setLoading] = useState(false);

  // Armazena mensagens de retorno para o usuário.
  const [message, setMessage] = useState('');

  // Função responsável por processar o envio da solicitação de recuperação.
  const handleSubmit = async (e) => {
    // Impede o comportamento padrão de envio do formulário.
    e.preventDefault();

    // Limpa mensagens anteriores antes de iniciar uma nova tentativa.
    setMessage('');

    // Verifica se o email informado possui formato válido.
    if (!validateEmail(email)) {
      // Exibe mensagem de erro quando o email informado é inválido.
      return setMessage('Informe um e-mail válido.');
    }

    // Ativa o estado de carregamento durante o processamento da solicitação.
    setLoading(true);

    try {
      // Envia o email para geração do código de recuperação.
      await passwordRecoveryService.sendCode(email);

      // Redireciona o usuário para a página de validação do código.
      navigate('/verify-code', {
        // Envia o email informado como estado para a próxima página.
        state: {
          // Mantém o email disponível durante o processo de recuperação.
          email,
        },
      });
    } catch (err) {
      // Exibe a mensagem de erro retornada pelo serviço.
      setMessage(err.message);
    } finally {
      // Remove o estado de carregamento após finalizar a operação.
      setLoading(false);
    }
  };

  // Retorna a estrutura visual da página de recuperação de senha.
  return (
    <>
      {/* Define o título exibido na aba do navegador. */}
      <PageTitle title="Recuperar Senha - Berna" />

      {/* Cria o container principal centralizando o formulário na tela. */}
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        {/* Cria o card visual contendo o formulário de recuperação. */}
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
          {/* Exibe o título principal da página. */}
          <h1 className="mb-2 text-3xl font-bold text-gray-800">Recuperar senha</h1>

          {/* Exibe a instrução para o usuário informar o email. */}
          <p className="mb-8 text-gray-600">
            Informe seu e-mail para receber o código de recuperação.
          </p>

          {/* Cria o formulário responsável pelo envio da solicitação. */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Renderiza o campo de email reutilizável. */}
            <Input
              // Define o tipo de entrada como email.
              type="email"
              // Define o texto de identificação do campo.
              label="E-mail"
              // Mantém o valor do campo sincronizado com o estado.
              value={email}
              // Atualiza o estado conforme o usuário digita.
              onChange={(e) => setEmail(e.target.value)}
              // Exibe uma sugestão de preenchimento no campo.
              placeholder="Digite seu e-mail"
              // Exibe o ícone de email dentro do campo.
              icon={Mail}
              // Bloqueia a edição durante o carregamento da solicitação.
              disabled={loading}
            />

            {/* Exibe mensagens de erro ou retorno do processo. */}
            <FeedbackMessage message={message} type="error" />

            {/* Renderiza o botão de envio da solicitação. */}
            <Button type="submit" disabled={loading}>
              {/* Exibe o texto conforme o estado da solicitação. */}
              {loading ? 'Enviando...' : 'Enviar código'}
            </Button>
          </form>

          {/* Cria a área de navegação para retorno ao login. */}
          <div className="mt-6 text-center">
            {/* Exibe o link para retornar à página inicial. */}
            <Link to="/" className="text-blue-600 hover:underline">
              Voltar ao login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

// Exporta o componente para utilização nas rotas da aplicação.
export default ForgotPasswordPage;
