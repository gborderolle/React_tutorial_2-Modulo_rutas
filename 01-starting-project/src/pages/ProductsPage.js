import { Link } from "react-router-dom";

export default function ProductsPage() {
  const PRODUCTS = [
    { id: "1", title: "Producto 1" },
    { id: "2", title: "Producto 2" },
    { id: "3", title: "Producto 3" },
    { id: "4", title: "Producto 4" },
  ];

  return (
    <>
      <h1>Componente ProductsPage</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
