import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  let title = "Domyslny tytuł error";
  let message = "someting went wrong";
  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not found";
    message = "Nie znaleziono strony";
  }
  return (
    <>
      <h1>{title}</h1>
      <p>
        {message} {error.status}
      </p>
    </>
  );
};

export default ErrorPage;
