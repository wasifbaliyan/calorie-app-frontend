import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__brand">
          <Link className="nav__brand-link" to="/">
            TDEE Calculator
          </Link>
        </div>
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              activeClassName="active"
              to="/counter"
              className="nav__link"
            >
              Calorie Counter
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              activeClassName="active"
              to="/user-calorie-data"
              className="nav__link"
            >
              Calorie Data
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
