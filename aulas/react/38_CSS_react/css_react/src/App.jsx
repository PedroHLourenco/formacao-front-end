import "./App.css";

// aula 527 - CSS de componentes
import MyComponent from "./components/MyComponent";

// aula 531 - css modules
import Title from "./components/Title";

function App() {
  // aula 529 - inline style dinâmico
  const n = 15;

  // aula 530 - classes dinâmicas
  const redTitle = true;

  return (
    <>
      {/* aula 526 - css global */}
      <h1 className="title">CSS no React</h1>

      {/* aula 527 - CSS de componentes */}
      <MyComponent />
      <p>Pegou o CSS do componente</p>

      {/* aula 528 - Inline Style */}
      <p
        style={{ color: "blue", padding: "25px", borderTop: "1px dotted blue" }}
      >
        Este elemento tem estilos internos
      </p>

      {/* aula 529 - inline style dinâmico */}
      <h2 style={n > 10 ? { color: "purple" } : { color: "magenta" }}>
        Inline Style Dinâmico
      </h2>
      <h2 style={n > 20 ? { color: "purple" } : { color: "magenta" }}>
        Inline Style Dinâmico
      </h2>

      {/* aula 530 - classes dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Esse título terá uma classe
      </h2>

      {/* aula 531 - css modules */}
      <Title />
    </>
  );
}

export default App;
