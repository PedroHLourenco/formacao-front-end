// componentes
import { Outlet } from "react-router-dom";

// hooks
import { useContext } from "react";

// context
import { CountdownContext } from "./context/CountdownContext";

// img
import NewYear from "./assets/newyear.jpg";

// css
import "./App.css";

function App() {
  const { event } = useContext(CountdownContext);

  let eventImage = null;

  if (event) eventImage = event.image;

  return (
    <div
      className="App"
      style={
        eventImage
          ? { backgroundImage: `url(${eventImage})` }
          : { backgroundImage: `url(${NewYear})` }
      }
    >
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
