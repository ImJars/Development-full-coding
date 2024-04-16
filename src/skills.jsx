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
import styled from "styled-components";

const SkillSection = styled.section`
  display: block;
  .content-wrapped {
    max-width: 1152px;
  }
`;

const SkillsSectionTitle = styled.div`
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

function Skills() {
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
    threshold: 0.1,
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
    const animationViews = [
      viewAnimate,
      viewAnimate2,
      viewAnimate3,
      viewAnimate4,
      viewAnimate5,
      viewAnimate6,
      viewAnimate7,
      viewAnimate9,
      viewAnimate10,
      viewAnimate11,
    ];

    const animations = [
      animate1,
      animate2,
      animate3,
      animate4,
      animate5,
      animate6,
      animate7,
      animate9,
      animate10,
      animate11,
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

    if (viewAnimateScroll) {
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
    viewAnimate,
    viewAnimate2,
    viewAnimate3,
    viewAnimate4,
    viewAnimate5,
    viewAnimate6,
    viewAnimate7,
    viewAnimate9,
    viewAnimate10,
    viewAnimate11,
    animate1,
    animate2,
    animate3,
    animate4,
    animate5,
    animate6,
    animate7,
    animate9,
    animate10,
    animate11,
    animateScroll,
    viewAnimateScroll,
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
        <section id="skills" className="w-full h-full text-white">
          <SkillSection className="pb-10 sm:pb-20 pt-40">
            <div className="content-wrapped block mx-auto">
              <SkillsSectionTitle className="pb-20 mx-5 sm:mx-0">
                <motion.p
                  className="Subtitle-Text opacity-0 transform -translate-x-10 text-text-blue text-2xl tracking-wide font-bold"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate_Before_Title"
                  viewport={{
                    once: true,
                  }}
                >
                  Trabajo
                </motion.p>
                <motion.h1
                  className="Title-Name opacity-0 transform -translate-x-10 text-text-white-gray text-7xl font-bold tracking-wide"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate_Title"
                  viewport={{
                    once: true,
                  }}
                >
                  Habilidades y herramientas
                </motion.h1>
                <motion.h2
                  className="Subtitle-Text opacity-0 transform -translate-x-10 w-full sm:w-2/3 text-text-general mt-4"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate_Subtitle"
                  viewport={{
                    once: true,
                  }}
                >
                  Un vistazo a todos los lenguajes de programación, bibliotecas
                  y herramientas con los que he trabajado.
                </motion.h2>
              </SkillsSectionTitle>
            </div>
          </SkillSection>
          <SkillSection>
            <div className="content-wrapped mx-auto flex space-x-14">
              <div className="border-l pl-5 sm:pl-24 border-text-general border-opacity-20 pb-20">
                <div
                  className="border-b pb-14 border-text-general border-opacity-20
                                        text-text-general text-base space-y-6"
                >
                  <h1>
                    Comencé mi carrera en la tecnologia hace unos 10 años. Probe
                    muchos lenguajes de programación y tecnologías, tanto
                    Back-End como Front-End.
                  </h1>
                  <h2>
                    Pero en los últimos años, me he centrado en el desarrollo
                    Web, ya que el alcance del desarrollo web es muy amplio y
                    siempre hay algo nuevo que aprender, que crear y que
                    mejorar.
                  </h2>
                  <h3>
                    La experiencia de diseño de usuario es una de las cosas que
                    siempre tengo en cuenta en el desarrollo de cualquier
                    proyecto, ya que la experiencia de usuario es uno de los
                    puntos más importante en cualquier proyecto.
                  </h3>
                </div>
                <div ref={refAnimateScroll}>
                  <div ref={refAnimate} className="mt-10">
                    <h1 className="text-text-white-gray text-3xl font-bold tracking-wide">
                      Desarrollador Font-End
                    </h1>
                    <h2 className="text-text-general text-base tracking-wide mt-5">
                      Me encanta crear algo que sea limpio, minimalista,
                      atractivo y por supuesto, facil de usar para los usuarios.
                    </h2>
                    <div className="mt-5 text-text-general text-base tracking-wide">
                      <h1 className="mb-5">
                        Realmente disfruto creando interfaces de usuario,
                        adaptando las tecnologias y componentes a los proyectos
                        que estoy trabajando. Incluyendo:
                      </h1>
                      <ul className="list-disc ml-5 space-y-2">
                        <li>Aplicaciones Web,</li>
                        <li>Paginas de Documentacion e informativas,</li>
                        <li>Paneles de Admistracion,</li>
                        <li>Diseño de contenido CMS</li>
                        <li>Diseño de Dashboard,</li>
                        <li>y otros.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-text-general text-base tracking-wide mt-5">
                    <p>
                      Tambien me gusta crear paginas sencillas, asi mismo me
                      gusta estar involucrado en proyectos grandes y pequeños
                      pero... ¿Con que herramientas me siento mas comodo a la
                      hora de desarrollar un proyecto?
                    </p>
                  </div>
                  <div>
                    <div ref={refAnimate2}>
                      <Skill
                        title={"TypeScript"}
                        description_1={
                          "Una de las ultimas actualizaciones que he empezado a aprender y a especializarme ya que Typescript es un superconjunto de JavaScript que se solicita mucho en las empresas. Hasta ahora creo que se me da bastante bien. Espero mejorar aun mas en el futuro."
                        }
                        description_2={
                          "He estado capacitandome en TypeScript desde hace un mes, pero creo que es una herramienta muy poderosa y que me ayudara a mejorar mi codigo en el futuro."
                        }
                      />
                    </div>
                    <div ref={refAnimate3}>
                      <Skill
                        title={"ReactJS"}
                        description_1={
                          "El desarrollo web y la libreria de React me han acompañado estos ultimos años desarrollando sitios web o aplicaciones web, y me he vuelto bastante competente con ella."
                        }
                        description_2={`Eh usado la libreria de ReactJS estos ultimos 2 años y creo que es una de las mejores librerias para el desarrollo web. Aunque tambien me gustaria especializarme en otras librerias como VueJS o Angular.`}
                      />
                    </div>
                    <div ref={refAnimate4}>
                      <Skill
                        title={"Tailwind CSS"}
                        description_1={`Por ahora, me encanta usar Tailwind CSS para diseñar, aunque he estado usando SCSS y CSS puro, creo que Tailwind CSS es una herramienta muy poderosa y facil de usar. Me siento muy comodo usandola.`}
                        description_2={`Siempre hay cosas nuevas que aprender, y Tailwind CSS es una de esas cosas que me gustaria seguir aprendiendo y mejorando. Tanto como componentes, como personalizacion y diseño.`}
                      />
                    </div>
                    <div ref={refAnimate5}>
                      <Skill
                        title={"Framer Motion"}
                        description_1={`Cuando se trata de las animaciones me gusta utlizar Framer Motion, crear animaciones para Javascript nunca habia sido tan facil y divertido. Me encanta usarlo y crear animaciones para mis proyectos. Es una herramienta muy poderosa y facil de usar.`}
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
          </SkillSection>
          <div className="mt-20">
            <Footer />
          </div>
        </section>
      </Wraped>
    </>
  );
}

export default Skills;
