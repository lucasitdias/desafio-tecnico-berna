// Importa o componente responsável por redirecionar o usuário entre rotas.
import { Navigate } from 'react-router-dom';

// Importa o serviço responsável pela validação da autenticação do usuário.
import { authService } from '../services/authService';

// Componente responsável por controlar o acesso às rotas privadas.
export const PrivateRoute = ({ children }) => {
  // Verifica se existe uma autenticação válida antes de liberar o acesso.
  if (!authService.isAuthenticated()) {
    // Redireciona o usuário para a página inicial quando não estiver autenticado.
    return <Navigate to="/" replace />;
  }

  // Retorna o conteúdo protegido quando a autenticação é válida.
  return children;
};

// Exporta o componente para ser utilizado na proteção das rotas.
export default PrivateRoute;
