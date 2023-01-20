import { redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const events = useRouteLoaderData("event-id");

  return <EventItem event={events} />;
};
export default EventDetailPage;
export async function loader({ request, params }) {
  const response = await fetch(
    "http://localhost:8080/events/" + params.eventid
  );

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Element don't exist" }), {
      status: 500,
    });
  } else {
    const resData = await response.json();

    return resData.event;
  }
}

export async function action({ request, params }) {
  const response = await fetch(
    "http://localhost:8080/events/" + params.eventid,
    {
      method: "delete",
    }
  );
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Element don't exist" }), {
      status: 500,
    });
  } else {
    return redirect("/events");
  }
}
