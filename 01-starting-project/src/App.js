// Guía de Routes
// Clase 303: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/35733834#overview

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import RootLayout from "./pages/Root";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "*", element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:id", element: <ProductDetail /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
