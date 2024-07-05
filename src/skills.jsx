import React, { useEffect } from "react";
import Languajes from "./components/skills/languajes";
import MainSkill from "./components/skills/mainSkill";
import Skill from "./components/skills/skill";
import Technologies from "./components/skills/technologies";
import Tools from "./components/skills/tools";
import HomeWraped from "./components/homeWraped";
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

const scrollToSection = (programming) => {
  const section = document.getElementById(programming);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

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
  const { ref: refAnimateBack, inView: viewAnimateBack } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const { ref: refAnimateBack2, inView: viewAnimateBack2 } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const { ref: refAnimateBack3, inView: viewAnimateBack3 } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const { ref: refAnimateBack4, inView: viewAnimateBack4 } = useInView({
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
  const animateBack = useAnimation();
  const animateBack2 = useAnimation();
  const animateBack3 = useAnimation();
  const animateBack4 = useAnimation();

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
      viewAnimateBack,
      viewAnimateBack2,
      viewAnimateBack3,
      viewAnimateBack4,
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
      animateBack,
      animateBack2,
      animateBack3,
      animateBack4,
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
    viewAnimateBack,
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
    animateBack,
    animateBack2,
    animateBack3,
    animateBack4,
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
      <HomeWraped>
        <section id="skills" className="w-full h-full text-white font-sans">
          <SkillSection className="pb-10 sm:pb-20 pt-40">
            <div className="content-wrapped block mx-auto">
              <SkillsSectionTitle className="pb-20 mx-4 xl:mx-0">
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
                  className="Subtitle-Text opacity-0 transform -translate-x-10 w-full lg:w-2/3 text-text-general mt-4"
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
              <div className="border-l sm:pl-24 border-text-general border-opacity-20 pb-20">
                <div
                  className="border-b pb-14 border-text-general border-opacity-20
                                        text-text-general text-sm sm:text-base space-y-6 mx-4 xl:mx-0"
                >
                  <h1>
                    Empecé mi carrera en tecnología hace unos 10 años. He
                    explorado diversos lenguajes de programación y tecnologías,
                    tanto en el Back-End como en el Front-End. En los últimos
                    años, me he especializado en el desarrollo web, fascinado
                    por su amplio alcance y la constante oportunidad de
                    aprender, crear y mejorar.
                  </h1>
                  <h3>
                    La experiencia de usuario es fundamental en todos mis
                    proyectos, ya que considero que es crucial para el éxito de
                    cualquier iniciativa.
                  </h3>
                  <button
                    onClick={() => scrollToSection("programming")}
                    className="group mt-4 bg-text-purple text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg bg-opacity-10 backdrop-blur-xs group-hover:bg-text-purple/5"
                  >
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center text-xs sm:text-sm text-text-purple font-semibold space-x-1 group-hover:text-text-white-gray group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out"
                    >
                      <h1>Resumen Habilidades</h1>
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
                </div>
                <div ref={refAnimateScroll}>
                  <div ref={refAnimate} className="mt-10 mx-4 xl:mx-0">
                    <h1 className="text-text-white-gray text-2xl sm:text-3xl font-bold tracking-wide">
                      Desarrollador Font-End
                    </h1>
                    <div className="mt-5 text-text-general text-sm sm:text-base tracking-wide">
                      <h1 className="mb-5">
                        Me apasiona crear interfaces que combinen limpieza,
                        minimalismo y atractivo visual, asegurando al mismo
                        tiempo una excelente experiencia de usuario. Disfruto
                        enormemente adaptando tecnologías y componentes a una
                        variedad de proyectos, que abarcan desde:
                      </h1>
                      <ul className="list-none space-y-2 ">
                        <li className="space-x-2">
                          <font className="text-text-blue">&#8226;</font>
                          <span>Aplicaciones web dinámicas.</span>
                        </li>
                        <li className="space-x-2">
                          <font className="text-text-blue">&#8226;</font>
                          <span>
                            Páginas informativas y de documentación claras y
                            accesibles.
                          </span>
                        </li>
                        <li className="space-x-2">
                          <font className="text-text-blue">&#8226;</font>
                          <span>Complejos paneles de administración.</span>
                        </li>
                        <li className="space-x-2">
                          <font className="text-text-blue">&#8226;</font>
                          <span>
                            Diseño de contenido para sistemas de gestión de
                            contenidos (CMS).
                          </span>
                        </li>
                        <li className="space-x-2">
                          <font className="text-text-blue">&#8226;</font>
                          <span>
                            Elaboración de dashboards intuitivos y funcionales.
                          </span>
                        </li>
                        <li className="space-x-2">
                          <font className="text-text-blue">&#8226;</font>
                          <span>Y otros desafíos creativos.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-text-general text-sm sm:text-base tracking-wide mt-5 mx-4 xl:mx-0">
                    <p>
                      Me siento igualmente cómodo trabajando en proyectos
                      simples como en iniciativas más ambiciosas. ¿Cuáles son
                      mis herramientas preferidas para llevar a cabo estos
                      desarrollos con éxito?
                    </p>
                  </div>
                  <div>
                    <div ref={refAnimate2}>
                      <Skill
                        title={"TypeScript"}
                        description_1={
                          "He estado dedicando tiempo últimamente a aprender y especializarme en TypeScript, dado que es un superconjunto de JavaScript muy solicitado en el ámbito laboral. Hasta ahora, creo que estoy progresando bastante bien. Espero seguir mejorando en el futuro, ya que veo en TypeScript una herramienta poderosa que beneficiará mi habilidad para escribir código. Llevo aproximadamente un mes capacitándome en este lenguaje, y estoy convencido de que será muy útil en mi desarrollo profesional."
                        }
                      />
                    </div>
                    <div ref={refAnimate3}>
                      <Skill
                        title={"ReactJS"}
                        description_1={
                          "En los últimos años, he dedicado mi tiempo al desarrollo web utilizando principalmente la biblioteca React, y he adquirido una sólida competencia en su aplicación. Durante los últimos dos años, he trabajado activamente con ReactJS y considero que es una de las herramientas más eficientes y potentes para la creación de sitios web y aplicaciones web dinámicas."
                        }
                        description_2={`Sin embargo, mi interés por seguir creciendo profesionalmente me impulsa a explorar y especializarme en otras tecnologías similares, como VueJS y Angular. Estas plataformas también tienen mucho que ofrecer en términos de flexibilidad, rendimiento y escalabilidad, y me entusiasma la idea de ampliar mis habilidades y conocimientos en estos ámbitos.`}
                        description_3={
                          "En resumen, mientras que React ha sido mi principal enfoque hasta ahora, estoy emocionado por explorar nuevas herramientas y aprender más sobre las diversas posibilidades que el desarrollo web moderno tiene para ofrecer."
                        }
                      />
                    </div>
                    <div ref={refAnimate4}>
                      <Skill
                        title={"Tailwind CSS"}
                        description_1={`Me encanta trabajar con Tailwind CSS para diseño. Aunque también he utilizado SCSS y CSS puro, considero que Tailwind CSS es una herramienta extremadamente poderosa y fácil de dominar. Me siento muy cómodo utilizándola.`}
                        description_2={`Siempre estoy interesado en aprender cosas nuevas, y Tailwind CSS es una de esas herramientas que quiero seguir explorando y perfeccionando, tanto en la creación de componentes como en la personalización y el diseño.`}
                      />
                    </div>
                    <div ref={refAnimate5}>
                      <Skill
                        title={"Framer Motion"}
                        description_1={`Cuando se trata de animaciones, Framer Motion se ha convertido en mi herramienta preferida. Crear animaciones para JavaScript nunca había sido tan sencillo y gratificante como con esta biblioteca. Me encanta la facilidad con la que puedo dar vida a mis proyectos mediante sus potentes capacidades. Es increíblemente accesible y versátil, permitiéndome explorar nuevas ideas y mejorar la experiencia visual de mis aplicaciones de manera fluida y eficiente.`}
                      />
                    </div>
                    <div ref={refAnimate6}>
                      <Skill
                        title={"Styled Components"}
                        description_1={`Styled Components se ha convertido en una herramienta fundamental en mis proyectos, gracias a su capacidad para crear componentes reutilizables y completamente personalizados. Su poder y facilidad de uso son impresionantes. Integrada con ReactJS, esta herramienta no solo simplifica la creación de componentes, sino que también potencia mi capacidad para diseñar interfaces altamente personalizadas y eficientes.`}
                      />
                    </div>
                  </div>
                  <div
                    ref={refAnimateBack}
                    className="mt-10 pt-10 mx-4 xl:mx-0 border-t border-text-general border-opacity-20"
                  >
                    <h1 className="text-text-white-gray text-2xl sm:text-3xl font-bold tracking-wide">
                      Desarrollador Back-End
                    </h1>
                    <div className="mt-5 text-text-general text-sm sm:text-base tracking-wide">
                      <h1 className="mb-5">
                        Mi trabajo en el backend se centra en diseñar sistemas
                        robustos y escalables que aseguren un rendimiento óptimo
                        y una alta seguridad. Disfruto adaptando soluciones a
                        una variedad de proyectos, desde aplicaciones web hasta
                        plataformas complejas, mientras me enfoco en crear
                        interfaces limpias y minimalistas que mejoren la
                        experiencia del usuario. Mi objetivo es siempre
                        optimizar el código y aplicar las mejores prácticas para
                        garantizar la funcionalidad, la eficiencia y la
                        seguridad del sistema.
                      </h1>
                    </div>
                  </div>
                  <div>
                    <div ref={refAnimateBack2}>
                      <Skill
                        title={"Java"}
                        description_1={
                          "Durante mi estancia en la universidad y durante mi año de formación en ALURA he estado aprendiendo los fundamentos del lenguaje y desarrollando habilidades básicas en programación orientada a objetos. Estoy emocionado por seguir explorando Java y expandir mi conocimiento en frameworks como Spring para aplicaciones web y empresariales."
                        }
                      />
                    </div>
                    <div ref={refAnimateBack3}>
                      <Skill
                        title={"Firebase"}
                        description_1={
                          "Me apasiona trabajar con Firebase para el desarrollo de aplicaciones. Aunque he utilizado otras tecnologías como bases de datos SQL y MySQL directamente, Firebase ofrece una plataforma extremadamente poderosa y fácil de aprender. Me siento muy cómodo trabajando con sus servicios integrados como autenticación, bases de datos en tiempo real y almacenamiento en la nube. Siempre estoy motivado por aprender nuevas funcionalidades que Firebase ofrece, especialmente en la creación de aplicaciones complejas y escalables. La flexibilidad y la capacidad de personalización que proporciona Firebase hacen que sea una herramienta fascinante para mejorar la experiencia del usuario y optimizar el rendimiento de las aplicaciones."
                        }
                      />
                    </div>
                    <div ref={refAnimateBack4}>
                      <Skill
                        title={"SQL Server & MySQL"}
                        description_1={
                          "He trabajado directamente con MySQL y SQL para desarrollar aplicaciones debido a su robustez y versatilidad. Disfruto especialmente optimizando consultas y diseñando bases de datos relacionales complejas y escalables. Siempre estoy motivado por aprender nuevas técnicas que mejoren el rendimiento y la eficiencia de las aplicaciones utilizando MySQL y SQL."
                        }
                      />
                    </div>
                  </div>
                  <div ref={refAnimate7} className="mt-10">
                    <MainSkill
                      title={"Diseñador UI/UX"}
                      description_1={`Diseñar interfaces de usuario es mi especialidad, con varios años de experiencia tanto en desarrollo web como en móvil y de escritorio. Siempre me esfuerzo por crear experiencias de usuario excepcionales y visualmente atractivas. Mi mayor desafío radica en lograr un equilibrio perfecto entre una interfaz excelente y una experiencia de usuario increíble que satisfaga las necesidades del usuario sin ser visualmente abrumadora.`}
                      id_bottom={"programming"}
                    />
                  </div>
                  <div>
                    <div ref={refAnimate9} className="mx-4 xl:mx-0">
                      <h1 className="text-text-white-gray text-2xl sm:text-3xl font-bold tracking-wide mt-10">
                        Programación
                      </h1>
                      <div className="flex flex-wrap gap-4 mt-5">
                        <Languajes title={"Javascript"} />
                        <Languajes title={"ReactJS"} />
                        <Languajes title={"HTML"} />
                        <Languajes title={"NodeJS"} />
                        <Languajes title={"Java"} />
                        <Languajes title={"ViteJS"} />
                        <Languajes title={"GatsbyJS"} />
                        <Languajes title={"Visual Basic .Net"} />
                        <Languajes title={"VBA Excel"} />
                      </div>
                    </div>
                    <div ref={refAnimate10} className="mx-4 xl:mx-0">
                      <h1 className="text-text-white-gray text-2xl sm:text-3xl font-bold tracking-wide mt-10">
                        Tecnologías
                      </h1>
                      <div className="flex flex-wrap gap-4 mt-5">
                        <Technologies title={"SQL Server"} />
                        <Technologies title={"MySQL"} />
                        <Technologies title={"Firebase"} />
                        <Technologies title={"Tailwind CSS"} />
                        <Technologies title={"GSAP"} />
                        <Technologies title={"Styled Components"} />
                        <Technologies title={"Framer Motion"} />
                        <Technologies title={"Bootstrap"} />
                        <Technologies title={"Material UI"} />
                      </div>
                    </div>
                    <div ref={refAnimate11} className="mx-4 xl:mx-0">
                      <h1 className="text-text-white-gray text-2xl sm:text-3xl font-bold tracking-wide mt-10">
                        Software y Herramientas
                      </h1>
                      <div className="flex flex-wrap gap-4 mt-5">
                        <Tools title={"Visual Studio Code"} />
                        <Tools title={"Visual Studio"} />
                        <Tools title={"Microsoft Project"} />
                        <Tools title={"Git"} />
                        <Tools title={"Github"} />
                        <Tools title={"Photoshop"} />
                        <Tools title={"Illustrator"} />
                        <Tools title={"After Effects"} />
                        <Tools title={"Figma"} />
                        <Tools title={"InVision"} />
                        <Tools title={"Sony Vegas Pro"} />
                        <Tools title={"Slack"} />
                        <Tools title={"Office"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <IndexSkill
                title_1={"Desarrollador Font-End"}
                subtitle_1={"TypeScript"}
                subtitle_2={"React"}
                subtitle_3={"Tailwind CSS"}
                subtitle_4={"Framer Motion"}
                subtitle_5={"Styled Components"}
                title_3={"Desarrollador Back-End"}
                subtitle_back2={"Java"}
                subtitle_back3={"Firebase"}
                subtitle_back4={"SQL Server & MySQL"}
                animate_back={animateBack}
                animate_back2={animateBack2}
                animate_back3={animateBack3}
                animate_back4={animateBack4}
                title_2={"Diseñador UI/UX"}
                subtitle_6={"Lenguajes de Programación"}
                subtitle_7={"Tecnologias"}
                subtitle_8={"Softwares y Herramientas"}
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
          <div className="mt-14">
            <Footer />
          </div>
        </section>
      </HomeWraped>
    </>
  );
}

export default Skills;
