import { Link } from "react-router-dom";

const data = [
  { id: "e1", title: "event-1" },
  { id: "e2", title: "event-2" },
  { id: "e3", title: "event-3" },
];

const EventPage = () => {
  return (
    <main>
      <ul>
        {data.map((d) => {
          return (
            <li key={d.id}>
              <Link to={`/events/${d.id}`}>{d.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
export default EventPage;
