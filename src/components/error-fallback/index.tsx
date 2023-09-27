import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorFallback = () => {
  const error = useRouteError();
  let isFourOhFour = false;

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      isFourOhFour = true;
    }
  }

  return (
    <div
      role="alert"
      className="flex h-screen flex-col items-center justify-center gap-8 text-2xl"
    >
      {isFourOhFour ? (
        <p>این صفحه وجود ندارد!</p>
      ) : (
        <>
          <p>خطایی رخ داده است.</p>
          <button
            className="rounded-md p-4 ring-2 ring-orange-400"
            onClick={() => window.location.reload()}
          >
            بارگذاری مجدد
          </button>
        </>
      )}
    </div>
  );
};
