// aula 587 - rota dinâmica
import { useFetch } from "../hooks/useFetch";
import { useParams, Link } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/products/" + id;
  const { data: product } = useFetch(url);

  if (!product) return <p>Carregando...</p>;

  return (
    <div>
      <p>ID do produto: {id}</p>
      <div>
        <h1>{product.name}</h1>
        <p>R${product.price}</p>

        {/* aula 588 - nested routes */}
        <Link to={`/products/${product.id}/info`}>Mais informações</Link>
      </div>
    </div>
  );
};

export default Product;
