import React from "react";
import styled from "styled-components";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiVisualstudiocode,
  SiFramer,
  SiTypescript,
} from "react-icons/si";
import { FaAngular } from "react-icons/fa";
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
  gap: 16px;
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
function Home({ refHome }) {
  return (
    <>
      <HomeWraped>
        <div ref={refHome} className="static text-white font-poppins z-10">
          <HomeSection className="mx-4 xl:mx-0">
          <div className="flex justify-end">
            <img className="absolute object-cover w-3/5 sm:w-2/5 xl:w-2/6 transform top-40 xl:top-20 hidden sm:block" src="cube.png" alt="" />
          </div>
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
                    Hola!
                  </motion.h1>
                  <motion.div
                    className="text-text-white-gray font-outfit leading-none font-bold mb-3"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate_Name"
                    viewport={{
                      once: true,
                    }}
                  >
                    <h2 className="name">
                      Soy&nbsp;
                      <font className="text-text-purple">Angel</font>
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
                    <font className="font-bold text-text-white-gray">Constructor Digital:</font> Edificando el Mundo a través del
                    Desarrollo de Software
                  </motion.h3>
                </TitleSection>
                <div className="flex mt-8">
                  <a 
                    href="Angel_Ramirez_CV.pdf"
                    // download="cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      className=" bg-text-purple text-white rounded-lg px-5 py-1 sm:px-8 sm:py-2 font-semibold text-sm"
                      variants={fadeInAnimationVariants}
                      initial="initial"
                      whileInView="animate_Button"
                      viewport={{
                        once: true,
                      }}
                    >
                      <Buttonned className="font-outfit">
                        Descargar CV
                      </Buttonned>
                    </motion.button>
                  </a>
                  <motion.div
                    className="flex items-center ml-4 text-text-white-gray"
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
                      classNames={"hover:text-typescript-icon"}
                      icon={<SiTypescript />}
                    />
                    <IconHome
                      classNames={"hover:text-angular-icon"}
                      icon={<FaAngular />}
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
              </div>
            </div>
          </HomeSection>
          <HomeSection className="-mt-10 pb-24 mx-4 xl:mx-0">
            <div className="content-wrapped block mx-auto">
              <Cards className="grid-cols-1 sm:grid-cols-3">
                <CardHome
                  extraClassIcon={"bg-card-icon-one"}
                  icon={<HiUser />}
                  title={"Conocimiento & Experiencia"}
                  description={
                    "Especialista en Desarrollo de Software enfocado en la eficiencia y calidad."
                  }
                />
                <CardHome
                  extraClassIcon={"bg-card-icon-two"}
                  icon={<RiHomeGearFill />}
                  title={"Innovación & Creatividad"}
                  description={
                    "Apasionado por la ingeniería de software y la optimización de procesos."
                  }
                />
                <CardHome
                  extraClassIcon={"bg-card-icon-three"}
                  icon={<AiFillStar />}
                  title={"Liderazgo & Trabajo en Equipo"}
                  description={
                    "Liderando equipos de desarrollo para proyectos exitosos."
                  }
                />
              </Cards>
            </div>
          </HomeSection>
          <HomeSection className="-mt-16 pb-24 mx-4 sm:mx-0">
            <div className="content-wrapped mx-auto">
              <TextHome
                text={
                  "Una persona con una idea nueva es un loco hasta que la idea triunfa."
                }
              />
            </div>
          </HomeSection>
          <HomeSection className="-mt-16 pb-24 mx-4 sm:mx-0">
            <section className="content-wrapped mx-auto">
              <div>
                <SubHome
                  title={"Hola!"}
                  subtitleOne={"Mi nombre es"}
                  subtitleTwo={"Angel Ramirez"}
                  text={
                    "Y soy un desarrollador de ingeniería de software con más de 3 años de experiencia, a lo " +
                    "largo de mi carrera me he especializado en el desarrollo de aplicaciones y software " +
                    "empresarial, así como soluciones de alta calidad. He tenido la oportunidad de trabajar con " +
                    "una amplia variedad de tecnologías y lenguajes de programación, lo que me ha permitido " +
                    "adaptarme a diversas demandas tecnológicas."
                  }
                />
              </div>
            </section>
          </HomeSection>
        </div>
        <FooterWraped>
          <Footer />
        </FooterWraped>
      </HomeWraped>
    </>
  );
}

export default Home;
