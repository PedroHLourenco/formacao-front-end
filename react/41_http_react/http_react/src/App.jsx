import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

const url = "";

import "./App.css";

function App() {
  // aula 560 - resgate de dados
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     const res = await fetch(url);

  //     const data = await res.json();

  //     setProducts(data);
  //   }

  //   getData();
  // }, []);

  // aula 563 - fetch com custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  // aula 561 - envio de dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // // aula 562 - carregamento dinâmico
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // aula 564 - refatorando post
    httpConfig(product, "POST");
  };

  return (
    <div className="App">
      <h1>HTTP em React</h1>
      {/* aula 565 - estado de loading */}
      {loading && <p>Carregando...</p>}

      {/* aula 567 - tratando erros */}
      {error && <p>{error}</p>}

      {/* aula 560 - resgate de dados */}
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - R${product.price}
            </li>
          ))}
      </ul>

      {/* aula 561 - envio de dados */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            <span>Preço</span>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>

          {/* <input type="submit" value="Enviar" /> */}

          {/* aula 566 - loading no POST */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
