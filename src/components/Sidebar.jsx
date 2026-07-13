// Importa os ícones utilizados na navegação e ações da sidebar.
import { Home, LogOut, User, Menu, X } from 'lucide-react';
// Importa o hook utilizado para controlar o estado do menu mobile.
import { useState } from 'react';

// Importa a imagem da logo exibida na sidebar.
import logo from '../assets/logo.png';

// Componente responsável por renderizar a barra lateral de navegação da aplicação.
const Sidebar = ({ onLogout, user }) => {
  // Controla se o menu mobile está aberto ou fechado.
  const [menuOpen, setMenuOpen] = useState(false);

  // Fecha o menu lateral após uma interação do usuário.
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <>
      {/* Exibe uma camada sobre a tela para fechar o menu mobile ao clicar fora. */}
      {menuOpen && (
        <button
          type="button"
          aria-label="Fechar menu"
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={handleMenuClose}
        />
      )}

      {/* Renderiza o botão responsável por abrir e fechar o menu em dispositivos móveis. */}
      <button
        // Alterna o estado de abertura do menu mobile.
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-md"
      >
        {/* Exibe o ícone correspondente ao estado atual do menu. */}
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Renderiza a estrutura principal da barra lateral. */}
      <aside
        className={`
          fixed lg:relative
          top-0 left-0
          h-screen
          w-64
          bg-white
          border-r border-gray-200
          flex flex-col
          z-40
          transition-transform duration-300
          ${menuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Exibe a logo principal da aplicação. */}
        <div className="flex justify-center py-3 sm:py-4 md:py-2 border-b border-gray-200">
          <img
            // Define a origem da imagem da logo.
            src={logo}
            // Define o texto alternativo da imagem para acessibilidade.
            alt="Logo Berna"
            className="h-12 sm:h-13 md:h-14 lg:h-14 object-contain"
          />
        </div>

        {/* Exibe o título de identificação da área administrativa. */}
        <div className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-4 border-b border-gray-200 flex items-center justify-center">
          <h2 className="text-xs sm:text-sm md:text-base font-semibold text-slate-800 text-center">
            Bem-vindo à Dashboard
          </h2>
        </div>

        {/* Renderiza as opções principais de navegação. */}
        <nav className="px-3 sm:px-4 md:px-4 py-4 sm:py-5 md:py-6">
          <button
            // Fecha o menu mobile ao selecionar uma opção.
            onClick={handleMenuClose}
            className="w-full flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-3 rounded-lg text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-all"
          >
            {/* Exibe o ícone da página inicial. */}
            <Home size={20} className="flex-shrink-0 sm:w-5 sm:h-5 md:w-6 md:h-6" />

            {/* Exibe o nome da opção de navegação. */}
            <span className="font-medium text-sm sm:text-base md:text-base">Dashboard</span>
          </button>
        </nav>

        {/* Mantém o espaço restante entre o menu e as informações do usuário. */}
        <div className="flex-1"></div>

        {/* Renderiza a seção com informações e ações do usuário. */}
        <div className="border-t border-gray-200 px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-4 space-y-3">
          {/* Exibe os dados de identificação do usuário conectado. */}
          <div className="flex items-center gap-3">
            {/* Renderiza o avatar visual do usuário. */}
            <div className="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 flex-shrink-0">
              {/* Exibe o ícone de usuário. */}
              <User size={20} className="sm:w-5 sm:h-5 md:w-5 md:h-5" />
            </div>

            {/* Organiza as informações textuais do usuário. */}
            <div className="min-w-0 flex-1">
              {/* Exibe o nome do usuário autenticado. */}
              <h3 className="font-semibold text-sm sm:text-base md:text-lg text-gray-900">
                {user?.name}
              </h3>

              {/* Exibe o email do usuário autenticado. */}
              <p className="text-xs sm:text-sm md:text-base text-gray-500">{user?.email}</p>
            </div>
          </div>

          {/* Renderiza o botão responsável pelo encerramento da sessão. */}
          <button
            // Fecha o menu mobile e executa o logout da aplicação.
            onClick={() => {
              // Fecha o menu lateral antes de sair.
              handleMenuClose();

              // Executa a função de logout recebida pelo componente pai.
              onLogout();
            }}
            className="w-full flex items-center gap-2 justify-center px-3 sm:px-4 md:px-4 py-2 sm:py-3 md:py-3 text-xs sm:text-sm md:text-base text-red-600 hover:bg-red-50 rounded-lg transition font-semibold border border-red-200"
          >
            {/* Exibe o ícone de saída da aplicação. */}
            <LogOut size={18} className="sm:w-5 sm:h-5 md:w-5 md:h-5" />
            {/* Exibe o texto da ação de logout. */}
            Sair
          </button>
        </div>
      </aside>
    </>
  );
};

// Exporta o componente para utilização em outros arquivos.
export default Sidebar;
