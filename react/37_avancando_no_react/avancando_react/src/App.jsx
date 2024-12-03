import { useState } from "react";
import "./App.css";

// aula 508 - importando imagens - assets
import city from "./assets/city.jpg";

// aula 510 - hook useState
import Data from "./components/data";

// aula 511 - renderização de lista
import ListRender from "./components/ListRender";

// aula 514 - renderização condicional
import ConditionalRender from "./components/ConditionalRender";

// aula 515 - props
import ShowUserName from "./components/ShowUserName";

// aula 517 - desestruturando props
import CarDetails from "./components/CarDetails";

// aula 519 - renderização de componentes com map
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "Audi", color: "Preto", km: 12000 },
  { id: 3, brand: "BMW", color: "Azul", km: 7500 },
];

// aula 520 - fragments
import Fragments from "./components/Fragments";

// aula 521 - children props
import Container from "./components/Container";

// aula 522 - funções em props
import ExecuteFunction from "./components/ExecuteFunction";

// aula 523 - state lift
import Message from "./components/Message";
import ChangeMessage from "./components/ChangeMessage";

function App() {
  // aula 522 - funções em props
  function showMessage() {
    console.log("Evento do componente pai");
  }

  // aula 523 - state lift
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
      <h1>Avançando em React</h1>
      {/* aula 507 - inserindo imagens - public */}
      <img src="/img1.jpg" alt="Imagem" />

      {/* aula 508 - importando imagens - assets */}
      <img src={city} alt="Imagem de uma cidade" />

      {/* aula 510 - hook useState */}
      <Data />

      {/* aula 511 - renderização de lista */}
      <ListRender />

      {/* aula 514 - renderização condicional */}
      <ConditionalRender />

      {/* aula 515 - props */}
      <ShowUserName name="Pedro" />

      {/* aula 517 - desestruturando props */}
      <CarDetails brand="VW" km={999} color="Vermelho" />

      {/* aula 518 - reaproveitando componentes */}
      <CarDetails brand="Fiat" km={100000} color="Branco" />
      <CarDetails km={0} brand="Audi" color="Preto" />

      {/* aula 519 - renderização de componentes com map */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}

      {/* aula 520 - fragments */}
      <Fragments />

      {/* aula 521 - children props */}
      <Container>
        <p>Alguma coisa</p>
      </Container>
      <Container>
        <div>
          <h2>Teste</h2>
          <p>Meu container</p>
        </div>
      </Container>

      {/* aula 522 - funções em props */}
      <ExecuteFunction myFunction={showMessage} />

      {/* aula 523 - state lift */}
      <Message msg={message} />
      <ChangeMessage handleMessage={handleMessage} />
    </div>
  );
}

export default App;
