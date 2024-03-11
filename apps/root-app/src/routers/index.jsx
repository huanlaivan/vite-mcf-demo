import { createBrowserRouter } from "react-router-dom";
import ProductApplication from "product-mfe/App";
import CartApplication from "cart-mfe/App";
import { VueApp, BaseLayout } from "@/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <ProductApplication />,
      },
      {
        path: "cart",
        element: <CartApplication />,
      },
      {
        path: "about",
        element: <VueApp />,
      },
    ],
  },
]);

export default router;
