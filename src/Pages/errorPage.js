import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <body className="flex justify-center items-center h-screen bg-gray-100">
      <div id="error-page" className="text-center">
        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <p className="text-xl mb-4">Sorry, an unexpected error has occurred.</p>
        <p className="italic text-lg">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </body>
  );
}
