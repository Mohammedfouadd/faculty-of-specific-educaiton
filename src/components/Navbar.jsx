import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {navLinks} from "../constants";
import {styles} from "../styles";
import {logo, menu, close, college} from "../assets";
import {motion} from "framer-motion";
const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [tolggle, setTolggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex itmes-center py-5 fixed top-0 z-20 bg-[#050816]`}>
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <ul className="list-none hidden sm:flex flex-row-reverse  gap-10 ">
          {navLinks.map(nav =>
            <li
              key={nav.id}
              className={`${active === nav.title
                ? "text-white"
                : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          )}
        </ul>
        <div className="sm:hidden flex flex-1 justify-start items-center">
          <img
            src={tolggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setTolggle(!tolggle)}
          />
          <div
            className={`${!tolggle
              ? "hidden"
              : "flex"} p-6 black-gradient absolute
          top-12 left-0 mx-4 my-2 min-w-[14px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map(nav =>
                <li
                  key={nav.id}
                  className={`${active === nav.title
                    ? "text-white"
                    : "text-secondary"} font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setTolggle(!tolggle);
                    setActive(nav.title);
                  }}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            <span className="sm:block hidden"> جامعة طنطا |</span>
            &nbsp;&nbsp;كلية التربية النوعية &nbsp;
          </p>
          <img src={college} alt="logo" className="h-10 w-10 rounded-full " />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
