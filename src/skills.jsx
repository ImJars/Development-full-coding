import React, { useEffect } from "react";
import Languajes from "./components/skills/languajes";
import MainSkill from "./components/skills/mainSkill";
import Skill from "./components/skills/skill";
import Technologies from "./components/skills/technologies";
import Tools from "./components/skills/tools";
import Wraped from "./components/wraped";
import Footer from "./footer";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import IndexSkill from "./components/skills/indexSkill";

function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const animateBeforeTitleSkills = useAnimation();
  const animateTitleSkills = useAnimation();
  const animateSubTitleSkills = useAnimation();

  useEffect(() => {
    if (inView) {
      animateBeforeTitleSkills.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.4,
          delay: 0.1,
        },
      });
      animateTitleSkills.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.4,
          delay: 0.3,
        },
      });
      animateSubTitleSkills.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.4,
          delay: 0.5,
        },
      });
    }
    if (!inView) {
      animateBeforeTitleSkills.start({
        x: "-100",
        opacity: 0,
      });
      animateTitleSkills.start({
        x: "-100",
        opacity: 0,
      });
      animateSubTitleSkills.start({
        x: "-100",
        opacity: 0,
      });
    }
  }, [
    inView,
    animateBeforeTitleSkills,
    animateTitleSkills,
    animateSubTitleSkills,
  ]);

  //Observer y animaciones de indexSkill
  const { ref: refAnimate, inView: viewAnimate } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const { ref: refAnimate2, inView: viewAnimate2 } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const { ref: refAnimate3, inView: viewAnimate3 } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const { ref: refAnimate4, inView: viewAnimate4 } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const { ref: refAnimate5, inView: viewAnimate5 } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const { ref: refAnimate6, inView: viewAnimate6 } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const { ref: refAnimate7, inView: viewAnimate7 } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const { ref: refAnimate9, inView: viewAnimate9 } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const { ref: refAnimate10, inView: viewAnimate10 } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const { ref: refAnimate11, inView: viewAnimate11 } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const { ref: refAnimateScroll, inView: viewAnimateScroll } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const animate1 = useAnimation();
  const animate2 = useAnimation();
  const animate3 = useAnimation();
  const animate4 = useAnimation();
  const animate5 = useAnimation();
  const animate6 = useAnimation();
  const animate7 = useAnimation();
  const animate9 = useAnimation();
  const animate10 = useAnimation();
  const animate11 = useAnimation();
  const animateScroll = useAnimation();

  useEffect(() => {
    if (viewAnimate) {
      animate1.start({
        backgroundColor: "#1D263A",
        color: "#60A5FA",
        transition: {
          type: "spring",
          duration: 0.1,
        },
      });
    }
    if (viewAnimate2) {
      animate2.start({
        backgroundColor: "#1D263A",
        color: "#60A5FA",
        transition: {
          type: "spring",
          duration: 0.1,
        },
      });
    }
    if (viewAnimate3) {
      animate3.start({
        backgroundColor: "#1D263A",
        color: "#60A5FA",
        transition: {
          type: "spring",
          duration: 0.1,
        },
      });
    }
    if (viewAnimate4) {
      animate4.start({
        backgroundColor: "#1D263A",
        color: "#60A5FA",
        transition: {
          type: "spring",
          duration: 0.1,
        },
      });
    }
    if (viewAnimate5) {
      animate5.start({
        backgroundColor: "#1D263A",
        color: "#60A5FA",
        transition: {
          type: "spring",
          duration: 0.1,
        },
      });
    }
    if (viewAnimate6) {
      animate6.start({
        backgroundColor: "#1D263A",
        color: "#60A5FA",
        transition: {
          type: "spring",
          duration: 0.1,
        },
      });
    }
    if (viewAnimate7) {
      animate7.start({
        backgroundColor: "#1D263A",
        color: "#60A5FA",
        transition: {
          type: "spring",
          duration: 0.1,
        },
      });
    }
    if (viewAnimate9) {
      animate9.start({
        backgroundColor: "#1D263A",
        color: "#60A5FA",
        transition: {
          type: "spring",
          duration: 0.1,
        },
      });
    }
    if (viewAnimate10) {
      animate10.start({
        backgroundColor: "#1D263A",
        color: "#60A5FA",
        transition: {
          type: "spring",
          duration: 0.1,
        },
      });
    }
    if (viewAnimate11) {
      animate11.start({
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

    if (!viewAnimate) {
      animate1.start({
        backgroundColor: "#161E31",
        color: "#CBD5E1",
      });
    }
    if (!viewAnimate2) {
      animate2.start({
        backgroundColor: "#161E31",
        color: "#909EB2",
      });
    }
    if (!viewAnimate3) {
      animate3.start({
        backgroundColor: "#161E31",
        color: "#909EB2",
      });
    }
    if (!viewAnimate4) {
      animate4.start({
        backgroundColor: "#161E31",
        color: "#909EB2",
      });
    }
    if (!viewAnimate5) {
      animate5.start({
        backgroundColor: "#161E31",
        color: "#909EB2",
      });
    }
    if (!viewAnimate6) {
      animate6.start({
        backgroundColor: "#161E31",
        color: "#909EB2",
      });
    }
    if (!viewAnimate7) {
      animate7.start({
        backgroundColor: "#161E31",
        color: "#CBD5E1",
      });
    }
    if (!viewAnimate9) {
      animate9.start({
        backgroundColor: "#161E31",
        color: "#909EB2",
      });
    }
    if (!viewAnimate10) {
      animate10.start({
        backgroundColor: "#161E31",
        color: "#909EB2",
      });
    }
    if (!viewAnimate11) {
      animate11.start({
        backgroundColor: "#161E31",
        color: "#909EB2",
      });
    }
    if (!viewAnimateScroll) {
      animateScroll.start({
        x: 20,
        opacity: 0,
      });
    }
  }, [
    viewAnimate,
    animate1,
    viewAnimate2,
    animate2,
    viewAnimate3,
    animate3,
    viewAnimate4,
    animate4,
    viewAnimate5,
    animate5,
    viewAnimate6,
    animate6,
    viewAnimate7,
    animate7,
    viewAnimate9,
    animate9,
    viewAnimate10,
    animate10,
    viewAnimate11,
    animate11,
    animateScroll,
    viewAnimateScroll,
  ]);

  return (
    <>
      <section
        id="skills"
        ref={ref}
        className="bg-primary w-full h-full text-white"
      >
        <Wraped>
          <div>
            <div className="pb-20">
              <motion.p
                animate={animateBeforeTitleSkills}
                className="opacity-0 transform -translate-x-10 text-text-blue text-2xl tracking-wide pt-40 font-bold"
              >
                Work
              </motion.p>
              <motion.h1
                animate={animateTitleSkills}
                className="opacity-0 transform -translate-x-10 text-text-white-gray text-7xl font-bold tracking-wide"
              >
                Skills and Tools
              </motion.h1>
              <motion.h2
                animate={animateSubTitleSkills}
                className="opacity-0 transform -translate-x-10 w-2/3 text-text-general text-2xl tracking-wide mt-8"
              >
                A look at all the programming languages, libraries, and tools
                I've worked with.
              </motion.h2>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-2/3">
              <div className="border-l pl-24 border-text-general border-opacity-20 pb-20">
                <div
                  className="border-b pb-14 border-text-general border-opacity-20
                                        text-text-general text-base space-y-6"
                >
                  <h1>
                    I started my career as a web developer about 7 years ago.
                    I've tried some programming languages and tech stack, both
                    Back-End, and Front-End.
                  </h1>
                  <h2>
                    Even though the scope of web development is broad, I was
                    very interested and focused on Front-End Development and
                    UI/UX Design.
                  </h2>
                </div>
                <div ref={refAnimateScroll}>
                  <div ref={refAnimate} className="mt-10">
                    <h1 className="text-text-white-gray text-3xl font-bold tracking-wide">
                      Front-End Developer
                    </h1>
                    <h2 className="text-text-general text-base tracking-wide mt-5">
                      I love creating something that is clean and minimalistic,
                      attractive and has value, and of course, easy to use.
                    </h2>
                    <div className="mt-5 text-text-general text-base tracking-wide">
                      <h1 className="mb-5">
                        I really enjoy creating websites with rich UI
                        components, including:
                      </h1>
                      <ul className="list-disc ml-5 space-y-2">
                        <li>Web application,</li>
                        <li>Documentation pages,</li>
                        <li>CMS contents layout</li>
                        <li>Dashboard layout,</li>
                        <li>and others.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-text-general text-base tracking-wide mt-5">
                    <p>
                      But I still like to make simple website pages like landing
                      pages. So, what tools did I feel comfortable using during
                      the website creation?
                    </p>
                  </div>
                  <div>
                    <div ref={refAnimate2}>
                      <Skill
                        title={"TypeScript"}
                        description_1={
                          "First of all, the programming language. I'm very used to using TypeScript, although website creation can be done using PHP, Python, etc."
                        }
                        description_2={
                          "The JavaScript superset—TypeScript—has accompanied me for about 5 years."
                        }
                      />
                    </div>
                    <div ref={refAnimate3}>
                      <Skill
                        title={"React"}
                        description_1={
                          "I really enjoy building single page application websites and React is my go-to library."
                        }
                        description_2={`I've been using it since 2018 (5 years) and have become quite proficient with it.`}
                      />
                    </div>
                    <div ref={refAnimate4}>
                      <Skill
                        title={"Tailwind CSS"}
                        description_1={`For now, I love using Tailwind CSS for styling, even though I've been using SCSS for a longer time (4 years).`}
                        description_2={`I'm still new to Tailwind CSS, but I'm really comfortable using it and I think it's a great tool.`}
                      />
                    </div>
                    <div ref={refAnimate5}>
                      <Skill
                        title={"Framer Motion"}
                        description_1={`For animations, I am more comfortable using Framer Motion. Creating animations using JavaScript has never been as easy as using Framer Motion.`}
                      />
                    </div>
                    <div ref={refAnimate6}>
                      <Skill
                        title={"Next.js"}
                        description_1={`I've been using CRA for a few years, but since discovering Next.js, I don't think I would want to use any other web framework. It's just that good!.`}
                      />
                    </div>
                  </div>
                  <div ref={refAnimate7} className="mt-10">
                    <MainSkill
                      title={"UI/UX Designer"}
                      description_1={`Designing user interfaces is something I'm really good at and I've been a UI/UX designer from 2018 to 2021 (3 years).`}
                      description_2={`I'm always thinking about how to create the best possible user experience, in addition to creating visually appealing user interfaces.`}
                      description_3={`The biggest challenge is finding the balance between creating a great user interface and an amazing user experience.`}
                    />
                  </div>
                  <div>
                    <div ref={refAnimate9}>
                      <h1 className="text-text-white-gray text-2xl font-bold tracking-wide mt-10">
                        Programming Languages
                      </h1>
                      <div className="flex flex-wrap gap-4 mt-5">
                        <Languajes title={"TypeScript"} />
                        <Languajes title={"JavaScript"} />
                        <Languajes title={"React"} />
                        <Languajes title={"HTML"} />
                        <Languajes title={"Tailwind CSS"} />
                        <Languajes title={"NodeJS"} />
                        <Languajes title={"Solidity"} />
                      </div>
                    </div>
                    <div ref={refAnimate10}>
                      <h1 className="text-text-white-gray text-2xl font-bold tracking-wide mt-10">
                        Technologies
                      </h1>
                      <div className="flex flex-wrap gap-4 mt-5">
                        <Technologies title={"Next.js"} />
                        <Technologies title={"Material UI"} />
                        <Technologies title={"React"} />
                        <Technologies title={"Framer Motion"} />
                        <Technologies title={"Redux"} />
                        <Technologies title={"Webpack"} />
                        <Technologies title={"Backbone.js"} />
                        <Technologies title={"Marionette.js"} />
                        <Technologies title={"WordPress"} />
                        <Technologies title={"Express"} />
                        <Technologies title={"MongoDB"} />
                      </div>
                    </div>
                    <div ref={refAnimate11}>
                      <h1 className="text-text-white-gray text-2xl font-bold tracking-wide mt-10">
                        Softwares and Tools
                      </h1>
                      <div className="flex flex-wrap gap-4 mt-5">
                        <Tools title={"VS Code"} />
                        <Tools title={"Node.js"} />
                        <Tools title={"Git"} />
                        <Tools title={"Sourcetree"} />
                        <Tools title={"Figma"} />
                        <Tools title={"Inkscape"} />
                        <Tools title={"Photoshop"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <IndexSkill
              title_1={"Front-End Developer"}
              subtitle_1={"TypeScript"}
              subtitle_2={"React"}
              subtitle_3={"Tailwind CSS"}
              subtitle_4={"Framer Motion"}
              subtitle_5={"Next.js"}
              title_2={"UI/UX Designer"}
              subtitle_6={"Programming Languages"}
              subtitle_7={"Technologies"}
              subtitle_8={"Softwares and Tools"}
              animate_1={animate1}
              animate_2={animate2}
              animate_3={animate3}
              animate_4={animate4}
              animate_5={animate5}
              animate_6={animate6}
              animate_7={animate7}
              animate_9={animate9}
              animate_10={animate10}
              animate_11={animate11}
              animate_scroll={animateScroll}
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

export default Skills;
