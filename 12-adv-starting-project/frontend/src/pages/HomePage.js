import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1>Componente HomePage</h1>
      <p>
        Go to <Link to="events">Lista de eventos</Link>.
      </p>
    </>
  );
}
