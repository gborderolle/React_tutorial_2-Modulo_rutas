import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();

  return (
    <>
      <h1>Detalles del producto</h1>
      <p>Producto: {params.id}</p>
      <p>
        <Link to=".." relative="path">
          Volver
        </Link>
      </p>
    </>
  );
}
