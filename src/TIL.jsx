import React, { useEffect } from "react";
import TodayComponent from "./components/TIL/todayComponent";
import Wraped from "./components/wraped";
import Footer from "./footer";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Til() {
  const { ref, inView } = useInView({
    threshold: 0.5,
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
                type: 'spring', duration: .5, delay: 0.1
            }
        })
        animateSubTitleTIL.start({
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring', duration: .5, delay: 0.3
            }
        })
    }
    if (!inView) {
        animateTitleTIL.start({
            x: '-100',
            opacity: 0,
        })
        animateSubTitleTIL.start({
            x: '-100',
            opacity: 0,
        })
    }
  }, [inView, animateTitleTIL, animateSubTitleTIL])
  
  return (
    <>
      <section ref={ref} className="bg-primary w-full h-full text-white">
        <Wraped>
          <div className="pb-20">
            <div>
              <motion.h1 animate={ animateTitleTIL } className="opacity-0 transform -translate-x-10 text-text-white-gray text-7xl font-bold tracking-wide pt-40">
                Today I Learned
              </motion.h1>
              <motion.h2 animate={ animateSubTitleTIL } className="opacity-0 transform -translate-x-10 text-text-general text-2xl tracking-wide mt-8">
                Short notes on full-stack related topics.
              </motion.h2>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/3"></div>
            <div className="w-2/3">
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
          </div>
          <div className="mt-20">
            <Footer />
          </div>
        </Wraped>
      </section>
    </>
  );
}

export default Til;
