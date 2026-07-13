// Importa o hook responsável por executar efeitos colaterais no componente.
import { useEffect } from 'react';

// Componente responsável por atualizar o título da página no navegador.
const PageTitle = ({ title }) => {
  // Executa a atualização do título sempre que o valor recebido for alterado.
  useEffect(() => {
    // Define o texto exibido na aba do navegador.
    document.title = title;
  }, [title]);

  // Retorna vazio porque o componente não possui interface visual.
  return null;
};

// Exporta o componente para utilização em outros arquivos.
export default PageTitle;
