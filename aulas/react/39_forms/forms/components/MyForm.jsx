import "./MyForm.css";
import { useState } from "react";

const MyForm = ({ userName, userEmail }) => {
  // aula 536 - salvando dados de input
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);

  //   aula 541 - input textarea
  const [bio, setBio] = useState("");

  //   aula 542 - input select
  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  // aula 538 - envio de form
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, bio, role);

    // validacao
    // envio

    // aula 540 - limpando forms
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  return (
    <div>
      {/* aula 534 - criando formulário */}
      {/* aula 538 - envio de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            // aula 539 - controlled inputs
            value={name || ""}
          />
        </div>
        {/* aula 535 - label envolvendo input */}
        <label>
          <span>E-mail:</span>
          <input
            type="text"
            name="email"
            placeholder="Digite seu e-mail"
            // aula 537 - simplificando manipulação
            onChange={(e) => setEmail(e.target.value)}
            // aula 539 - controlled inputs
            value={email || ""}
          />
        </label>
        {/* aula 541 - input textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* aula 542 - input select */}
        <label>
          <span>Função no sistema:</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
