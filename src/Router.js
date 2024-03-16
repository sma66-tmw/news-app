import {
    createBrowserRouter,
    RouterProvider
  } from "react-router-dom";
  import Home from "./pages/Home";
  
  function ErrorElement() {
    return <h1 className="title m-5 has-text-centered">404 Page Not Found</h1>
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorElement />
    },
  ]);

  export default function Router() {
    return <RouterProvider router={router} />
  };