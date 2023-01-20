import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

const loaderdata = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "a error occured" }), {
      status: 500,
    });
  } else {
    const resData = await response.json();

    return resData.events;
  }
};

function EventsPage() {
  const data = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={data.events}>
        {(loadedevents) => <EventsList events={loadedevents} />}
      </Await>
    </Suspense>
  );

  /* const events = useLoaderData();
  return <EventsList events={events} />;*/

  /* return (
    <>
      <div style={{ textAlign: "center" }}>
        {//isLoading && <p>Loading...</p>}
        {//error && <p>{error}</p>}
      </div>
      {//!isLoading && fetchedEvents && <EventsList events={events} />}
    </>
  );*/
}

export default EventsPage;
export function loader() {
  return defer({
    events: loaderdata(),
  });
}
