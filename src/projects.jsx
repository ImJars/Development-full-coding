import React, { useEffect } from "react";
import CardProject from "./components/projects/cardProject";
import Wraped from "./components/wraped";
import Footer from "./footer";
import { FaGithub, FaUserFriends, FaProjectDiagram } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

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
`;

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const animateTitle = useAnimation();
  const animateSubTitle = useAnimation();

  useEffect(() => {
    if (inView) {
      animateTitle.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          delay: 0.1,
        },
      });
      animateSubTitle.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          delay: 0.3,
        },
      });
    }
    if (!inView) {
      animateTitle.start({
        x: "-100",
        opacity: 0,
      });
      animateSubTitle.start({
        x: "-100",
        opacity: 0,
      });
    }
  }, [inView, animateTitle, animateSubTitle]);

  return (
    <>
      <Wraped>
        <section
          ref={ref}
          className="bg-primary w-full h-full text-white font-poppins"
        >
          <ProjectSection className="pb-20 pt-40">
            <div className="content-wrapped block mx-auto">
              <TitleSection className="mx-5 sm:mx-0">
                <motion.h1
                  animate={animateTitle}
                  className="bg-primary Title-Name opacity-0 transform -translate-x-10 text-7xl font-bold tracking-wide mb-2"
                >
                  Projects
                </motion.h1>
                <motion.h2
                  animate={animateSubTitle}
                  className="Subtitle-Text opacity-0 transform -translate-x-10 text-text-general text-xs sm:text-2xl sm:mt-5"
                >
                  Showcase of my full-stack related work.
                </motion.h2>
              </TitleSection>
            </div>
            <div className="mt-20 content-wrapped block mx-auto">
              <TitleSection className="mx-5 sm:mx-0">
                <h1 className="text-sm text-text-purple font-bold tracking-wide mb-4">
                  tailwindcss-accent
                </h1>
                <h2 className="text-4xl font-bold tracking-wide">
                  The dynamic accent colors.
                </h2>
                <h3 className="text-text-general tracking-wide mt-5 w-1/2">
                  Add accent colors for dynamic, flexible color use in your
                  Tailwind CSS project.
                </h3>
                <button className="mt-5 bg-text-purple text-white px-8 py-3 rounded-full bg-opacity-10">
                  <a
                    href="#"
                    className="flex items-center text-sm text-text-purple font-semibold space-x-1"
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
          <div>
            <div>
              <div className="w-1/2">
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
              <div></div>
            </div>
          </div>
          <Wraped>
            <Footer />
          </Wraped>
        </section>
      </Wraped>
    </>
  );
}

export default Projects;
