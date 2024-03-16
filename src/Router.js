import {
    createBrowserRouter,
    RouterProvider
  } from "react-router-dom";
  import Home from "./pages/Home";
  import Layout from "./components/Layout";
  
  function ErrorElement() {
    return <h1 className="title m-5 has-text-centered">404 Page Not Found</h1>
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorElement />,
      children: [
        {
            path: "",
            element: <Home />
        }
      ]
    },
  ]);

  export default function Router() {
    return <RouterProvider router={router} />
  };