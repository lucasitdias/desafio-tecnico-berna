// Componente reutilizável responsável por renderizar um botão configurável.
export const Button = ({ children, disabled = false, onClick, type = 'button' }) => {
  // Retorna a estrutura visual do botão.
  return (
    // Renderiza o elemento de botão da aplicação.
    <button
      // Define o comportamento do botão dentro ou fora de formulários.
      type={type}
      // Controla se o botão pode receber interação do usuário.
      disabled={disabled}
      // Executa a ação definida pelo componente pai ao clicar no botão.
      onClick={onClick}
      // Aplica os estilos visuais e estados de interação do botão.
      className="w-full rounded-md bg-blue-600 py-2 text-white transition hover:bg-blue-700 disabled:bg-blue-300"
    >
      {/* Exibe o conteúdo enviado entre as tags do componente. */}
      {children}
    </button>
  );
};

// Exporta o componente para permitir reutilização em outros arquivos.
export default Button;
