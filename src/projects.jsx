import React from "react";
import CardProject from "./components/projects/cardProject";
import Wraped from "./components/wraped";
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
      <Wraped>
        <section className="w-full h-full text-white font-poppins">
          <ProjectSection className="pb-10 sm:pb-20 pt-40">
            <div className="content-wrapped block mx-auto">
              <TitleSection className="mx-1 sm:mx-0">
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
              <TitleSection className="mx-1 sm:mx-0">
                <h1 className="text-xs sm:text-sm text-text-purple font-bold tracking-wide mb-1">
                  Interfaces de usuario basadas en TailwindCSS
                </h1>
                <h2 className="dynamic-text font-bold tracking-wide">
                  Software intuitivo es atractivo para los usuarios
                </h2>
                <h3 className="text-text-general text-sm sm:text-base mt-1 sm:w-1/2">
                  El desarrollo de software es un proceso complejo que requiere
                  de un equipo de trabajo con habilidades y conocimientos
                  específicos. En mi caso, ultimamente me he especializado en el
                  desarrollo de interfaces de usuario basadas en TailwindCSS, un
                  framework de CSS que permite crear interfaces de usuario de
                  forma rápida y eficiente.
                </h3>
                <button className="mt-4 bg-text-purple text-white px-4 sm:px-8 py-2 sm:py-3 rounded-full bg-opacity-10">
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-xs sm:text-sm text-text-purple font-semibold space-x-1"
                  >
                    <h1>learn more</h1>
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
          </ProjectSection>
          <ProjectSection>
            <div className="mb-20 content-wrapped block mx-auto">
              <div className="grid grid-cols-3 gap-4">
                <SoftwareProject 
                  link_page={"/project_page"}
                />
                <SoftwareProject 
                  link_page={"/project_page_Two"}
                />
                <SoftwareProject />
                <SoftwareProject />
                <SoftwareProject />
                <SoftwareProject />
              </div>
            </div>
            <div className="mb-20 content-wrapped block mx-auto">
              <TitleSection className="mx-1 sm:mx-0">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-0">
                  <CardProject
                    icon={<FaGithub />}
                    title="tailwindcss-accent"
                    text="Add accent colors for dynamic, flexible color use in your Tailwind CSS project."
                  />
                  <CardProject
                    icon={<BsFillCheckCircleFill />}
                    title="tailwindcss-accent"
                    text="Add accent colors for dynamic, flexible color use in your Tailwind CSS project."
                  />
                  <CardProject
                    icon={<FaUserFriends />}
                    title="tailwindcss-accent"
                    text="Add accent colors for dynamic, flexible color use in your Tailwind CSS project."
                  />
                  <CardProject
                    icon={<FaProjectDiagram />}
                    title="tailwindcss-accent"
                    text="Add accent colors for dynamic, flexible color use in your Tailwind CSS project."
                  />
                </div>
              </TitleSection>
            </div>
          </ProjectSection>
          <FooterWraped>
            <Footer />
          </FooterWraped>
        </section>
      </Wraped>
    </>
  );
}

export default Projects;
