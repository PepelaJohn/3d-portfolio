import React from "react";
import { menu, close } from "../assets";
const NavBar = () => {
  const links = ["About", "Work", "Contact"];
  return (
    <nav className="w-full fixed z-20 bg-primary h-[60px]  common-padding flex items-center">
      <div className="cursor-pointer min-h-[40px] min-w-[40px] h-[40px] rounded-full w-[40px] border-2 bg-black  text-white flex justify-center items-center text-xs ">
        JD
      </div>
      <div className="flex-1 flex items-center justify-end">
        {links.map((link, i) => (
          <span
            key={i}
            className="p-3 mr-2 ml-2 flex items-center justify-center"
          >
            <a
              href=""
              className="uppercase text-xsm text-gray-400 hover:text-white transition-all-ease decoration-none"
            >
              {link}
            </a>
          </span>
        ))}
        <div className="toggle pl-3 ml-3">
          <img src={menu} className="w-[16px] cursor-pointer " />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
