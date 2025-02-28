// aula 645 - useCallback
import React from "react";

// componentes
import List from "./List";

// hooks
import { useCallback, useState } from "react";

const HookUseCallback = () => {
  const [counter, setCounter] = useState(0);

  const getItemsfromDataBase = useCallback(() => {
    return ["a", "b", "c"];
  }, []);

  return (
    <div>
      <h2>useCallback</h2>
      <List getItems={getItemsfromDataBase} />
      <button onClick={() => setCounter(counter + 1)}>Alterar!</button>
      <p>{counter}</p>
      <hr />
    </div>
  );
};

export default HookUseCallback;
