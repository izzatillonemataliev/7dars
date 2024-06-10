

import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";
import { useEffect } from "react";
import { useState } from "react";

function Navbar() {
  const [theme, setTheme] = useState("winter")
  const handleTheme = () => {
     const newTheme = theme == "winter" ? "dracula" : "winter"  
     setTheme(newTheme)
    }

    useEffect ( () => {
      document.documentElement.setAttribute("data-theme", theme)
    },[theme])

  return (
    <div className="bg-base-200 ">
      <div className="navbar site-container">
        <div className="navbar-start">
          <Link
            className="btn hover:bg-gold border-red-800 text-white bg-amber-400 font-mono text-1xl"
            to
          >
            MyStore
          </Link>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

