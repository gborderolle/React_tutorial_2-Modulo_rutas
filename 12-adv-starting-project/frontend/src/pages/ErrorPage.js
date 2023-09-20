import { Link, useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "Ocurrió un error.";
  let message = "¡Algo pasó!";

  switch (error.status) {
    case 500: {
      message = JSON.parse(error.data).message;
      break;
    }
    case 404: {
      title = "Recurso no encontrado.";
      message = error.data.message;
      break;
    }
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
