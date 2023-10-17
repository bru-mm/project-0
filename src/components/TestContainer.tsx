import './TestContainer.css';

interface ContainerProps { }

const TestContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <h1>Bem-vindo ao Meu Site</h1>
      <p>Este é um parágrafo de exemplo.</p>
      <button id="btn0">Clique Aqui</button>
      <section>
         <h2>Seção Importante</h2>
         <p>Esta é uma seção com conteúdo relevante.</p>
      </section>
      
    </div>
  );
};

export default TestContainer;
