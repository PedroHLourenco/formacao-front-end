import React from "react";

// aula 628 - alterando valor do context
// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

// aula 629 - refatorando context em hook
import { useCounterContext } from "../hooks/useCounterContext";

// aula 630 - contexto complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Contact = () => {
  const { counter } = useCounterContext();

  // aula 630 - contexto complexo
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Página de Contato</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Contact;
