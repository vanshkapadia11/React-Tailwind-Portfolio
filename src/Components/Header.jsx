import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
const Header = () => {
  let [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 flex items-center w-full h-20 z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
        <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
          <h2>
            <a href="">
              <img
                src="/public/images/logo.svg"
                alt=""
                width={40}
                height={40}
              />
            </a>
          </h2>
          <div className="relative md:justify-self-center">
            <button onClick={null} className="menu-btn md:hidden">
              <span
                className="material-symbols-rounded"
                onClick={() => setNavOpen(!navOpen)}
              >
                {navOpen ? "close" : "menu"}
              </span>
            </button>
            <Navbar navOpen={navOpen} />
          </div>
          <a
            href="#contact"
            className="btn btn-secondary max-md:hidden md:justify-self-end"
          >
            Contact Me
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
