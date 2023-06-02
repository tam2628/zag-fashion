import { createBrowserRouter } from "react-router-dom";
import Home from "./components/screens/home";
import Product from "./components/screens/product";
import Purchase from "./components/screens/purchase";
import PaymentProcessing from "./components/screens/payment-processing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/product/:productId",
    element: <Product />,
  },

  {
    path: "/purchase",
    element: <Purchase />,
  },

  {
    path: "/payment-processing",
    element: <PaymentProcessing />,
  },
]);
