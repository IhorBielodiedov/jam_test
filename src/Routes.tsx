import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProductListPage } from "./pages/ProductListPage";
import { memo } from "react";
import { ProductItemPage } from "./pages/ProductItemPage";
import { ErrorBoundary } from "./pages/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductListPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "product/:id",
    element: <ProductItemPage />,
    errorElement: <ErrorBoundary />,
  },
]);

const AppRoutes = memo(() => {
  return <RouterProvider router={router} />;
});

export default AppRoutes;
