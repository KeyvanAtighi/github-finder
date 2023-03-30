import { useRouteError } from "react-router-dom";

function ErrorPage() {
  // const error = useRouteError();
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span className="text-8xl p-3">404</span>
        <i>NotFound</i>
      </div>
    </>
  );
}

export default ErrorPage;
