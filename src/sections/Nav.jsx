import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center   max-container">
        <a href="/">
          <img width={130} height={29} src={headerLogo} alt="Logo" />
        </a>
        <ul className="flex-1 flex justify-center item-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block cursor-pointer">
          <img src={hamburger} width={25} height={25} alt="Hamburger" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
