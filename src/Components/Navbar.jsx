import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  let lastActivelink = useRef();
  let activeBox = useRef();
  const initActiveBox = () => {
    activeBox.current.style.top = lastActivelink.current.offsetTop + "px";
    activeBox.current.style.left = lastActivelink.current.offsetLeft + "px";
    activeBox.current.style.height = lastActivelink.current.offsetHeight + "px"; // Height Ke Spelling Yaad Karle Plss!!!!!!!!! Chutiye
    activeBox.current.style.width = lastActivelink.current.offsetWidth + "px";
  };
  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox); // Chutiye, Ye Window Hai Document Nahi Hai, Isliye Ye Window Ke Resize Pe Chalega
  // Ye Document Ke Resize Pe Nahi Chalega
  const activeCurrentLink = (e) => {
    lastActivelink.current?.classList.remove("active");
    e.target.classList.add("active");
    lastActivelink.current = e.target;
    activeBox.current.style.top = e.target.offsetTop + "px";
    activeBox.current.style.left = e.target.offsetLeft + "px";
    activeBox.current.style.height = e.target.offsetHeight + "px";
    activeBox.current.style.width = e.target.offsetWidth + "px";
  };
  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActivelink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Reviews",
      link: "#reviews",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];
  return (
    <>
      <nav className={"navbar " + (navOpen ? "active" : "")}>
        {navItems.map(({ label, link, className, ref }, key) => (
          <a
            href={link}
            className={className}
            ref={ref}
            key={key}
            onClick={activeCurrentLink}
          >
            {label}
          </a>
        ))}
        <div className="active-box" ref={activeBox}></div>
      </nav>
    </>
  );
};
Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};
export default Navbar;
