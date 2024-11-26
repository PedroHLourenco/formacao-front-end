// aula 502 - eventos
import React from "react";

const Events = () => {
  const handleClick = (e) => {
    console.log(e);
    console.log("executou");
  };

  // aula 504 - função de renderização
  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso</h1>;
    } else {
      return <h1>Renderizando outra coisa</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => console.log("testando um evento")}>
          Clique aqui
        </button>
      </div>

      {/* aula 503 - evento com função */}
      <div>
        <button onClick={handleClick}>Clique aqui - com função</button>
      </div>

      {/* aula 504 - função de renderização */}
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
