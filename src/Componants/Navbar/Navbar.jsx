import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="d-flex  justify-content-around fixed-top nav text-white">
        <div className="logo">

        <Link cLassName="p-3 d-flex  align-items-center justify-content-center">
          Start Framework
        </Link>
        </div>
        <ul className="p-3">
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
