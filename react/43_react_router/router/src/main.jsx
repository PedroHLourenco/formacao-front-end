import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// componentes
import Contact from "./routes/Contact.jsx";
// aula 583 - página de erro
import ErrorPage from "./routes/ErrorPage.jsx";
// aula 584 - componente base
import Home from "./routes/Home.jsx";
// aula 587 - rota dinâmica
import Product from "./routes/Product.jsx";
// aula 588 - nested routes
import Info from "./routes/Info.jsx";
// aula 590 - search params
import Search from "./routes/Search.jsx";

// aula 582 - configurando react router
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // aula 583 - página de erro
    errorElement: <ErrorPage />,
    // aula 584 - componente base
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // aula 587 - rota dinâmica
      {
        path: "products/:id",
        element: <Product />,
      },
      // aula 588 - nested routes
      {
        path: "products/:id/info",
        element: <Info />,
      },
      // aula 590 - search params
      {
        path: "search",
        element: <Search />,
      },
      // aula 591 - redirect
      {
        path: "teste",
        element: <Navigate to="/"/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
