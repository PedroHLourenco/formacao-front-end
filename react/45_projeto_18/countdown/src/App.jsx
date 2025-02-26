// componentes
import { Outlet } from "react-router-dom";

// hooks

// img
import NewYear from "./assets/newyear.jpg";

// css
import "./App.css";

function App() {
  

  return (
    <div className="App" style={{ backgroundImage: `url(${NewYear})` }}>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
