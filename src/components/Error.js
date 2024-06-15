import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h3>OOPS Something wnet wrong!!!!</h3>
      <h3>error.StatusCode</h3>
    </>
  );
};

export default ErrorComponent;
