// aula 511 - renderização de lista
import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "José", "Matheus"]);

  // aula 512 - propriedade key
  const [users, setUsers] = useState([
    { id: 1, name: "Matheus", age: 31 },
    { id: 2, name: "Pedro", age: 21 },
    { id: 3, name: "José", age: 47 },
  ]);

  // aula 513 - previous state
  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) =>
      prevUsers.filter((user) => randomNumber !== user.id)
    );
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      {/* aula 512 - propriedade key */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      {/* aula 513 - previous state */}
      <button onClick={deleteRandom}>Deletar usuário</button>
    </div>
  );
};

export default ListRender;
