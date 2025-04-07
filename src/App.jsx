import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";
import Blog from "./pages/blog/blog";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Account from "./pages/account/account";
import Cart from "./pages/cart/cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/account",
        element: <Account />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/product-category",
        element: <Home />,
        children: [
          {
            path: "leather-shoes",
            Component: <Home />,
          },
          {
            path: "leather-gloves",
            Component: <Home />,
          },
          {
            path: "leather-bag",
            Component: <Home />,
          },
          {
            path: "leather-accessory",
            Component: <Home />,
          }
        ]
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
