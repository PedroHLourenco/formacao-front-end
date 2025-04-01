import MyForm from "../components/MyForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Form em React</h1>
      <MyForm userName="Pedro" userEmail="pedro@email.com" />
    </div>
  );
}

export default App;
