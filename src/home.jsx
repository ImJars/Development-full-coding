import React from "react";
import Img from "./assets/react.svg";
import styled from "styled-components";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiSolidity,
  SiVisualstudiocode,
  SiFramer,
} from "react-icons/si";
import { HiOutlineDotsVertical } from "react-icons/hi";
import IconHome from "./components/home/icon-home";
import { RiHomeGearFill } from "react-icons/ri";
import { HiUser } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import TextHome from "./components/home/text-home";
import SubHome from "./components/home/sub-home";
import FooterWraped from "./components/footerWraped";
import Footer from "./footer";

import { motion } from "framer-motion";
import HomeWraped from "./components/homeWraped";
import CardHome from "./components/home/card-home";

const HomeSection = styled.section`
  display: block;
  .content-wrapped {
    max-width: 1152px;
  }
`;
const TitleSection = styled.div`
  .greeting {
    font-size: clamp(0.75rem, 0.4524rem + 1.1905vw, 1.25rem);
  }
  .name {
    font-size: clamp(2.25rem, 1.05rem + 4.8vw, 4.5rem);
  }
  .job {
    font-size: clamp(0.875rem, 0.503rem + 1.4881vw, 1.5rem);
  }
`;
const Ping = styled.div`
  animation: ping 1s cubic-bezier(0, 0, 0.5, 1) infinite;
  @keyframes ping {
    75%,
    100% {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
const Available = styled.a`
  font-size: clamp(0.5rem, 0.3512rem + 0.5952vw, 0.75rem);
`;
const Buttonned = styled.div`
  font-size: clamp(0.625rem, 0.4762rem + 0.5952vw, 0.875rem);
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate_Hi: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      delay: 0.1,
    },
  },
  animate_Name: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      delay: 0.2,
    },
  },
  animate_Subtitle: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      delay: 0.3,
    },
  },
  animate_Button: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      delay: 0.4,
    },
  },
  animate_Stack: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      delay: 0.5,
    },
  },
  animate_Pinned: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      delay: 2,
    },
  },
};
function Home({refHome}) {
  return (
    <>
      <HomeWraped>
        <div ref={refHome} className="bg-primary text-white font-poppins">
          <HomeSection className="mx-1 sm:mx-0">
            <div className="content-wrapped block mx-auto pt-52 pb-28">
              <div className="relative">
                <TitleSection className="relative z-10">
                  <motion.h1
                    className="font-outfit greeting text-text-general"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate_Hi"
                    viewport={{
                      once: true,
                    }}
                  >
                    Hi!
                  </motion.h1>
                  <motion.div
                    className="text-text-white-gray font-outfit leading-none font-bold mb-2"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate_Name"
                    viewport={{
                      once: true,
                    }}
                  >
                    <h2 className="name">
                      I'm&nbsp;
                      <font className="text-text-blue">Angel</font>
                      &nbsp;Ramirez
                    </h2>
                  </motion.div>
                  <motion.h3
                    className="font-outfit job text-text-general"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate_Subtitle"
                    viewport={{
                      once: true,
                    }}
                  >
                    Constructor Digital: Edificando el Mundo a través del Desarrollo de Software
                  </motion.h3>
                </TitleSection>
                <div className="flex mt-8">
                  <motion.button
                    className=" bg-text-blue text-white rounded-lg px-5 py-1 sm:px-8 sm:py-2 font-semibold text-sm"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate_Button"
                    viewport={{
                      once: true,
                    }}
                  >
                    <Buttonned className="font-outfit">Descargar CV</Buttonned>
                  </motion.button>
                  <motion.div
                    className="flex items-center ml-4 text-text-blue"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate_Pinned"
                    viewport={{
                      once: true,
                    }}
                  >
                    <div className="relative text-3xl">
                      &#8226;
                      <div className="absolute top-0 ">
                        <Ping>
                          <h1 className="text-3xl">&#8226;</h1>
                        </Ping>
                      </div>
                    </div>
                    <span className="flex">
                      <Available
                        href="#"
                        className="uppercase font-outfit font-bold text-xs tracking-wider"
                      >
                        &nbsp; Disponible aqui
                      </Available>
                    </span>
                  </motion.div>
                </div>
                <motion.div
                  className="mt-36"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate_Stack"
                  viewport={{
                    once: true,
                  }}
                >
                  <h1 className="text-xs tracking-wider text-text-general">
                  Herramientas tecnológicas favoritas:
                  </h1>
                  <ul className="flex items-center mt-4 space-x-2 sm:space-x-3">
                    <IconHome
                      classNames={"hover:text-js-icon"}
                      icon={<SiJavascript />}
                    />
                    <IconHome
                      classNames={"hover:text-react-icon"}
                      icon={<SiReact />}
                    />
                    <IconHome
                      classNames={"hover:text-tailwind-icon"}
                      icon={<SiTailwindcss />}
                    />
                    <IconHome
                      classNames={"hover:text-python-icon"}
                      icon={<SiPython />}
                    />
                    <IconHome
                      classNames={"hover:text-solidity-icon"}
                      icon={<SiSolidity />}
                    />
                    <li className="text-xl text-text-general">
                      <HiOutlineDotsVertical />
                    </li>
                    <IconHome
                      classNames={"hover:text-vs-code-icon"}
                      icon={<SiVisualstudiocode />}
                    />
                    <IconHome
                      classNames={"hover:text-framer-icon"}
                      icon={<SiFramer />}
                    />
                  </ul>
                </motion.div>
                <div className="hidden sm:block absolute -top-10 right-0 z-0">
                  <img className="w-80" src={Img} alt="" />
                </div>
              </div>
            </div>
          </HomeSection>
          <HomeSection className="-mt-10 pb-24 mx-1 sm:mx-0">
            <div className="content-wrapped block mx-auto">
              <Cards>
                <CardHome
                  extraClassIcon={"bg-card-icon-one"}
                  icon={<HiUser />}
                  title={"Clean & Intuitive"}
                  description={
                    "Especialista en Desarrollo de Software enfocado en la eficiencia y calidad"
                  }
                />
                <CardHome
                  extraClassIcon={"bg-card-icon-two"}
                  icon={<RiHomeGearFill />}
                  title={"Detail Oriented"}
                  description={
                    "Apasionado por la ingeniería de software y la optimización de procesos "
                  }
                />
                <CardHome
                  extraClassIcon={"bg-card-icon-three"}
                  icon={<AiFillStar />}
                  title={"Pretty & Optimized"}
                  description={
                    "Liderando equipos de desarrollo para proyectos exitosos"
                  }
                />
              </Cards>
            </div>
          </HomeSection>
          <HomeSection className="-mt-16 pb-24 mx-1 sm:mx-0">
            <div className="content-wrapped mx-auto">
              <TextHome
                text={
                  "Una persona con una idea nueva es un loco hasta que la idea triunfa."
                }
              />
            </div>
          </HomeSection>
          <HomeSection className="-mt-16 pb-24 mx-1 sm:mx-0">
            <section className="content-wrapped mx-auto">
              <div>
                <SubHome
                  title={"Clean & Intuitive"}
                  subtitle={"Eye Catching, Modern & Minimalist Design."}
                  text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sed lacinia ultrices, nunc lectus lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sed lacinia ultrices, nunc lectus lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sed lacinia ultrices, nunc lectus lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sed lacinia ultrices, nunc lectus lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sed lacinia ultrices, nunc lectus"
                  }
                />
              </div>
            </section>
          </HomeSection>
        </div>
      </HomeWraped>
      <section className="bg-primary border-t border-opacity-20 border-text-general mx-auto">
        <FooterWraped>
          <Footer />
        </FooterWraped>
      </section>
    </>
  );
}

export default Home;
