import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

const Errorpage = () => {
  const error = useRouteError();

  let message = JSON.parse(error.data).message;
  if (error.status === 404) {
    message = "Page Not Found";
  }
  if (error.status === 500) {
    message = "Server down";
  }
  return (
    <PageContent title="error here">
      <p>{message}</p>
    </PageContent>
  );
};

export default Errorpage;
