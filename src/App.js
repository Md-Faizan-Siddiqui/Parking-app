import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { MenuItems } from "./Components/Navbar/MenuItems";
import Profile from "./Pages/Profile/Profile";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import SideBar from "./Components/SideBaar/SideBar";

function App() {
  return (
    <>
      {/* <SideBar /> */}
      <Navbar />

      <Routes>
        {/* {MenuItems.map((items, value) => {
                        <>
                          {console.log(items)}
                          <Route path={items.url} element={items.component} />
                        </>
                      })} */}
        <Route path="/" element={<Profile />} />
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
