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

function Studio() {

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const animateMiniTitleStudio = useAnimation();
  const animateTitleStudio = useAnimation();
  const animateSubtitleStudio = useAnimation();

  useEffect(() => {
    if (inView) {
      animateMiniTitleStudio.start({
        opacity: 1,
        x: 0,
        transition: {
          type: 'spring', duration: .4, delay: 0.1
        },
      });
      animateTitleStudio.start({
        opacity: 1,
        x: 0,
        transition: {
          type: 'spring', duration: .4, delay: 0.3
        },
      });
      animateSubtitleStudio.start({
        opacity: 1,
        x: 0,
        transition: {
          type: 'spring', duration: .4, delay: 0.5
        },
      });
    }

    if (!inView) {
      animateMiniTitleStudio.start({
        x: "-100",
        opacity: 0,
      });
      animateTitleStudio.start({
        x: "-100",
        pacity: 0,
      });
      animateSubtitleStudio.start({
        x: "-100",
        opacity: 0,
      });
    }
  }, [inView, animateMiniTitleStudio, animateTitleStudio, animateSubtitleStudio]);
  
  return (
    <>
      <section ref={ ref } className="bg-primary w-full h-full text-white">
        <Wraped>
          <div className="pb-20">
            <motion.h1 animate={ animateMiniTitleStudio } className="opacity-0 transform -translate-x-10 text-text-blue text-2xl tracking-wide pt-40 font-bold">
              Work
            </motion.h1>
            <motion.h2 animate={ animateTitleStudio } className="opacity-0 transform -translate-x-10 text-text-white-gray text-7xl font-bold tracking-wide">
              Studio
            </motion.h2>
            <motion.h3 animate={ animateSubtitleStudio } className="opacity-0 transform -translate-x-10 w-2/3 text-text-general text-2xl tracking-wide mt-8">
              A work-from-home workspace that allows me to efficiently complete
              most tasks.
            </motion.h3>
          </div>
          <div className="flex justify-between">
            <div className="w-2/3">
              <div className="border-l pl-24 border-text-general border-opacity-20 pb-96">
                <div>
                  <div className="border p-32 border-text-general border-opacity-20 mb-10" />
                  <p className="text-text-general tracking-wide">
                    One of the most important things for me when working from
                    home is having the right tools. So, let's start with my main
                    device - the computer.
                  </p>
                </div>
                <div className="mt-10">
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
                  <h1 className="text-4xl font-bold text-text-white-gray tracking-wide mb-5">
                    Display
                  </h1>
                  <p className="text-text-general">
                    The dual monitor setup maximizes my web development
                    workflow. I can code on one screen while previewing live on
                    the other — no more Alt + Tab necessary for faster, more
                    efficient work!
                  </p>
                  <p className="text-text-general mt-5">
                    Need a website with extra wide breakpoint? I've got you
                    covered with my ultrawide monitor.
                  </p>
                  <h1
                    className="text-2xl font-bold text-text-white-gray tracking-wide mt-5"
                  >
                    Primary
                  </h1>
                  <TablePrimary />
                  <h1
                    className="text-2xl font-bold text-text-white-gray tracking-wide mt-5"
                  >
                    Secondary
                  </h1>
                  <TableSecondary />
                  <h1
                    className="text-2xl font-bold text-text-white-gray tracking-wide mt-5"
                  >
                    Peripherals
                  </h1>
                  <TablePeripherals />
                  <h1
                    className="text-2xl font-bold text-text-white-gray tracking-wide mt-5"
                  >
                    Conferencing Devices
                  </h1>
                  <TableConferencingDevices />
                  <h1
                    className="text-2xl font-bold text-text-white-gray tracking-wide mt-5"
                  >
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
            />
          </div>
          <div className="mt-20">
            <Footer />
          </div>
        </Wraped>
      </section>
    </>
  );
}

export default Studio;
