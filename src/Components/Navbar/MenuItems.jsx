import Product from "../../Pages/Product";
import Home from "../../Pages/Home";
import Service from "../../Pages/Service";
import Contact from "../../Pages/Contact";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";

export const MenuItems = [
  {
    title: "Home",
    url: "/",
    cName: "navLinks",
    component: <Home />,
  },
  {
    title: "Product",
    url: "/product",
    cName: "navLinks",
    component: <Product />,
  },
  {
    title: "Service",
    url: "/service",
    cName: "navLinks",
    component: <Service />,
  },
  {
    title: "Contact Us",
    url: "/contactus",
    cName: "navLinks",
    component: <Contact />,
  },
  {
    title: "Sign In",
    url: "/signin",
    cName: "navLinks",
    component: <SignIn />,
  },
  {
    title: "Sign Up",
    url: "/signup",
    cName: "navLinks",
    component: <SignUp />,
  },
];
