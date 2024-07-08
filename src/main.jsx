import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./Pages/Home/Home.jsx";
import Page404 from "./Error/Page404/Page404.jsx";
import LogIn from "./Pages/Forms/LogIn.jsx";
import CategoryPage from "./Pages/Category/CategoryPage.jsx";
import SingleProductContainer from "./Pages/Product/SingleProductContainer.jsx"; // Adjust the import
import Recipes from "./Pages/Recipes/Recipes.jsx";
import About from "./Pages/About/About.jsx";
import Resources from "./Pages/Resources/Resources.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import ComingSoon from "./Error/ComingSoon/ComingSoon.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories/:category",
        element: <CategoryPage />,
      },
      {
        path: "/items/:id",
        element: <SingleProductContainer />, // Use a container or adjust SingleProduct to fetch data
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/sign-up",
    element: <ComingSoon />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
