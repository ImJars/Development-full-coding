import React, { useEffect } from "react";
import TodayComponent from "./components/TIL/todayComponent";
import Wraped from "./components/wraped";
import Footer from "./footer";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const TilSection = styled.section`
  display: block;
  .content-wrapped {
    max-width: 1152px;
  }
`;
const TilSectionTitle = styled.div`
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

function Til() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const animateTitleTIL = useAnimation();
  const animateSubTitleTIL = useAnimation();

  useEffect(() => {
    if (inView) {
      animateTitleTIL.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          delay: 0.1,
        },
      });
      animateSubTitleTIL.start({
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
      animateTitleTIL.start({
        x: "-100",
        opacity: 0,
      });
      animateSubTitleTIL.start({
        x: "-100",
        opacity: 0,
      });
    }
  }, [inView, animateTitleTIL, animateSubTitleTIL]);

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
        <section ref={ref} className="bg-primary w-full h-full text-white">
          <TilSection className="pb-10 sm:pb-20 pt-40">
            <div className="content-wrapped block mx-auto">
              <TilSectionTitle className="mx-1 sm:mx-0">
                <motion.h1
                  className="text-text-white-gray Title-Name opacity-0 transform -translate-x-10 font-bold tracking-wide"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate_Title"
                  viewport={{
                    once: true,
                  }}
                >
                  Today I Learned
                </motion.h1>
                <motion.h2
                  className="Subtitle-Text opacity-0 transform -translate-x-10 text-text-general tracking-wide sm:mt-5"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate_Subtitle"
                  viewport={{
                    once: true,
                  }}
                >
                  Short notes on full-stack related topics.
                </motion.h2>
              </TilSectionTitle>
            </div>
          </TilSection>
          <TilSection>
            <div className="mb-20 content-wrapped block mx-auto">
              <TilSectionTitle className="mx-1 sm:mx-0 flex">
                <div className="md:w-1/3"></div>
                <div className="flex-1">
                  <TodayComponent
                    title="React Hooks is a new addition in React"
                    tag_1="#React"
                    tag_2="#Hooks"
                    tag_3="#JavaScript"
                    description="React Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class."
                    link_1="issue"
                    link_2="Official Docs"
                  />
                  <TodayComponent
                    title="Tailwind CSS is a utility-first CSS framework"
                    tag_1="#Tailwind"
                    tag_2="#CSS"
                    tag_3="#JavaScript"
                    description="Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces."
                    link_1="Credits"
                    link_2="Official Docs"
                  />
                  <TodayComponent
                    title="Javascript is a programming language"
                    tag_1="#JavaScript"
                    tag_2="#Programming"
                    tag_3="#Language"
                    description="JavaScript is a programming language that conforms to the ECMAScript specification."
                    link_1="Credits"
                    link_2="Official Docs"
                  />
                  <TodayComponent
                    title="HTML is a markup language"
                    tag_1="#HTML"
                    tag_2="#Markup"
                    tag_3="#Language"
                    description="HTML is a markup language for describing web documents (web pages)."
                    link_1="Page"
                    link_2="Official Docs"
                  />
                </div>
              </TilSectionTitle>
            </div>
          </TilSection>
          <div className="mt-20">
            <Footer />
          </div>
        </section>
      </Wraped>
    </>
  );
}

export default Til;
