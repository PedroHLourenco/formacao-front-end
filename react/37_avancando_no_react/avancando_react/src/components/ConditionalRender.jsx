// aula 514 - renderização condicional
import React from "react";

const ConditionalRender = () => {
  const x = 5;

  const name = "Pedro";

  return (
    <div>
      <h3>Isso será exibido?</h3>
      {x > 2 && <p>Se x for true, sim</p>}

      {/* aula 515 - else na render condicional */}
      <h3>Render Ternário</h3>
      {name === "Pedro" ? (
        <div>
          <p>Olá, {name}</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
