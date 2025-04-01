import React from "react";

// aula 628 - alterando valor do context
// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

// componentes
import ChangeCounter from "../components/ChangeCounter";

// aula 629 - refatorando context em hook
import { useCounterContext } from "../hooks/useCounterContext";
3;

// aula 630 - contexto complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);

  // aula 629 - refatorando context em hook
  const { counter } = useCounterContext();

  // aula 630 - contexto complexo
  const { color, dispatch } = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
      {/* aula 631 - alterando contexto complexo */}

      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
};

export default Home;
