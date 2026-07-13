// Importa o hook responsável pela navegação entre rotas da aplicação.
import { useNavigate } from 'react-router-dom';
// Importa o hook responsável pelo gerenciamento de estados locais.
import { useState } from 'react';
// Importa o componente da barra lateral de navegação.
import Sidebar from '../../components/Sidebar';
// Importa o componente responsável pelo rodapé da aplicação.
import Footer from '../../components/Footer';
// Importa o componente responsável pela atualização do título da página.
import PageTitle from '../../components/PageTitle.jsx';
// Importa o serviço responsável pelas operações de autenticação.
import { authService } from '../../services/authService';
// Importa o componente do modal de boas-vindas do dashboard.
import DashboardWelcomeModal from '../../components/DashboardWelcomeModal';
// Importa a imagem utilizada como fundo visual do dashboard.
import dashboardFundo from '../../assets/dashboard-fundo.png';

// Componente responsável por renderizar a página principal do dashboard.
const DashboardPage = () => {
  // Recupera os dados do usuário autenticado para exibição no dashboard.
  const user = authService.getCurrentUser();

  // Inicializa o recurso de navegação entre páginas.
  const navigate = useNavigate();

  // Controla a exibição inicial do modal de boas-vindas.
  const [showModal, setShowModal] = useState(true);

  // Função responsável por encerrar a sessão do usuário.
  const handleLogout = () => {
    // Executa o processo de logout através do serviço de autenticação.
    authService.logout();
    // Redireciona o usuário para a página inicial após sair.
    navigate('/');
  };

  // Retorna a estrutura visual completa da página do dashboard.
  return (
    <>
      {/* Define o título exibido na aba do navegador. */}
      <PageTitle title="Dashboard - Berna" />

      {/* Cria o container principal da página com layout flexível. */}
      <div className="flex min-h-screen bg-white">
        {/* Renderiza a barra lateral com a função de logout configurada. */}
        <Sidebar user={user} onLogout={handleLogout} />

        {/* Renderiza a área principal de conteúdo do dashboard. */}
        <main className="flex-1 flex flex-col w-0">
          {/* Renderiza a seção responsável pelo conteúdo visual principal. */}
          <section className="flex-1 flex items-start justify-end px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-4 overflow-y-auto">
            {/* Exibe a imagem principal do dashboard. */}
            <img
              // Define a imagem utilizada como fundo visual da página.
              src={dashboardFundo}
              // Define o texto alternativo da imagem para acessibilidade.
              alt="Dashboard"
              // Controla o tamanho, ajuste e comportamento visual da imagem.
              className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain select-none pointer-events-none"
            />
          </section>

          {/* Renderiza o rodapé da aplicação. */}
          <Footer />
        </main>

        {/* Renderiza o modal inicial de boas-vindas do dashboard. */}
        <DashboardWelcomeModal open={showModal} onClose={() => setShowModal(false)} />
      </div>
    </>
  );
};

// Exporta o componente para utilização em rotas da aplicação.
export default DashboardPage;
