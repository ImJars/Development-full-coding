import React from "react";
import CardProject from "./components/projects/cardProject";
import HomeWraped from "./components/homeWraped";
import Footer from "./footer";
import { FaGithub, FaUserFriends, FaProjectDiagram } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import styled from "styled-components";
import FooterWraped from "./components/footerWraped";
import SoftwareProject from "./components/projects/softwareProject";

const ProjectSection = styled.section`
  display: block;
  .content-wrapped {
    max-width: 1152px;
  }
`;

const TitleSection = styled.div`
  .Title-Name {
    font-size: clamp(1.875rem, 0.3125rem + 6.25vw, 4.5rem);
  }
  .Subtitle-Text {
    font-size: clamp(0.875rem, 0.503rem + 1.4881vw, 1.5rem);
  }
  .dynamic-text {
    font-size: clamp(1.125rem, 0.6539rem + 2.2167vw, 2.25rem);
  }
`;

function Projects() {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate_Title: {
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
  };
  return (
    <>
      <HomeWraped>
        <div className="w-full h-full text-white font-sans">
          <ProjectSection className="pb-10 sm:pb-20 pt-40">
            <div className="content-wrapped block mx-auto">
              <TitleSection className="mx-4 xl:mx-0">
                <motion.h1
                  className="text-text-white-gray Title-Name opacity-0 transform -translate-x-10 font-bold tracking-wide mb-2"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate_Title"
                  viewport={{
                    once: true,
                  }}
                >
                  Proyectos
                </motion.h1>
                <motion.h2
                  className="Subtitle-Text opacity-0 transform -translate-x-10 text-text-general text-xs sm:text-2xl sm:mt-2"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate_Subtitle"
                  viewport={{
                    once: true,
                  }}
                >
                  Muestra de mi trabajo relacionado con full-stack.
                </motion.h2>
              </TitleSection>
            </div>
            <div className="mt-20 content-wrapped block mx-auto">
              <TitleSection className="mx-4 xl:mx-0">
                <h1 className="text-xs sm:text-sm text-text-purple font-bold tracking-wide mb-1">
                  Interfaces de usuario basadas en TailwindCSS
                </h1>
                <h2 className="dynamic-text font-bold text-text-white-gray">
                  Software intuitivo es atractivo para los usuarios
                </h2>
                <h3 className="text-text-general text-sm sm:text-base mt-1 sm:w-3/4">
                  El desarrollo de software es un proceso complejo que requiere
                  de un equipo de trabajo con habilidades y conocimientos
                  específicos. En mi caso, últimamente me he especializado en él
                  desarrollo de interfaces de usuario basadas en TailwindCSS, un
                  framework de CSS que permite crear interfaces de usuario de
                  forma rápida y eficiente. La mayoría de mis proyectos están
                  basados en 4 pilares fundamentales que a lo largo de mí
                  carrera he ido perfeccionando ayudandome a tener exito en los
                  proyectos.
                </h3>
                <button className="group mt-4 bg-text-purple text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg bg-opacity-10 backdrop-blur-xs group-hover:bg-text-purple/5">
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-xs sm:text-sm text-text-purple font-semibold space-x-1 group-hover:text-text-white-gray group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out"
                  >
                    <h1>Mas sobre TailwindCSS</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3 w-3"
                    >
                      <path d="M14.5 7.40192C16.5 8.55662 16.5 11.4434 14.5 12.5981L8.5 16.0622C6.5 17.2169 4 15.7735 4 13.4641L4 6.5359C4 4.2265 6.5 2.78312 8.5 3.93782L14.5 7.40192Z"></path>
                    </svg>
                  </a>
                </button>
              </TitleSection>
            </div>
            <div className="mt-14 content-wrapped block mx-auto">
              <TitleSection className="mx-4 xl:mx-0">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0">
                  <CardProject
                    icon={<FaProjectDiagram />}
                    title="Gestión de proyectos"
                    text="Organización y administración de recursos para que se complete todo el trabajo requerido."
                  />
                  <CardProject
                    icon={<FaUserFriends />}
                    title="Colaboración"
                    text="Trabajo junto a un equipo de desarrollo o junto al cliente para obtener un mejor resultado en el desarrollo."
                  />
                  <CardProject
                    icon={<BsFillCheckCircleFill />}
                    title="Optimización de código"
                    text="La optimización de código se lleva a cabo para mejorar la eficiencia y el rendimiento de la aplicación o software."
                  />
                  <CardProject
                    icon={<FaGithub />}
                    title="GitHub Repositories"
                    text="Un repositorio en GitHub para tener un control de versiones de tus aplicaciones."
                  />
                </div>
              </TitleSection>
            </div>
          </ProjectSection>
          <ProjectSection>
            <div className="mb-28 content-wrapped block mx-auto">
              <div className="mx-4 xl:mx-0 mb-8">
                <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-text-white-gray mb-2">
                  Proyectos destacados
                </h1>
                <div className="bg-text-purple rounded-2xl p-0.5 sm:p-1 text-text-white-gray text-sm w-8 sm:w-14" />
                <p className="text-text-general text-sm sm:text-base mt-2 sm:w-3/4">
                  A continuación se presentan algunos de los proyectos en los
                  que he trabajado y que han tenido un mayor impacto en mi
                  carrera profesional. Estos proyectos han sido desarrollados
                  utilizando diferentes tecnologías y herramientas, han
                  requerido tanto de un trabajo en equipo como recursos
                  avanzados, también han requerido de una colaboración constante
                  con los clientes para poder cumplir con los requisitos y
                  objetivos establecidos.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-3 mx-4 xl:mx-0">
                <SoftwareProject
                  title={"Jarsdev Website"}
                  description={
                    "Sitio web personal construido desde cero que me permite mostrar mis habilidades, experiencia y un sitio donde me pueden conocer un poco mejor."
                  }
                  skill_1={"ReactJs"}
                  skill_2={"ViteJs"}
                  skill_3={"Firebase"}
                  skill_4={"TailwindCSS"}
                  projectLink={"/project_page"}
                />
                <SoftwareProject
                  title={"Legacyier Express"}
                  description={
                    "Legacyier express es un sitio web donde se ofrecían servicios de desarrollo de software, diseño web y marketing digital como la empresa Legacyier."
                  }
                  skill_1={"GatsbyJS"}
                  skill_2={"ReactJS"}
                  skill_3={"TailwindCSS"}
                  skill_4={"Github"}
                  projectLink={"/project_page_Two"}
                />
                <SoftwareProject
                  title={"Garden WEB"}
                  description={
                    "Plataforma web la cual administra información, finanzas, personal, eventos, etc. Con base en la información se toman decisiones."
                  }
                  skill_1={"Javascript"}
                  skill_2={"CSS"}
                  skill_3={"PHP"}
                  skill_4={"MySQL"}
                  projectLink={"/project_page_Three"}
                />
                <SoftwareProject
                  title={"ASIST-PROY"}
                  description={
                    "El proyecto de ASIST-PROY nace de una investigación profunda sobre calidad, eficiencia, optimización y rentabilidad de diversos software."
                  }
                  skill_1={"Visual Basic .NET"}
                  skill_2={"Power BI"}
                  skill_3={"Tableu"}
                  skill_4={"MySQL"}
                  projectLink={"/project_page_Four"}
                />
                <SoftwareProject
                  title={"Proyecto CMO"}
                  description={
                    "Software para calcular la mano de obra de procesos en proyectos y que nos valore varias opciones para poder determinar qué proyecto es más factible."
                  }
                  skill_1={"Visual Basic .NET"}
                  skill_2={"Excel"}
                  skill_3={"MySQL"}
                  skill_4={"Github"}
                  projectLink={"/project_page_Five"}
                />
                <SoftwareProject
                  title={"Proyecto Bonafont"}
                  description={
                    "Radix Aguas fue desarrollado para la empresa Bonafont del grupo Danone, realizaba la captura de KPI manualmente mediante archivos de Excel."
                  }
                  skill_1={"Visual Basic"}
                  skill_2={"Macros Excel"}
                  skill_3={"Drive"}
                  skill_4={"SQL Server"}
                  projectLink={"/project_page_Six"}
                />
              </div>
            </div>
          </ProjectSection>
          <FooterWraped>
            <Footer />
          </FooterWraped>
        </div>
      </HomeWraped>
    </>
  );
}

export default Projects;
