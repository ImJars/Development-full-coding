import React, { useEffect } from "react";
import Index from "./components/experience";
import Content from "./components/experience/content";
import List from "./components/experience/list";
import HomeWraped from "./components/homeWraped";
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
  const { ref: refAnimateScroll, inView: viewAnimateScroll } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const animate1 = useAnimation();
  const animate2 = useAnimation();
  const animate3 = useAnimation();
  const animateScroll = useAnimation();

  useEffect(() => {
    const animationViews = [inViewAnimate, inViewAnimate2, inViewAnimate3];

    const animations = [animate1, animate2, animate3];

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
    inViewAnimate,
    animate1,
    inViewAnimate2,
    animate2,
    inViewAnimate3,
    animate3,
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
      <HomeWraped>
        <section id="experience" className="w-full h-full text-white font-sans">
          <ExperienceSection className="pb-10 sm:pb-20 pt-40">
            <div className="content-wrapped block mx-auto">
              <TitleSection className="mx-4 xl:mx-0">
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
                  Experiencia
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
                  Todo sobre mi experiencia laboral freelance, autónomo y
                  profesional.
                </motion.h3>
              </TitleSection>
            </div>
          </ExperienceSection>
          <ExperienceSection>
            <div className="content-wrapped mx-auto flex space-x-14 font-sans">
              <div className="border-l sm:pl-24 border-text-general border-opacity-20 pb-14">
                <div
                  className="border-b pb-14 border-text-general border-opacity-20
                                            text-text-general text-sm sm:text-base space-y-6 mx-4 xl:mx-0"
                >
                  <p className="mt-5">
                    Mi carrera tecnológica hablando comenzó en 2014, donde mis
                    estudios y trabajos me llevaron a la programación y
                    desarrollo de software.
                  </p>
                  <p className="mt-5">
                    Y así comenzó mi carrera profesional en 2019 donde tuve la
                    oportunidad de trabajar en proyectos de alta gama y con
                    empresas de gran renombre.
                  </p>
                  <p className="mt-2">
                    Hasta la fecha mi enfoque siempre ha sido la ingeniería de
                    software, el desarrollo web y móvil, así como también la
                    administración de proyectos y la creación de interfaces.
                  </p>
                </div>
                <div ref={refAnimateScroll}>
                  <div ref={refAnimate}>
                    <Content
                      extraClass={
                        "py-14 border-b border-text-general border-opacity-20"
                      }
                      title={"Freelancer"}
                      company={"Legacyier"}
                      date={"(Enero 2022 – abril 2023)"}
                      description__text={
                        "Legacyier es una marca de mi autoría, donde me dedico a la creación de aplicaciones web y móviles, así como también a la creación de sitios web y tiendas online. En Legacyier me dedico a dar soporte tanto de hardware como de software en equipos de cómputo y móviles."
                      }
                      description={
                        <ol>
                          <List
                            description={`Administración de proyectos (Arquitectura de software, MVC, análisis de requerimientos y control de versiones).`}
                          />
                          <List
                            description={`Desarrollo, construcción y programación de interfaces.`}
                          />
                          <List
                            description={`Mantenimiento y ensamblado de equipo de cómputo.`}
                          />
                          <List
                            description={`Instalación y soporte de software.`}
                          />
                          <List
                            description={`Auxiliar avanzado en entorno Office.`}
                          />
                          <List
                            description={`Capacitación constante en nuevas tecnologías.`}
                          />
                        </ol>
                      }
                    />
                  </div>
                  <div
                    ref={refAnimate2}
                    className="py-14 border-b border-text-general border-opacity-20"
                  >
                    <Content
                      title={"Trabajo Profesional"}
                      company={"Bliss DDM"}
                      date={"(Enero 2021 – noviembre 2021)"}
                      description__text={
                        "Bliss DDM es una empresa de desarrollo web, donde me dedique a la colaboración en el desarrollo de sitios web y aplicaciones web. Donde me especialice en algunas de las tecnologías más usadas en el desarrollo web, como lo son React, Node.js, Next.js, MongoDB, entre otras."
                      }
                      description={
                        <ol>
                          <List
                            description={`Colaboré en el desarrollo y soporte de sitios web, asegurando la ejecución acorde a la visión
                            empresarial.`}
                          />
                          <List
                            description={`Realicé actualizaciones diarias y correcciones de diseño utilizando tecnologías de control de versiones.`}
                          />
                          <List
                            description={`Demostré habilidades de autoaprendizaje y adaptabilidad, contribuyendo al éxito continuo de los
                            proyectos web.`}
                          />
                        </ol>
                      }
                    />
                    <Content
                      company={"Raxe-Tech"}
                      date={"(Agosto – diciembre 2020)"}
                      description__text={
                        "Raxe-Tech fue uno de mis primeros equipos de desarrollo durante algunos años y diferentes proyectos profesionales."
                      }
                      description={
                        <ol>
                          <List
                            description={`Trabaje en colaboración con un equipo de desarrollo, implementando con precisión los requisitos
                            establecidos por el equipo de diseño.`}
                          />
                          <List
                            description={`Proporcioné mejoras y diseñé estratégicamente interfaces intuitivas para el Administrador, empleados
                            y usuarios, optimizando la experiencia de uso.`}
                          />
                          <List
                            description={`Trabaje en el desarrollo de software de control de versiones para proyectos personales o
                            empresariales.`}
                          />
                          <List
                            description={`Creación y desarrollo de base de datos para carga masiva en archivos Excel, desarrollo de interfaces y
                            documentación.`}
                          />
                        </ol>
                      }
                    />
                    <Content
                      company={"SQDesarrollo"}
                      date={"(Enero – diciembre 2019)"}
                      description={
                        <ol>
                          <List
                            description={`Contribución en la programación, desarrollo de interfaces y cálculos para la exportación de informes.`}
                          />
                          <List
                            description={`Líder en análisis y construcción de bases de datos para usuarios y datos masivos.`}
                          />
                          <List
                            description={`Estrategia, implementación y desarrollo de seguridad para usuarios, administradores y directivos.`}
                          />
                          <List
                            description={`Propuesta y diseño de informes finales resultantes del software.`}
                          />
                          <List
                            description={`Análisis y contribución con el equipo de desarrollo para elección de mejor arquitectura de software.`}
                          />
                          <List
                            description={`Análisis de la base de datos para cumplir los requerimientos en el desarrollo.`}
                          />
                          <List
                            description={`Construcción de interfaces y programación de macros.`}
                          />
                        </ol>
                      }
                    />
                  </div>
                  <div ref={refAnimate3}>
                    <Content
                      extraClass={"pt-10"}
                      title={"Proxima experiencia..."}
                      company={"-"}
                      date={"-"}
                    />
                  </div>
                </div>
              </div>
              <Index
                subtitle_1={"Freelancer"}
                subtitle_2={"Trabajo Profesional"}
                subtitle_3={"Próxima experiencia…"}
                animate_1={animate1}
                animate_2={animate2}
                animate_3={animate3}
                animate_scroll={animateScroll}
              />
            </div>
          </ExperienceSection>
          <div className="mt-14">
            <Footer />
          </div>
        </section>
      </HomeWraped>
    </>
  );
}

export default Experience;
