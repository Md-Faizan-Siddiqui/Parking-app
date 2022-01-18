import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import Button from "../Button/Button";
import "../Navbar/Navbar.css";
import * as GameIcons from "react-icons/gi";
import * as GrommetIcons from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  console.log(toggle);
  return (
    <>
      <nav className="navbar">
        <div>
          <h1 className="navbarLogo">Logo</h1>
        </div>
        <div className="navItems">
          <ul className={toggle ? "sideBarActiv" : "ulNavbarItems"}>
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
                  {/* <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a> */}
                </li>
              );
            })}
          </ul>
          {/* <Button
                btnText="Submit"
                /> */}
        </div>
        {/* <div className="menuIcon" onClick={() => setToggle((prev) => !prev)}>
                    {toggle ? <GrommetIcons.GrFormClose size="30px" color='white' /> : <GameIcons.GiHamburgerMenu size="30px" color='white' />}
                </div> */}
      </nav>
    </>
  );
}

export default Navbar;
