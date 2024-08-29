import React, { useEffect, useState } from "react";
import { NAV_LINKS_LIST } from "../utils/Helper";
import { NavCross, NavLine } from "../common/Icon";
import { gsap } from "gsap";

const Header = () => {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.fromTo(
      ".logoGsap",
      {
        y: -200,
      },
      {
        y: 0,
        duration: 0.3,
      }
    );

    tl.fromTo(
      ".navGsap",
      {
        y: -200,
        opacity: 0,
      },
      {
        y: 0,
        duration: 0.2,
        stagger: 0.3,
        opacity: 1,
      }
    );
  });

  const [nav, setNav] = useState(true);
  const handleNavbar = () => {
    setNav(!nav);
    let body = document.body;
    nav && body.classList.add("max-lg:overflow-hidden");
    !nav && body.classList.remove("max-lg:overflow-hidden");
  };
  let path = window.location.pathname;
  return (
    <div className="container max-w-[1180px]">
      <div className="h-[100px] flex items-center justify-between">
        <a href="/" className="logoGsap ">
          <h1 className="font-bold">logo</h1>
        </a>
        <div
          className="flex flex-col lg:hidden justify-between z-50 cursor-pointer transition-all ease-linear duration-300"
          onClick={handleNavbar}
        >
          <span className="lg:hidden">
            {nav === false ? <NavCross /> : <NavLine />}
          </span>
        </div>
        <div
          className={`${nav && "max-lg:left-[-100%]"} ${
            !nav && "max-lg:start-0"
          } flex items-center gap-11 z-40 max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:fixed max-lg:w-full max-lg:h-full max-lg:top-0 max-lg:bg-white transition-all duration-300 ease-linear`}
        >
          {NAV_LINKS_LIST.map((obj, index) => (
            <a
              href={obj.url}
              key={index}
              className={`leading-6  navGsap ${
                path === obj.url &&
                "after:absolute decoration-1 after:h-[3px] after:w-[31px] after:-bottom-[2px] after:left-[25%] after:bg-dark_black after:rounded-xl !text-black"
              } text-grey relative transition duration-300 after:transition-all after:duration-300 ease-linear hover:text-dark_black ${
                index === 0 || index === 1
                  ? "max-lg:after:w-[327px] max-lg:after:h-px max-lg:after:absolute  max-lg:after:left-1/2 max-lg:after:-translate-x-1/2 max-lg:after:-bottom-6 max-lg:after:bg-[#00000029]"
                  : ""
              }`}
            >
              {obj.navlink}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
