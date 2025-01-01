import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Componants/Home/Home";
import About from "./Componants/About/About";
import Contact from "./Componants/Contact/Contact";
import Portfolio from "./Componants/Portfolio/Portfolio";
import Layout from "./Componants/Layout/Layout";

let router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <h1>404 Not Found</h1>,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
