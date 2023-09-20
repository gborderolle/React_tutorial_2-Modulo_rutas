import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Componente Home</h1>
      <p>
        Go to <Link to="products">Lista de productos</Link>.
      </p>
    </>
  );
}
