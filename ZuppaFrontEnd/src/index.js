import React from "react";
// import ReactDOM from 'react-dom/client';
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Career from "./pages/Career";
import ShopNow from "./pages/ShopNow";
import NewsAndEvents from './pages/NewsAndEvents';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { CartProvider } from "./context/cartContext";
import Cart from '../src/components/Cart'
import Review from '../src/pages/Review'
import Technology from "./pages/Technology";
import CareerForm from "./pages/CareerForm";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/About",
    element: <About />
  },
  {
    path: "/Technology",
    element: <Technology />
  },
  {
    path:"/ShopNow",
    element:<ShopNow/>
  },
  {
    path:"/Career",
    element:<Career/>
  },
  {
  path:"/CareerForm",
  element:<CareerForm/>
},
  {
    path:"/Review",
    element:<Review/>
  },
  {
    path:"/NewsAndEvents",
    element:<NewsAndEvents/>
  },

  {
    path:"/Login",
    element:<Login/>
  },
  
 
  {
    path:"/Register",
    element:<Register/>
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Cart/>
     <RouterProvider router={router} />
     </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
