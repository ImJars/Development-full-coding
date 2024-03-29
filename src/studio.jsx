import React, { useEffect } from "react";
import IndexStudio from "./components/studio/indexStudio";
import TableComputer from "./components/studio/tableComputer";
import TableConferencingDevices from "./components/studio/tableConferencingDevices";
import TableOthers from "./components/studio/tableOthers";
import TablePeripherals from "./components/studio/tablePeripherals";
import TablePrimary from "./components/studio/tablePrimary";
import TableSecondary from "./components/studio/tableSecondary";
import Wraped from "./components/wraped";
import Footer from "./footer";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const StudioSection = styled.section`
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

function Studio() {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const { ref: ref4, inView: inView4 } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const { ref: ref5, inView: inView5 } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const { ref: ref6, inView: inView6 } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const { ref: ref7, inView: inView7 } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const { ref: refScroll, inView: inViewScroll } = useInView({
    threshold: 0.25,
    triggerOnce: false,
  });

  const animate1 = useAnimation();
  const animate2 = useAnimation();
  const animate3 = useAnimation();
  const animate4 = useAnimation();
  const animate5 = useAnimation();
  const animate6 = useAnimation();
  const animate7 = useAnimation();
  const animateScroll = useAnimation();

  useEffect(() => {
    const animationViews = [
      inView1,
      inView2,
      inView3,
      inView4,
      inView5,
      inView6,
      inView7,
    ];

    const animations = [
      animate1,
      animate2,
      animate3,
      animate4,
      animate5,
      animate6,
      animate7,
    ];
    for (let i = 0; i < animations.length; i++) {
      const animation = animations[i];
      const view = animationViews[i];
      if (view) {
        animation.start({
          backgroundColor: "#1D263A",
          color: "#60A5FA",
          transition: {
            type: "spring",
            duration: 0.1,
          },
        });
      } else {
        animation.start({
          backgroundColor: "#161E31",
          color: "#909EB2",
        });
      }
    }

    if (inViewScroll) {
      animateScroll.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          duration: 0.4,
        },
      });
    } else {
      animateScroll.start({
        x: 20,
        opacity: 0,
      });
    }
  }, [
    inView1,
    animate1,
    inView2,
    animate2,
    inView3,
    animate3,
    inView4,
    animate4,
    inView5,
    animate5,
    inView6,
    animate6,
    inView7,
    animate7,
    inViewScroll,
    animateScroll,
  ]);

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate_Before_Title: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        delay: 0.2,
      },
    },
    animate_Title: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        delay: 0.3,
      },
    },
    animate_Subtitle: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        delay: 0.4,
      },
    },
  };

  return (
    <>
      <Wraped>
        <section id="studio" className="w-full h-full text-white">
          <StudioSection className="pb-10 sm:pb-20 pt-40">
            <div className="content-wrapped block mx-auto">
              <TitleSection className="mx-5 sm:mx-0">
                <motion.h1
                  className="Subtitle-Text opacity-0 transform -translate-x-10 text-text-blue text-2xl tracking-wide font-bold"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate_Before_Title"
                  viewport={{
                    once: true,
                  }}
                >
                  Trabajo
                </motion.h1>
                <motion.h2
                  className="Title-Name opacity-0 transform -translate-x-10 text-text-white-gray text-7xl font-bold tracking-wide"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate_Title"
                  viewport={{
                    once: true,
                  }}
                >
                  Estudio
                </motion.h2>
                <motion.h3
                  className="Subtitle-Text opacity-0 transform -translate-x-10 w-full sm:w-2/3 text-text-general mt-4"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate_Subtitle"
                  viewport={{
                    once: true,
                  }}
                >
                  Un espacio de trabajo desde casa que me permite completar
                  eficientemente la mayoría de las tareas.
                </motion.h3>
              </TitleSection>
            </div>
          </StudioSection>
          <StudioSection>
            <div className="content-wrapped mx-auto flex space-x-14">
              <div
                ref={refScroll}
                className="border-l pl-5 sm:pl-24 border-text-general border-opacity-20"
              >
                <div>
                  <div className="mt-5 border p-32 border-text-general border-opacity-20 mb-10" />
                  <p className="text-text-general tracking-wide">
                    One of the most important things for me when working from
                    home is having the right tools. So, let's start with my main
                    device - the computer.
                  </p>
                </div>
                <div ref={ref1} className="mt-10">
                  <h1 className="text-4xl font-bold text-text-white-gray tracking-wide mb-5">
                    Computer
                  </h1>
                  <TableComputer />
                  <p className="text-text-general">
                    This computer may not have the latest specs, but it runs
                    incredibly fast and smooth! It's perfect for web
                    development, even for larger or heavier projects like React
                    Electron.
                  </p>
                  <p className="text-text-general mt-5">
                    The 32GB of RAM also ensures that multitasking is a breeze!
                  </p>
                </div>
                <div className="mt-10">
                  <div ref={ref2}>
                    <h1 className="text-4xl font-bold text-text-white-gray tracking-wide mb-5">
                      Display
                    </h1>
                    <p className="text-text-general">
                      The dual monitor setup maximizes my web development
                      workflow. I can code on one screen while previewing live
                      on the other — no more Alt + Tab necessary for faster,
                      more efficient work!
                    </p>
                    <p className="text-text-general mt-5">
                      Need a website with extra wide breakpoint? I've got you
                      covered with my ultrawide monitor.
                    </p>
                  </div>
                  <div ref={ref3}>
                    <h1 className="text-2xl font-bold text-text-white-gray tracking-wide mt-5">
                      Primary
                    </h1>
                    <TablePrimary />
                  </div>
                  <div ref={ref4}>
                    <h1 className="text-2xl font-bold text-text-white-gray tracking-wide mt-5">
                      Secondary
                    </h1>
                    <TableSecondary />
                  </div>
                  <div ref={ref5}>
                    <h1 className="text-2xl font-bold text-text-white-gray tracking-wide mt-5">
                      Peripherals
                    </h1>
                    <TablePeripherals />
                  </div>
                  <div ref={ref6}>
                    <h1 className="text-2xl font-bold text-text-white-gray tracking-wide mt-5">
                      Conferencing Devices
                    </h1>
                    <TableConferencingDevices />
                  </div>
                  <div ref={ref7}>
                    <h1 className="text-2xl font-bold text-text-white-gray tracking-wide mt-5">
                      Others
                    </h1>
                    <TableOthers />
                  </div>
                </div>
              </div>
              <IndexStudio
                subtitle_1={"Computer"}
                subtitle_2={"Display"}
                description_1={"Primary"}
                description_2={"Secondary"}
                subtitle_3={"Peripherals"}
                subtitle_4={"Conferencing Devices"}
                subtitle_5={"Others"}
                animate_1={animate1}
                animate_2={animate2}
                animate_3={animate3}
                animate_4={animate4}
                animate_5={animate5}
                animate_6={animate6}
                animate_7={animate7}
                animate_scroll={animateScroll}
              />
            </div>
          </StudioSection>
          <div className="mt-20">
            <Footer />
          </div>
        </section>
      </Wraped>
    </>
  );
}

export default Studio;
