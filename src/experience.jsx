import React, { useEffect } from "react";
import Index from "./components/experience";
import Content from "./components/experience/content";
import List from "./components/experience/list";
import Wraped from "./components/wraped";
import Footer from "./footer";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

const ExperienceSection = styled.section`
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

function Experience() {

  const { ref: refAnimate, inView: inViewAnimate } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const { ref: refAnimate2, inView: inViewAnimate2 } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const { ref: refAnimate3, inView: inViewAnimate3 } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const { ref: refAnimate4, inView: inViewAnimate4 } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const { ref: refAnimateScroll, inView: viewAnimateScroll } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const animate1 = useAnimation();
  const animate2 = useAnimation();
  const animate3 = useAnimation();
  const animate4 = useAnimation();
  const animateScroll = useAnimation();

  useEffect(() => {
    if (inViewAnimate) {
      animate1.start({
        backgroundColor: "#1D263A",
        color: "#60A5FA",
        transition: {
          type: "spring",
          duration: 0.1,
        },
      });
    }
    if (inViewAnimate2) {
      animate2.start({
        backgroundColor: "#1D263A",
        color: "#60A5FA",
        transition: {
          type: "spring",
          duration: 0.1,
        },
      });
    }
    if (inViewAnimate3) {
      animate3.start({
        backgroundColor: "#1D263A",
        color: "#60A5FA",
        transition: {
          type: "spring",
          duration: 0.1,
        },
      });
    }
    if (inViewAnimate4) {
      animate4.start({
        backgroundColor: "#1D263A",
        color: "#60A5FA",
        transition: {
          type: "spring",
          duration: 0.1,
        },
      });
    }
    if (viewAnimateScroll) {
      animateScroll.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          duration: 0.4,
        },
      });
    }

    if (!inViewAnimate) {
      animate1.start({
        backgroundColor: "#161E31",
        color: "#CBD5E1",
      });
    }
    if (!inViewAnimate2) {
      animate2.start({
        backgroundColor: "#161E31",
        color: "#CBD5E1",
      });
    }
    if (!inViewAnimate3) {
      animate3.start({
        backgroundColor: "#161E31",
        color: "#CBD5E1",
      });
    }
    if (!inViewAnimate4) {
      animate4.start({
        backgroundColor: "#161E31",
        color: "#CBD5E1",
      });
    }
    if (!viewAnimateScroll) {
      animateScroll.start({
        x: 20,
        opacity: 0,
      });
    }
  }, [
    inViewAnimate,
    animate1,
    inViewAnimate2,
    animate2,
    inViewAnimate3,
    animate3,
    inViewAnimate4,
    animate4,
    viewAnimateScroll,
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
        <section
          id="experience"
          className="bg-primary w-full h-full text-white"
        >
          <ExperienceSection className="pb-10 sm:pb-20 pt-40">
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
                  Work
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
                  Experience
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
                  All about my freelance, self-employed, and professional work
                  experience.
                </motion.h3>
              </TitleSection>
            </div>
          </ExperienceSection>
          <ExperienceSection>
            <div className="content-wrapped mx-auto flex space-x-14">
              <div className="border-l pl-5 sm:pl-24 border-text-general border-opacity-20 pb-20">
                <div
                  className="border-b pb-14 border-text-general border-opacity-20
                                            text-text-general text-base space-y-6"
                >
                  <h1 className="mt-5">
                    I started my professional career as a web developer around
                    2016. In 2021, I resigned from my job to focus on completing
                    college matters while taking on some freelance projects.
                  </h1>
                </div>
                <div ref={refAnimateScroll}>
                  <div ref={refAnimate}>
                    <Content
                      title={"Self-employed"}
                      company={"Hemat.id"}
                      date={"(Jun 2022 - Jul 2022)"}
                      description={
                        <ol>
                          <List
                            description={`Improving the UI & UX of Femicam's desktop application based on React Electron and Material UI.`}
                          />
                          <List
                            description={`Designing and creating React components for the application dashboard.`}
                          />
                          <List
                            description={`Creating an image editor using Sharp.js.`}
                          />
                        </ol>
                      }
                    />
                  </div>
                  <div ref={refAnimate2}>
                    <Content
                      display={true}
                      title={"Freelance"}
                      company={"1928.id"}
                      date={"(Jun 2022 - Jul 2022)"}
                      description={
                        <ol>
                          <List
                            description={`Created main site navigation (menu, footer, mobile drawer) using Tailwind CSS.`}
                          />
                          <List
                            description={`Created product tiles, promotion cards, and other small components using Tailwind CSS.`}
                          />
                        </ol>
                      }
                      company_2={"Hemat.id"}
                      date_2={"(Jun 2022 - Jul 2022)"}
                      description_2={
                        <ol>
                          <List
                            description={`Improving the UI & UX of Femicam's desktop application based on React Electron and Material UI.`}
                          />
                          <List
                            description={`Designing and creating React components for the application dashboard.`}
                          />
                        </ol>
                      }
                    />
                  </div>
                  <div ref={refAnimate3}>
                    <Content
                      title={"Professional Work"}
                      company={"Ciptaloka"}
                      date={"(Jul 2016 - Jun 2021)"}
                      description={
                        <>
                          <div className="space-y-6">
                            <p>
                              My first and (currently) only professional work is
                              at Ciptaloka. At Ciptaloka, I do many types of
                              work, such as developing desktop, mobile, and web
                              applications.
                            </p>
                            <p>
                              However, my work there is primarily focused on web
                              development, and around the last 2 years I worked
                              there, I have learned a lot about React,
                              particularly when creating the v2 design editor.
                            </p>
                            <div className="space-y-4">
                              <h1>
                                Here are the details of the work I did at
                                Ciptaloka:
                              </h1>
                              <ol>
                                <List
                                  description={`Created the v2 design editor layout using React.`}
                                />
                                <List
                                  description={`Redesigned the website's front page from vanilla CSS to use Foundation 6.`}
                                />
                                <List
                                  description={`Developed interactive UI on mobile editor using Framework7, Backbone.js, and Marionette.js.`}
                                />
                                <List
                                  description={`Created e-mail marketing design templates using Foundation for E-mails.`}
                                />
                                <List
                                  description={`Customized the blog.ciptaloka.com WordPress theme to match the looks and feels of the main site.`}
                                />
                              </ol>
                            </div>
                          </div>
                        </>
                      }
                    />
                  </div>
                  <div ref={refAnimate4}>
                    <Content title={"What They Say"} company={"-"} date={"-"} />
                  </div>
                </div>
              </div>
              <Index
                subtitle_1={"Self-Employed"}
                subtitle_2={"Freelance"}
                subtitle_3={"Professional Work"}
                subtitle_4={"What They Say"}
                animate_1={animate1}
                animate_2={animate2}
                animate_3={animate3}
                animate_4={animate4}
                animate_scroll={animateScroll}
              />
            </div>
          </ExperienceSection>
          <div className="mt-20">
            <Footer />
          </div>
        </section>
      </Wraped>
    </>
  );
}

export default Experience;
