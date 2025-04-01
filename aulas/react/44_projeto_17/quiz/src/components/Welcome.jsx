import React from "react";

// hooks
import { useContext } from "react";

// img
import Quiz from "../img/quiz.svg";

// css
import "./Welcome.css";

// context
import { QuizContext } from "../context/quiz";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src={Quiz} alt="Início do quiz" />
    </div>
  );
};

export default Welcome;
