import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <a href="" className="logo">
          <span className="title">TextFormer</span>
        </a>
      </div>
      <div className="flex flex-row">
        <ul className="ul">
          <li className="li">
            <a href="#" className="home">
              Home
            </a>
          </li>
          <li className="li">
            <a href="#" className="home">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
