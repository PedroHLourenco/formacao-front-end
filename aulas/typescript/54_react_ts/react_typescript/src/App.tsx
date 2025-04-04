// aula 760 - react com typescript
import React, { createContext } from "react";

// aula 766 - importando componentes
import FirstComponent from "./components/FirstComponent";

// aula 767 - desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

// aula 768 - useState com TS
import State from "./components/State";

// aula 772 - consumindo conte
import Context from "./components/Context";

// aula 770 - types
type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Aquilo";

// aula 771 - context api
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // aula 763 - variáveis no react
  const name: string = "Pedro";
  const age: number = 21;
  const isDeveloper: boolean = true;

  // aula 764 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };

  // aula 770 - types
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;

  // mySecondText = "opa";

  const testandoFixed: fixed = "Isso";

  // aula 771 - context api
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "React",
    projects: 5,
  };

  return (
    // aula 771 - context api
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>React com Typescript</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isDeveloper && <p>É desenvolvedor</p>}

        <h3>{userGreeting(name)}</h3>
        {/* aula 766 - importando componentes */}
        <FirstComponent />

        {/*  aula 767 - desestruturando props */}
        <SecondComponent name="Segundo" />
        <Destructuring
          title="Primeiro post"
          content="Conteúdo"
          commentsQty={10}
          tags={["ts", "js"]}
          category={Category.TS}
        />
        <Destructuring
          title="Segundo post"
          content="Outro Conteúdo"
          commentsQty={5}
          tags={["python"]}
          category={Category.P}
        />

        {/* aula 768 - useState com TS */}
        <State />

        {/* aula 770 - types */}
        {myText && <p>Tem texto na variável</p>}
        {mySecondText && <p>Tem texto na variável</p>}
      </div>

      {/* aula 772 - consumindo contexto */}
      <Context />
    </AppContext.Provider>
  );
}

export default App;
