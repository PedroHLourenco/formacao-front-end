// aula 638 - useEffect
import React from "react";

// hooks
import { useEffect, useState } from "react";

const HookUseEffect = () => {
  useEffect(() => {
    console.log("Estou sendo executado");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // aula 639 - array de dependências vazio
  useEffect(() => {
    console.log("Serei executado apenas uma vez");
  }, []);

  // aula 640 - array de dependências com valores
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executado apenas quando muda o anotherNumber");
    }
  }, [anotherNumber]);

  // aula 641 - cleanup do useEffect
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log("hello world");
  //     setAnotherNumber(anotherNumber + 1);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Número: {number}</p>
      <button onClick={changeSomething}>Executar</button>
      <p>Outro número: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar o outro número
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
