import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventsNavigation from "./components/EventsNavigation";
import MainNavigation from "./components/MainNavigation";
import EditEventPage from "./pages/EditEventPage";
import Errorpage from "./pages/Error";
import EventDetailPage, {
  action as actiondelet,
  loader as detailloader,
} from "./pages/EventDetailPage";
import EventsPage, { loader as loaderevent } from "./pages/Events";
import HomePage from "./pages/Homepage";
import NewEventPage from "./pages/NewEventPage";
import { action as actionhandler } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    errorElement: <Errorpage />,
    children: [
      { path: "", element: <HomePage /> },
      {
        path: "events",
        element: <EventsNavigation />,

        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: loaderevent,
          },
          {
            path: ":eventid",
            id: "event-id",
            loader: detailloader,

            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: actiondelet,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: actionhandler,
              },
            ],
          },
          { path: "new", element: <NewEventPage />, action: actionhandler },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
