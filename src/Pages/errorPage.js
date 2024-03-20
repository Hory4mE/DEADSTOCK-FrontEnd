import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <body class="flex justify-center items-center h-screen bg-gray-100">
      <div id="error-page" class="text-center">
        <h1 class="text-4xl font-bold mb-4">Oops!</h1>
        <p class="text-xl mb-4">Sorry, an unexpected error has occurred.</p>
        <p class="italic text-lg">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </body>
  );
}
