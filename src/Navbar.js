import React from "react";
import Button from "./Button";
import Search from "./Search";
import './Navbar.css';
import Logo from "./Logoqtify";
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
      <nav >
        <Logo />
        <Search />
        <button className="nav-btn">Give Feedback</button>
      </nav>
    );
  }

  export default Navbar;