// aula 634 - useState
import { useState } from "react";

import React from "react";

const HookUseState = () => {
  let username = "João";
  const [name, setName] = useState("Pedro");

  const changeNames = () => {
    username = "João da Silva";

    setName("Pedro Lourenço");
  };

  // aula 635 - useState com input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(age);
  };

  return (
    <div>
      <h2>useState</h2>
      <p>Variável: {username}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nome</button>

      {/* aula 635 - useState com input */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} anos</p>
      <hr />
    </div>
  );
};

export default HookUseState;
