import React, { useState } from "react";
import styled from "styled-components";
import { BsTwitter, BsGithub } from "react-icons/bs";
import HeaderLink from "./header-link";
import { Link } from "react-router-dom";
import HeaderFlowbite from "./headerFlowbite";
import MainFlowbite from "./mainFlowbite";

const Navbar = styled.header`
  &.navbar {
    height: 4rem;
    width: 100%;
    position: fixed;
    color: rgb(255, 255, 255);
    transition: all 0.2s ease-in-out;
    z-index: 100;
  }
  &.active {
    transition: all 0.2s ease-in-out;
  }
`;

function Header() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 5) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <Navbar
        className={
          navbar
            ? "navbar active bg-secondary/90 backdrop-blur-xs border-b border-text-general border-opacity-10"
            : "navbar border-0 border-opacity-0 border-text-general"
        }
      >
        <div className="flex justify-between items-center w-full h-full px-10">
          <div className="flex space-x-6 items-center">
            <div className="sm:mr-8 flex justify-center items-center">
              <Link className="flex justify-center items-center" to="/">
                <div className="flex sm:text-xl font-bold tracking-wide">
                  <h1 className="">&#123;&nbsp;</h1>
                  <h1>jars.</h1>
                  <h2 className="text-text-purple">dev</h2>
                  <h1 className="text-text-purple">&nbsp;&#125;</h1>
                </div>
              </Link>
            </div>
            <HeaderLink
              classNames={"text-text-purple hover:text-purple-300"}
              link={"/projects"}
              linkText={"Projects"}
            />
            <HeaderLink
              classNames={"text-text-purple hover:text-purple-300"}
              link={"/blog"}
              linkText={"Blog"}
            />
            <HeaderLink
              classNames={"text-text-purple hover:text-purple-300"}
              link={"/til"}
              linkText={"T.I.L"}
            />
            <HeaderFlowbite />
            <div className="space-x-3 hidden xl:flex">
              <HeaderLink
                classNames={"text-text-blue hover:text-blue-300"}
                link={"/skills"}
                linkText={"Skills & Tools"}
              />
              <h1 className="text-xs opacity-50 cursor-default">
                &#8226;
              </h1>
              <HeaderLink
                classNames={"text-text-blue hover:text-blue-300"}
                link={"/experience"}
                linkText={"Experience"}
              />
              <h1 className="text-xs opacity-50 cursor-default">
                &#8226;
              </h1>
              <HeaderLink
                classNames={"text-text-blue hover:text-blue-300"}
                link={"/studio"}
                linkText={"Studio"}
              />
              <h1 className="text-xs opacity-50 cursor-default">
                &#8226;
              </h1>
              <HeaderLink
                classNames={"text-text-blue hover:text-blue-300"}
                link={"/contact"}
                linkText={"Contact"}
              />
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <div className="hidden items-center sm:flex">
              <a
                href="#"
                className="text-lg hover:bg-card hover:bg-opacity-50 rounded-xl p-2"
              >
                <BsTwitter />
              </a>
              <a
                href="#"
                className="text-lg hover:bg-card hover:bg-opacity-50 rounded-xl p-2"
              >
                <BsGithub />
              </a>
            </div>
            <MainFlowbite />
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
