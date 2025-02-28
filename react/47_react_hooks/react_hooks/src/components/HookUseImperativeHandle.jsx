// aula 648 - useImperativeHandle
import React from "react";

// componentes
import SomeComponent from "./SomeComponent";

// hooks
import { useRef } from "react";

const HookUseImperativeHandle = () => {
  const componentRef = useRef();

  return (
    <div>
      <h2>useImperativeHandle</h2>
      <SomeComponent ref={componentRef} />
      <button onClick={() => componentRef.current.validate()}>Validar</button>
      <hr />
    </div>
  );
};

export default HookUseImperativeHandle;
