// Importa o hook utilizado para controlar estados internos do componente.
import { useState, useEffect } from 'react';
// Importa os recursos de navegação e acesso aos dados enviados entre rotas.
import { Link, useLocation, useNavigate } from 'react-router-dom';
// Importa o componente reutilizável de botão.
import Button from '../../components/Button';
// Importa o componente reutilizável de campo de entrada.
import Input from '../../components/Input';
// Importa o componente responsável por exibir mensagens ao usuário.
import FeedbackMessage from '../../components/FeedbackMessage';
// Importa o componente responsável por atualizar o título da página.
import PageTitle from '../../components/PageTitle';
// Importa o serviço responsável pela validação do código de recuperação.
import { passwordRecoveryService } from '../../services/passwordRecoveryService';

// Componente responsável pela validação do código enviado ao usuário.
const VerifyCodePage = () => {
  // Inicializa o recurso de navegação entre páginas.
  const navigate = useNavigate();

  // Recupera informações enviadas pela rota anterior.
  const location = useLocation();

  // Obtém o email enviado durante o processo de recuperação.
  const email = location.state?.email || '';

  // Armazena o código informado pelo usuário.
  const [code, setCode] = useState('');

  // Armazena mensagens de erro durante a validação.
  const [error, setError] = useState('');

  // Redireciona o usuário para a página inicial quando o email necessário para recuperação não estiver disponível.
  useEffect(() => {
    if (!email) {
      navigate('/');
    }
  }, [email, navigate]);

  // Processa o envio do formulário de validação do código.
  const handleSubmit = async (e) => {
    // Impede o comportamento padrão de envio do formulário.
    e.preventDefault();

    // Limpa mensagens de erro anteriores.
    setError('');

    try {
      // Valida o código informado através do serviço de recuperação.
      await passwordRecoveryService.validateCode(code);

      // Redireciona o usuário para a criação de uma nova senha.
      navigate('/reset-password');
    } catch (err) {
      // Exibe a mensagem de erro retornada pelo serviço.
      setError(err.message);
    }
  };

  // Retorna a estrutura visual da página de validação.
  return (
    <>
      {/* Define o título exibido na aba do navegador. */}
      <PageTitle title="Validar Código - Berna" />

      {/* Cria o container principal centralizado da página. */}
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        {/* Cria o card visual contendo o formulário de validação. */}
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
          {/* Exibe o título principal da página. */}
          <h1 className="mb-2 text-3xl font-bold text-gray-800">Validar código</h1>

          {/* Exibe a instrução para preenchimento do código recebido. */}
          <p className="mb-6 text-gray-600">Digite o código enviado para:</p>

          {/* Exibe o email utilizado no processo de recuperação. */}
          <p className="mb-8 font-semibold text-blue-600">{email}</p>

          {/* Cria o formulário responsável pelo envio do código. */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Renderiza o campo de entrada do código de validação. */}
            <Input
              // Define o texto de identificação do campo.
              label="Código"
              // Mantém o valor do código sincronizado com o estado.
              value={code}
              // Atualiza o código conforme o usuário digita.
              onChange={(e) => setCode(e.target.value)}
              // Exibe um exemplo de preenchimento esperado.
              placeholder="Digite o código recebido"
            />

            {/* Exibe mensagens de erro durante a validação do código. */}
            <FeedbackMessage message={error} type="error" />

            {/* Renderiza o botão responsável pela validação do código. */}
            <Button type="submit">
              {/* Exibe o texto da ação de validação. */}
              Validar código
            </Button>
          </form>

          {/* Cria a área de navegação para retorno ao login. */}
          <div className="mt-6 text-center">
            {/* Exibe o link para voltar à página inicial. */}
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
export default VerifyCodePage;
