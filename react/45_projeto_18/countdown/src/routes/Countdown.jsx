import React from "react";

// componentes
import Title from "../components/Title";
import Counter from "../components/Counter";

// hooks
import useCountdown from "../hooks/useCountdown";

const Countdown = () => {
  const [day, hour, minute, second] = useCountdown("Jan, 2026, 00:00:00");

  return (
    <>
      <Title title="Contagem Regressiva para 2026" />
      <div className="countdown-container">
        <Counter title="Dias" number={day} />
        <Counter title="Horas" number={hour} />
        <Counter title="Minutos" number={minute} />
        <Counter title="Segundos" number={second} />
      </div>
    </>
  );
};

export default Countdown;
