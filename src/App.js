import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { MenuItems } from "./Components/Navbar/MenuItems";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* {MenuItems.map((items, value) => {
                        <>
                          {console.log(items)}
                          <Route path={items.url} element={items.component} />
                        </>
                      })} */}
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
