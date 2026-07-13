// Importa os componentes responsáveis pela configuração de navegação entre páginas.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Importa o componente responsável por proteger rotas privadas.
import PrivateRoute from './PrivateRoute.jsx';
// Importa a página de autenticação do usuário.
import LoginPage from '../pages/Login/LoginPage.jsx';
// Importa a página de solicitação de recuperação de senha.
import ForgotPasswordPage from '../pages/ForgotPassword/ForgotPasswordPage.jsx';
// Importa a página de validação do código de recuperação.
import VerifyCodePage from '../pages/VerifyCode/VerifyCodePage.jsx';
// Importa a página de criação de uma nova senha.
import ResetPasswordPage from '../pages/ResetPassword/ResetPasswordPage.jsx';
// Importa a página principal do dashboard.
import DashboardPage from '../pages/Dashboard/DashboardPage.jsx';

// Componente responsável por centralizar todas as rotas da aplicação.
const AppRoutes = () => {
  // Retorna a estrutura de navegação da aplicação.
  return (
    // Define o provedor principal de rotas utilizando o histórico do navegador.
    <BrowserRouter>
      <Routes>
        {/* Define a rota de acesso à página de login. */}
        <Route path="/" element={<LoginPage />} />

        {/* Define a rota para iniciar o processo de recuperação de senha. */}
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Define a rota para validação do código recebido pelo usuário. */}
        <Route path="/verify-code" element={<VerifyCodePage />} />

        {/* Define a rota para criação de uma nova senha. */}
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        {/* Define a rota protegida responsável pelo acesso ao dashboard. */}
        <Route
          // Define o caminho utilizado para acessar o dashboard.
          path="/dashboard"
          // Renderiza o conteúdo somente após validação da rota privada.
          element={
            // Componente responsável por bloquear acesso sem autenticação.
            <PrivateRoute>
              {/* Renderiza a página principal do dashboard após autorização. */}
              <DashboardPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

// Exporta o componente para utilização na configuração principal da aplicação.
export default AppRoutes;
