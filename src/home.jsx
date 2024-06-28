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
import { FaAngular, FaJava } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import IconHome from "./components/home/icon-home";
import { RiHomeGearFill } from "react-icons/ri";
import { HiUser } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { GrMysql } from "react-icons/gr";
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
const Available = styled.a`
  font-size: clamp(0.5rem, 0.55rem + 0.5952vw, 0.8rem);
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
        <div ref={refHome} className="static text-white font-sans z-10">
          <HomeSection className="mx-4 xl:mx-0">
            <div className="flex justify-end">
              <img
                className="absolute object-cover w-3/5 sm:w-2/5 xl:w-2/6 transform top-40 xl:top-20 hidden sm:block"
                src="cube.png"
                alt=""
              />
            </div>
            <div className="content-wrapped block mx-auto pt-52 pb-28">
              <div className="relative">
                <TitleSection className="relative z-10">
                  <motion.div
                    className="font-outfit greeting text-text-general"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate_Hi"
                    viewport={{
                      once: true,
                    }}
                  >
                    <span>¡Hola!</span>
                    <span className="text-sm sm:text-xl md:text-2xl">👋</span>
                  </motion.div>
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
                      <font className="text-text-purple">Ángel</font>
                      &nbsp;Ramírez
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
                    <font className="font-semibold text-text-white-gray">
                      Constructor Digital:&nbsp;
                    </font>
                    Edificando el Mundo a través del Desarrollo de Software.
                  </motion.h3>
                </TitleSection>
                <div className="flex mt-6 items-center">
                  <a
                    href="Angel_Ramirez_CV.pdf"
                    // download="cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      className=" bg-text-purple hover:bg-text-purple/90 text-white rounded-lg px-5 py-1 sm:px-8 sm:py-2 font-semibold text-sm"
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
                    className="flex items-center ml-6 text-text-white-gray space-x-1"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate_Pinned"
                    viewport={{
                      once: true,
                    }}
                  >
                    <div className="relative text-3xl flex items-center no-seleccionable">
                    <span className="flex absolute h-2 w-2 top-0 right-0 -mt-1 -mr-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-text-purple opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-text-purple"></span>
                      </span>
                    </div>
                    <span className="flex">
                      <Available
                        href="/contact"
                        className="font-sans font-semibold text-2xl"
                      >
                        &nbsp; ¡Disponible aquí!
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
                  <h1 className="text-sm font-sans font-semibold text-text-general">
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
                      classNames={"hover:text-java-icon"}
                      icon={<FaJava />}
                    />
                    <IconHome
                      classNames={"hover:text-mysql-icon"}
                      icon={<GrMysql />}
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
          <HomeSection className="-mt-16 pb-24 mx-4 xl:mx-0">
            <section className="content-wrapped mx-auto">
              <div>
                <SubHome
                  text={
                    "Soy un desarrollador de software especializado en la creación de aplicaciones web, móviles y de escritorio. Mi objetivo es ayudar a las empresas a mejorar sus procesos y a los emprendedores a llevar sus ideas al siguiente nivel. Me apasiona la tecnología y la innovación, y me encanta trabajar en equipo para lograr grandes cosas. Si estás buscando un desarrollador con experiencia y habilidades técnicas, ¡no dudes en contactarme!"
                  }
                />
              </div>
            </section>
          </HomeSection>
          <HomeSection className="-mt-10 pb-14 mb-36 bg-secondary shadow-3xl shadow-secondary">
            <div className="content-wrapped mx-auto">
              <TextHome
                text={
                  "Una persona con una idea nueva es un loco hasta que la idea triunfa."
                }
              />
              <a
                href="/blog"
                className="mx-4 xl:mx-0 mt-4 bg-text-purple/0 hover:bg-text-purple/10 hover:text-text-white-gray text-text-purple font-semibold px-4 sm:px-8 py-2 sm:py-3 rounded-lg transition-all duration-200 ease-in-out border border-text-purple/20"
              >
                <button className="inline-block">
                  <div className="flex items-center space-x-1">
                    <span className="animate-pulse">Blog personal</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3 w-3 animate-pulse"
                    >
                      <path d="M14.5 7.40192C16.5 8.55662 16.5 11.4434 14.5 12.5981L8.5 16.0622C6.5 17.2169 4 15.7735 4 13.4641L4 6.5359C4 4.2265 6.5 2.78312 8.5 3.93782L14.5 7.40192Z"></path>
                    </svg>
                  </div>
                </button>
              </a>
            </div>
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
