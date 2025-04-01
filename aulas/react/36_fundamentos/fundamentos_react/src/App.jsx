import "./App.css";

// aula 497 - importando componentes
import FirstComponent from "./components/FirstComponent";

import TemplateExpressions from "./components/TemplateExpressions";

// aula 501 - hierarquia de componentes
import MyComponent from "./components/MyComponent";

// aula 502 - eventos
import Events from "./components/Events";

function App() {
  // aula 499 - comentários
  return (
    // aula 498 - JSX
    <>
      {/* comentários em JSX */}
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
    </>
  );
}

export default App;
