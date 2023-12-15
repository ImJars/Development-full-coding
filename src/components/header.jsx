import React, { useState } from "react";
import styled from "styled-components";
import {BsGithub } from "react-icons/bs";
import HeaderLink from "./header-link";
import HeaderFlowbite from "./headerFlowbite";
import MainFlowbite from "./mainFlowbite";
import { motion } from "framer-motion";

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

function Header({ animateIcon, animateDiagon }) {
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
        <div className="flex font-poppins justify-between items-center w-full h-full mx-auto px-2">
          <div className="flex space-x-4 sm:space-x-5 items-center">
            <div className="sm:mr-8 flex justify-center items-center">
              <a href="/" className="flex justify-center items-center">
                <div className="flex sm:text-xl font-bold space-x-0.5 ">
                  <motion.div animate={animateIcon} className="px-2 bg-text-purple rounded-lg border-2 border-text-purple flex justify-center items-center">
                    <motion.h1 animate={animateDiagon} className="font-bold text-xs py-1 px-0.5 sm:pt-0.5 sm:px-0.5 mt-0.5">&#47;</motion.h1>
                  </motion.div>
                  <div className=" hidden sm:block">
                    <div className="flex">
                      <h1 className="font-bold">&nbsp;Jars</h1>
                      <h2 className="text-text-purple">dev</h2>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <HeaderLink
              classNames={"text-text-purple hover:text-purple-300 focus:text-purple-300"}
              headerLink={"/projects"}
              linkText={"Projects"}
            />
            <HeaderLink
              classNames={"text-text-purple hover:text-purple-300 focus:text-purple-300"}
              headerLink={"/blog"}
              linkText={"Blog"}
            />
            <HeaderLink
              classNames={"text-text-purple hover:text-purple-300 focus:text-purple-300"}
              headerLink={"/til"}
              linkText={"T.I.L"}
            />
            <HeaderFlowbite />
            <div className="space-x-3 hidden xl:flex">
              <HeaderLink
                classNames={"text-text-blue hover:text-blue-300 focus:text-blue-300"}
                headerLink={"/skills"}
                linkText={"Skills & Tools"}
              />
              <h1 className="text-xs opacity-50 cursor-default">&#8226;</h1>
              <HeaderLink
                classNames={"text-text-blue hover:text-blue-300 focus:text-blue-300"}
                headerLink={"/experience"}
                linkText={"Experience"}
              />
              <h1 className="text-xs opacity-50 cursor-default">&#8226;</h1>
              <HeaderLink
                classNames={"text-text-blue hover:text-blue-300 focus:text-blue-300"}
                headerLink={"/studio"}
                linkText={"Studio"}
              />
              <h1 className="text-xs opacity-50 cursor-default">&#8226;</h1>
              <HeaderLink
                classNames={"text-text-blue hover:text-blue-300 focus:text-blue-300"}
                headerLink={"/contact"}
                linkText={"Contact"}
              />
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <div className="hidden items-center sm:flex">
              <a
                href="#"
                className="text-xl hover:bg-card hover:bg-opacity-50 rounded-xl px-3 py-1"
              >
                𝕏
              </a>
              {/* <a
                href="#"
                className="text-lg hover:bg-card hover:bg-opacity-50 rounded-xl p-2"
              >
                <BsTwitter />
              </a> */}
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
