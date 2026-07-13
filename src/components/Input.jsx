// Componente reutilizável responsável por renderizar campos de entrada com suporte a label, ícone e alternância de senha.
export const Input = ({
  // Identificador único utilizado pelo campo de entrada.
  id,
  // Nome do campo enviado nas informações do formulário.
  name,
  // Define o tipo de entrada do campo.
  type = 'text',
  // Controla o valor atual do campo.
  value,
  // Executa a atualização do valor quando o usuário altera o campo.
  onChange,
  // Define o texto exibido quando o campo está vazio.
  placeholder = '',
  // Controla se o campo estará disponível para interação.
  disabled = false,
  // Define o texto de identificação exibido acima do campo.
  label = '',
  // Recebe um componente de ícone para exibição dentro do campo.
  icon: Icon = null,
  // Controla a exibição do botão de alternância de senha.
  showToggle = false,
  // Executa a alteração do estado de visualização da senha.
  onToggle = null,
  // Define se a senha está atualmente visível.
  isPasswordVisible = false,
}) => {
  // Retorna a estrutura visual completa do campo de entrada.
  return (
    // Container principal responsável pelo agrupamento do label e campo.
    <div>
      {/* Exibe o label somente quando um texto de identificação for informado. */}
      {label && (
        // Associa o texto do label ao campo correspondente para acessibilidade.
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}

      {/* Container relativo utilizado para posicionar elementos internos do campo. */}
      <div className="relative">
        {/* Exibe o ícone informado no lado esquerdo do campo. */}
        {Icon && (
          // Posiciona o ícone dentro do campo de entrada.
          <div className="absolute left-3 top-3 text-gray-400">
            {/* Renderiza o componente de ícone recebido como propriedade. */}
            <Icon size={20} />
          </div>
        )}

        {/* Renderiza o campo principal de entrada de dados. */}
        <input
          // Define o identificador do campo para referência e acessibilidade.
          id={id}
          // Define o nome do campo utilizado no formulário.
          name={name}
          // Define o comportamento de entrada do campo.
          type={type}
          // Mantém o valor do campo sincronizado com o estado externo.
          value={value}
          // Atualiza o valor do campo quando ocorre uma alteração.
          onChange={onChange}
          // Exibe uma sugestão de preenchimento quando o campo está vazio.
          placeholder={placeholder}
          // Impede interação quando o campo está desabilitado.
          disabled={disabled}
          // Aplica os estilos visuais e espaçamentos conforme os recursos utilizados.
          className={`w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none transition ${
            Icon ? 'pl-10' : 'pl-3'
          } ${showToggle ? 'pr-10' : 'pr-3'}`}
        />

        {/* Exibe o botão de alternância de senha quando configurado. */}
        {showToggle && onToggle && (
          // Botão responsável por alterar a visibilidade da senha.
          <button
            // Define o botão como ação comum para evitar envio de formulário.
            type="button"
            // Executa a função responsável por alternar a visualização da senha.
            onClick={onToggle}
            // Aplica os estilos visuais e estados de interação do botão.
            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
          >
            {/* Exibe o ícone conforme o estado atual de visibilidade da senha. */}
            {isPasswordVisible ? (
              // Ícone indicando que a senha está visível.
              <svg
                // Define o namespace necessário para renderização do SVG.
                xmlns="http://www.w3.org/2000/svg"
                // Define a largura do ícone.
                width="20"
                // Define a altura do ícone.
                height="20"
                // Define a área de visualização do SVG.
                viewBox="0 0 24 24"
                // Remove o preenchimento interno do ícone.
                fill="none"
                // Define a cor das linhas usando a cor atual do elemento.
                stroke="currentColor"
                // Define a espessura das linhas do SVG.
                strokeWidth="2"
              >
                {/* Desenha o contorno do olho aberto. */}
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                {/* Desenha a pupila do olho. */}
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            ) : (
              // Ícone indicando que a senha está ocultada.
              <svg
                // Define o namespace necessário para renderização do SVG.
                xmlns="http://www.w3.org/2000/svg"
                // Define a largura do ícone.
                width="20"
                // Define a altura do ícone.
                height="20"
                // Define a área de visualização do SVG.
                viewBox="0 0 24 24"
                // Remove o preenchimento interno do ícone.
                fill="none"
                // Define a cor das linhas usando a cor atual do elemento.
                stroke="currentColor"
                // Define a espessura das linhas do SVG.
                strokeWidth="2"
              >
                {/* Desenha o ícone de olho oculto com linha de bloqueio. */}
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                {/* Desenha a linha que indica a ocultação da senha. */}
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

// Exporta o componente para permitir reutilização em outros arquivos.
export default Input;
