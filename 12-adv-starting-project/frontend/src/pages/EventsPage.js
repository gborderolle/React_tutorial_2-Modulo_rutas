import { Link } from "react-router-dom";

const EVENTS = [
  { id: '1', title: "Evento 1" },
  { id: '2', title: "Evento 2" },
  { id: '3', title: "Evento 3" },
  { id: '4', title: "Evento 4" },
];

export default function EventsPage() {
  return (
    <>
      <h1>Componente EventsPage</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
