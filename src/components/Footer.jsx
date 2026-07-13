// Importa a imagem do coração utilizada no lado esquerdo do rodapé.
import coracao from '../assets/coracao.png';

// Importa a imagem da logo utilizada no lado direito do rodapé.
import logo from '../assets/logo.png';

// Componente responsável por renderizar o rodapé da aplicação.
const Footer = () => {
  // Retorna a estrutura visual do rodapé.
  return (
    // Cria o container principal do rodapé com borda superior e espaçamentos responsivos.
    <footer className="border-t border-gray-200 bg-white px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-3 md:py-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 md:gap-4">
        {/* Cria a área esquerda do rodapé com a mensagem institucional. */}
        <div className="flex items-center gap-2">
          {/* Exibe a imagem decorativa de coração. */}
          <img
            // Define a origem da imagem do coração.
            src={coracao}
            // Define o texto alternativo para acessibilidade da imagem.
            alt="Coração"
            // Controla o tamanho e ajuste visual da imagem em diferentes telas.
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 object-contain"
          />
          {/* Exibe a mensagem institucional da empresa. */}
          <span className="text-xs sm:text-sm md:text-base text-gray-600">
            Qualidade e tradição em cada detalhe.
          </span>
        </div>

        {/* Cria a área direita do rodapé com a identificação da marca. */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Exibe a logo principal da aplicação. */}
          <img
            // Define a origem da imagem da logo.
            src={logo}
            // Define o texto alternativo para acessibilidade da imagem.
            alt="Logo Berna"
            // Controla o tamanho e ajuste visual da logo em diferentes telas.
            className="h-5 sm:h-6 md:h-6 lg:h-7 object-contain"
          />
          {/* Exibe o ano de início da empresa. */}
          <span className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
            Desde 1953
          </span>
        </div>
      </div>
    </footer>
  );
};

// Exporta o componente para permitir reutilização em outros arquivos.
export default Footer;
