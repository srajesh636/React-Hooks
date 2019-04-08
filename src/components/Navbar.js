import React from "react";
import  configData from '../config.json';

export default function Navbar() {
  let {siteName} = configData
  return (
    <div>
      <nav className="navbar">
        <span className="navbar-brand mb-0 h1 text-white">{siteName}</span>
      </nav>
    </div>
  );
}
