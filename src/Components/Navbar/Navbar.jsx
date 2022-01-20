import "../Navbar/Navbar.css";
import React, { useEffect, useState } from "react";
import { MenuItems } from "./MenuItems";
import * as GameIcons from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { UseWindowSize } from "../HandleWidth/HandleWidth";

function Navbar() {
  const width = UseWindowSize();
  const location = useLocation();
  const [toggle, setToggle] = useState(true);
  const [navTrue, setNavTrue] = useState(true);
  console.log(toggle);
  // useEffect(()=>{
  //   if(width.width >= 640){
  //     setToggle(false)
  //   }
  // },[width.width])
  return (
    <>
      <nav className="navbar">
        <div>
          <h1 className="navbarLogo">Logo</h1>
        </div>
        <div className={toggle ? "sideBarActiv" : "navItems"}>
          <ul className="ulNavbarItems">
            {MenuItems.map((item, index) => {
              console.log(item.url);
              return (
                <li key={index}>
                  <Link
                    to={item.url}
                    className={
                      location.pathname === item.url ? "activeBtn" : item.cName
                    }
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* {width.width < 700 && ( */}
        <div className="menuIcon" onClick={() => setToggle((prev) => !prev)}>
          {toggle ? (
            <GameIcons.GiHamburgerMenu size="30px" color="white" />
          ) : (
            <IoClose size="30px" color="white" />
          )}
        </div>
        {/* )} */}
      </nav>
    </>
  );
}

export default Navbar;
