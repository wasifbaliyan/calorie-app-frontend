import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <small>
        &copy; {new Date().getFullYear()}{" "}
        <a className="footer__link" href="https://wasifbaliyan.com">
          wasifbaliyan
        </a>
      </small>
    </footer>
  );
}
