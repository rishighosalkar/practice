import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import Error from "./pages/Error";
import HomePage from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/Products";
import Root from "./pages/Root";

// const routeDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
//)

// const router = createBrowserRouter([
//   {path: '/', element: <HomePage />},
//   {path: '/products', element: <ProductsPage />}
// ]);

//const router = createBrowserRouter(routeDefinition);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error />,
    children: [
      {path: "/", element: <HomePage />},
      {path: "/products", element: <ProductsPage />},
      {path: "/products/:productId", element: <ProductDetails />}
    ]
  }
])
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
