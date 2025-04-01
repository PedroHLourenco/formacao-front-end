// aula 501 - hierarquia de componentes
import MyComponent from "./MyComponent";

// aula 496 - criando componente
const FirstComponent = () => {
  return (
    // aula 498 - JSX
    <div>
      <h2>Meu primeiro componente</h2>
      <MyComponent />
    </div>
  );
};

export default FirstComponent;
