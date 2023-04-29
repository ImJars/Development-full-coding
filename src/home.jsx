import React, { useEffect } from "react";
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
import CardAbout from "./components/home/card-about";
import { FaProjectDiagram } from "react-icons/fa";
import { MdGroups, MdVerified, MdOutlineWork } from "react-icons/md";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import TextHome from "./components/home/text-home";
import SubHome from "./components/home/sub-home";
import Wraped from "./components/wraped";
import Footer from "./footer";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContentWraped = styled.div`
  .content-wrapped {
    margin-left: auto;
    margin-right: auto;
    max-width: 75rem;
    padding-left: 4rem;
    padding-right: 4rem;
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

function Home() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const animateHi = useAnimation();
  const animateName = useAnimation();
  const animateJob = useAnimation();
  const animateButton = useAnimation();
  const animateAvailable = useAnimation();
  const animateStack = useAnimation();

  useEffect(() => {
    if (inView) {
      animateHi.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          delay: 0.1,
        },
      });
      animateName.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          delay: 0.2,
        },
      });
      animateJob.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          delay: 0.3,
        },
      });
      animateButton.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          delay: 0.4,
        },
      });
      animateStack.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          delay: 0.5,
        },
      });
      animateAvailable.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          delay: 2,
        },
      });
    }
    if (!inView) {
      animateHi.start({
        x: "-100",
        opacity: 0,
      });
      animateName.start({
        x: "-100",
        opacity: 0,
      });
      animateJob.start({
        x: "-100",
        opacity: 0,
      });
      animateButton.start({
        x: "-100",
        opacity: 0,
      });
      animateStack.start({
        x: "-100",
        opacity: 0,
      });
      animateAvailable.start({
        x: "-100",
        opacity: 0,
      });
    }
  }, [
    inView,
    animateHi,
    animateName,
    animateJob,
    animateButton,
    animateStack,
    animateAvailable,
  ]);

  return (
    <>
      <ContentWraped ref={ref} className="bg-primary text-white font-poppins">
        <section className="pt-52 pb-28">
          <div className="content-wrapped">
            <div className="relative">
              <div className="relative z-10">
                <motion.h1
                  animate={animateHi}
                  className="opacity-0 transform -translate-x-10 text-4xl text-text-general"
                >
                  Hi!
                </motion.h1>
                <motion.h2
                  animate={animateName}
                  className="opacity-0 transform -translate-x-10 text-7xl leading-none font-bold mb-6"
                >
                  I'm&nbsp;
                  <font className="text-text-blue">Angel</font>
                  &nbsp;Ramirez,
                </motion.h2>
                <motion.h3
                  animate={animateJob}
                  className="opacity-0 transform -translate-x-10 text-xl tracking-wide text-text-general"
                >
                  a full-stack web developer
                </motion.h3>
              </div>
              <div className="flex mt-8">
                <motion.button
                  animate={animateButton}
                  className="opacity-0 transform -translate-x-10 bg-text-blue text-white
                                            rounded-lg px-8 py-2 font-semibold"
                >
                  Get in Touch
                </motion.button>
                <motion.div
                  animate={animateAvailable}
                  className="opacity-0 transform -translate-x-10 flex items-center ml-4 text-text-blue"
                >
                  <div className="relative text-3xl">
                    &#8226;
                    <div className="absolute top-0 ">
                      <Ping>
                        <h1 className="text-3xl">&#8226;</h1>
                      </Ping>
                    </div>
                  </div>
                  <span>
                    <a href="#" className="uppercase font-bold text-xs tracking-wider">
                      &nbsp; Available for hire
                    </a>
                  </span>
                </motion.div>
              </div>
              <motion.div
                animate={animateStack}
                className="opacity-0 transform -translate-x-10 mt-36"
              >
                <h1 className="text-xs tracking-wider text-text-general">
                  Current favorite tech stack/tools:
                </h1>
                <ul className="flex items-center mt-4 space-x-3">
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
              <div className="hidden sm:block absolute -top-10 right-0 z-0 overflow-hidden">
                <img className="w-80" src={Img} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-primary block -mt-16 pb-24">
          <div className="content-wrapped">
            <div className="flex justify-between">
              <CardAbout
                extraClass={"bg-card-icon-one"}
                icon={<FaProjectDiagram />}
                description={"Clean & Intuitive"}
                text={
                  "Keep the UI clean with a modern touch without compromising UX."
                }
              />
              <CardAbout
                extraClass={"bg-card-icon-two"}
                icon={<MdVerified />}
                description={"Detail Oriented"}
                text={
                  "Awareness to ease of access, UI consistency, and improved UX."
                }
              />
              <CardAbout
                extraClass={"bg-card-icon-three"}
                icon={<BiCodeAlt />}
                description={"Pretty & Optimized"}
                text={
                  "Writing clean code is a top priority while keeping it as optimized as possible."
                }
              />
            </div>
          </div>
        </section>
        <section className="bg-primary block -mt-16 pb-24">
          <div className="content-wrapped">
            <TextHome
              text_one={"― I must be willing to give "}
              text_two={" up what I am to become "}
              text_three={" what I will be. ―"}
            />
          </div>
        </section>
        <section className="bg-primary block -mt-16 pb-24">
          <section className="content-wrapped">
            <div>
              <SubHome
                title={"Clean & Intuitive"}
                subtitle={"Eye Catching, Modern & Minimalist Design."}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sed lacinia ultrices, nunc lectus"
                }
              />
            </div>
          </section>
        </section>
        <section className="bg-primary block mt-16 pb-24">
          <Wraped>
            <Footer></Footer>
          </Wraped>
        </section>
      </ContentWraped>
    </>
  );
}

export default Home;
