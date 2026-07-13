// Componente responsável por exibir mensagens de feedback para o usuário.
export const FeedbackMessage = ({ message, type = 'error' }) => {
  // Interrompe a renderização quando não existe nenhuma mensagem para exibir.
  if (!message) return null;

  // Define a cor de fundo conforme o tipo de mensagem informado.
  const bgColor = type === 'error' ? 'bg-red-100' : 'bg-green-100';

  // Define a cor do texto conforme o tipo de mensagem informado.
  const textColor = type === 'error' ? 'text-red-600' : 'text-green-600';

  // Retorna o componente visual com os estilos e mensagem configurados.
  return (
    // Renderiza o container responsável pela exibição do feedback.
    <div className={`rounded-md ${bgColor} p-3 text-sm ${textColor}`}>
      {/* Exibe o conteúdo da mensagem recebida pelo componente. */}
      {message}
    </div>
  );
};

// Exporta o componente para permitir reutilização em outros arquivos.
export default FeedbackMessage;
