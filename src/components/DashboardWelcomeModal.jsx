// Componente responsável por exibir o modal de boas-vindas do dashboard.
const DashboardWelcomeModal = ({ open, onClose }) => {
  // Verifica se o modal deve permanecer oculto.
  if (!open) {
    // Retorna vazio para impedir a renderização quando o modal está fechado.
    return null;
  }

  // Retorna a estrutura visual do modal de boas-vindas.
  return (
    // Cria o container principal que cobre toda a tela com o fundo escurecido.
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      {/* Cria o card central responsável por exibir o conteúdo do modal. */}
      <div className="bg-white rounded-lg p-6 sm:p-8 max-w-md w-full shadow-lg">
        {/* Exibe o título principal do modal. */}
        <h2 className="text-xl sm:text-2xl font-bold text-center text-slate-900 mb-4">Dashboard</h2>

        {/* Exibe a mensagem de boas-vindas e informações de autenticação. */}
        <p className="text-center text-xs sm:text-sm md:text-base text-slate-600 mb-6">
          {/* Exibe a primeira parte da mensagem de boas-vindas. */}
          <span className="block">Bem-vindo à Berna!</span>

          {/* Exibe a confirmação de autenticação e acesso à área protegida. */}
          <span className="block">
            Você foi autenticado com sucesso e pode acessar esta área protegida.
          </span>
        </p>

        {/* Cria o botão responsável por fechar o modal e acessar o dashboard. */}
        <button
          // Executa a função recebida para fechar o modal.
          onClick={onClose}
          // Aplica os estilos visuais e estados de interação do botão.
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 rounded-lg transition"
        >
          {/* Exibe o texto da ação disponível para o usuário. */}
          Acessar
        </button>
      </div>
    </div>
  );
};

// Exporta o componente para utilização em outros arquivos.
export default DashboardWelcomeModal;
