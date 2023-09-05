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
import { FaProjectDiagram } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import TextHome from "./components/home/text-home";
import SubHome from "./components/home/sub-home";
import FooterWraped from "./components/footerWraped";
import Footer from "./footer";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
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
      <HomeWraped>
        <div ref={ref} className="bg-primary text-white font-poppins">
          <HomeSection className="mx-1 sm:mx-0">
            <div className="content-wrapped block mx-auto pt-52 pb-28">
              <div className="relative">
                <TitleSection className="relative z-10">
                  <motion.h1
                    animate={animateHi}
                    className="ml-0 font-outfit greeting opacity-0 transform -translate-x-10 text-text-general"
                  >
                    Hi!
                  </motion.h1>
                  <motion.div
                    animate={animateName}
                    className="text-text-white-gray font-outfit opacity-0 transform -translate-x-10 leading-none font-bold mb-2"
                  >
                    <h2 className="name ml-0">
                      I'm&nbsp;
                      <font className="text-text-blue">Angel</font>
                      &nbsp;Ramirez
                    </h2>
                  </motion.div>
                  <motion.h3
                    animate={animateJob}
                    className="ml-0 font-outfit job opacity-0 transform -translate-x-10 tracking-wide text-text-general"
                  >
                    a full-stack web developer
                  </motion.h3>
                </TitleSection>
                <div className="flex mt-8">
                  <motion.button
                    animate={animateButton}
                    className="ml-0 opacity-0 transform -translate-x-10 bg-text-blue text-white
                                            rounded-lg px-4 py-1 sm:px-8 sm:py-2 font-semibold text-sm"
                  >
                    <Buttonned className="font-outfit">Get in Touch</Buttonned>
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
                    <span className="flex">
                      <Available
                        href="#"
                        className="uppercase font-outfit font-bold text-xs tracking-wider"
                      >
                        &nbsp; Available for hire
                      </Available>
                    </span>
                  </motion.div>
                </div>
                <motion.div
                  animate={animateStack}
                  className=":ml-0 opacity-0 transform -translate-x-10 mt-36"
                >
                  <h1 className="text-xs tracking-wider text-text-general">
                    Current favorite tech stack/tools:
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
                <div className="hidden sm:block absolute -top-10 right-0 z-0">
                  <img className="w-80" src={Img} alt="" />
                </div>
              </div>
            </div>
          </HomeSection>
          <HomeSection className="-mt-10 pb-24 mx-1 sm:mx-0">
            <div className="content-wrapped block mx-auto">
              <Cards>
                <CardHome
                  extraClassIcon={"bg-card-icon-one"}
                  icon={<FaProjectDiagram />}
                  title={"Clean & Intuitive"}
                  description={
                    "Keep the UI clean with a modern touch without compromising UX."
                  }
                />
                <CardHome
                  extraClassIcon={"bg-card-icon-two"}
                  icon={<MdVerified />}
                  title={"Detail Oriented"}
                  description={
                    "Awareness to ease of access, UI consistency, and improved UX."
                  }
                />
                <CardHome
                  extraClassIcon={"bg-card-icon-three"}
                  icon={<BiCodeAlt />}
                  title={"Pretty & Optimized"}
                  description={
                    "Writing clean code is a top priority while keeping it as optimized as possible."
                  }
                />
                <CardHome
                  extraClassIcon={"bg-text-blue"}
                  icon={<BiCodeAlt />}
                  title={"Pretty & Optimized"}
                  description={
                    "Writing clean code is a top priority while keeping it as optimized as possible."
                  }
                />
              </Cards>
            </div>
          </HomeSection>
          <HomeSection className="-mt-16 pb-24 mx-1 sm:mx-0">
            <div className="content-wrapped mx-auto">
              <TextHome
                text={
                  "A person with a new idea is a crank until the idea succeeds"
                }
              />
            </div>
          </HomeSection>
          <HomeSection className="-mt-16 pb-24 mx-1 sm:mx-0">
            <section className="content-wrapped mx-auto">
              <div>
                <SubHome
                  title={"Clean & Intuitive"}
                  subtitle={"Eye Catching, Modern & Minimalist Design."}
                  text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sed lacinia ultrices, nunc lectus lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sed lacinia ultrices, nunc lectus lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sed lacinia ultrices, nunc lectus lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sed lacinia ultrices, nunc lectus lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sed lacinia ultrices, nunc lectus"
                  }
                />
              </div>
            </section>
          </HomeSection>
        </div>
      </HomeWraped>
      <section className="bg-primary border-t border-opacity-20 border-text-general mx-auto">
        <FooterWraped>
          <Footer />
        </FooterWraped>
      </section>
    </>
  );
}

export default Home;
