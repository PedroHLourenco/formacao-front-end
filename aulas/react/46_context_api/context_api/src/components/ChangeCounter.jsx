// aula 628 - alterando valor do context
import React from "react";

// hooks
import { useContext } from "react";

// context
import { CounterContext } from "../context/CounterContext";

// aula 629 - refatorando context em hook
import { useCounterContext } from "../hooks/useCounterContext";

const ChangeCounter = () => {
  const { counter, setCounter } = useCounterContext();

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </div>
  );
};

export default ChangeCounter;
