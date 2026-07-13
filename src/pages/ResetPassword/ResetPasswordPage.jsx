// Importa o hook utilizado para controlar estados internos do componente.
import { useState } from 'react';
// Importa o hook responsável pela navegação entre rotas da aplicação.
import { useNavigate } from 'react-router-dom';
// Importa o componente reutilizável de botão.
import Button from '../../components/Button';
// Importa o componente responsável por exibir mensagens ao usuário.
import FeedbackMessage from '../../components/FeedbackMessage';
// Importa o componente reutilizável de campo de entrada.
import Input from '../../components/Input';
// Importa o componente responsável por atualizar o título da página.
import PageTitle from '../../components/PageTitle';
// Importa o serviço responsável pela recuperação de senha.
import { passwordRecoveryService } from '../../services/passwordRecoveryService';
// Importa a função responsável pela validação da senha.
import { validatePassword } from '../../utils/validators';

// Componente responsável pelo processo de criação de uma nova senha.
const ResetPasswordPage = () => {
  // Inicializa o recurso de navegação entre páginas.
  const navigate = useNavigate();

  // Armazena a nova senha informada pelo usuário.
  const [password, setPassword] = useState('');

  // Armazena a confirmação da nova senha informada pelo usuário.
  const [confirmPassword, setConfirmPassword] = useState('');

  // Armazena mensagens de erro durante o processo.
  const [message, setMessage] = useState('');

  // Armazena mensagens de sucesso após alteração da senha.
  const [success, setSuccess] = useState('');

  // Processa o envio do formulário de alteração de senha.
  const handleSubmit = async (e) => {
    // Impede o comportamento padrão de envio do formulário.
    e.preventDefault();

    // Limpa mensagens de erro anteriores.
    setMessage('');

    // Limpa mensagens de sucesso anteriores.
    setSuccess('');

    // Verifica se a nova senha atende aos critérios de segurança definidos.
    if (!validatePassword(password)) {
      // Exibe mensagem informando os requisitos necessários para a senha.
      return setMessage(
        'A senha deve ter no mínimo 8 caracteres, incluindo uma letra e um número.'
      );
    }

    // Verifica se a confirmação da senha corresponde à senha informada.
    if (password !== confirmPassword) {
      // Exibe mensagem quando as senhas são diferentes.
      return setMessage('As senhas não conferem.');
    }

    try {
      // Executa a alteração da senha através do serviço de recuperação.
      await passwordRecoveryService.resetPassword(password);

      // Exibe mensagem de sucesso após alterar a senha.
      setSuccess('Senha alterada com sucesso! Você será redirecionado para o login...');

      // Redireciona para o login após confirmar alteração da senha.
      setTimeout(() => {
        navigate('/');
      }, 5000);
    } catch (err) {
      // Exibe a mensagem de erro retornada pelo serviço.
      setMessage(err.message);
    }
  };

  // Retorna a estrutura visual da página de redefinição de senha.
  return (
    <>
      {/* Define o título exibido na aba do navegador. */}
      <PageTitle title="Nova Senha - Berna" />

      {/* Cria o container principal centralizado da página. */}
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        {/* Cria o card visual contendo o formulário de alteração. */}
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
          {/* Exibe o título principal da página. */}
          <h1 className="mb-8 text-3xl font-bold text-gray-800">Nova senha</h1>

          {/* Cria o formulário responsável pelo envio da nova senha. */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Renderiza o campo para informar a nova senha. */}
            <Input
              // Define o campo como entrada de senha protegida.
              type="password"
              // Define o texto de identificação do campo.
              label="Nova senha"
              // Mantém o valor da senha sincronizado com o estado.
              value={password}
              // Atualiza o estado conforme o usuário informa a senha.
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Renderiza o campo para confirmar a nova senha. */}
            <Input
              // Define o campo como entrada de senha protegida.
              type="password"
              // Define o texto de identificação do campo.
              label="Confirmar senha"
              // Mantém o valor de confirmação sincronizado com o estado.
              value={confirmPassword}
              // Atualiza o estado conforme o usuário confirma a senha.
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {/* Exibe mensagens relacionadas a erros de validação. */}
            <FeedbackMessage message={message} type="error" />

            {/* Exibe mensagem de sucesso após alteração da senha. */}
            <FeedbackMessage message={success} type="success" />

            {/* Renderiza o botão para confirmar a alteração da senha. */}
            <Button type="submit">
              {/* Exibe o texto da ação disponível para o usuário. */}
              Alterar senha
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

// Exporta o componente para utilização nas rotas da aplicação.
export default ResetPasswordPage;
