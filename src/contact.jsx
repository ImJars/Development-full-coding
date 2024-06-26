import React, { useEffect } from "react";
import IndexContact from "./components/contact/indexContact";
import TableContact from "./components/contact/tableContact";
import TableSocialMedia from "./components/contact/tableSocialMedia";
import HomeWraped from "./components/homeWraped";
import Footer from "./footer";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const ContactSection = styled.section`
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

function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const animateMiniTitleContact = useAnimation();
  const animateTitleContact = useAnimation();
  const animateSubtitleContact = useAnimation();

  useEffect(() => {
    if (inView) {
      animateMiniTitleContact.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          duration: 0.4,
          delay: 0.1,
        },
      });
      animateTitleContact.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          duration: 0.4,
          delay: 0.3,
        },
      });
      animateSubtitleContact.start({
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          duration: 0.4,
          delay: 0.5,
        },
      });
    }

    if (!inView) {
      animateMiniTitleContact.start({
        x: "-100",
        opacity: 0,
      });
      animateTitleContact.start({
        x: "-100",
        pacity: 0,
      });
      animateSubtitleContact.start({
        x: "-100",
        opacity: 0,
      });
    }
  }, [
    inView,
    animateMiniTitleContact,
    animateTitleContact,
    animateSubtitleContact,
  ]);

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  const { ref: refScroll, inView: inViewScroll } = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });

  const animate1 = useAnimation();
  const animate2 = useAnimation();
  const animateScroll = useAnimation();

  useEffect(() => {
    const animationViews = [inView1, inView2];

    const animations = [animate1, animate2];
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
  }, [inView1, inView2, animate1, animate2, inViewScroll, animateScroll]);

  return (
    <>
      <HomeWraped>
        <section
          id="contact"
          ref={ref}
          className="w-full h-full text-white font-sans"
        >
          <ContactSection className="pb-10 sm:pb-20 pt-40">
            <div className="content-wrapped block mx-auto">
              <TitleSection className="mx-4 xl:mx-0">
                <motion.h1
                  animate={animateMiniTitleContact}
                  className="Subtitle-Text opacity-0 transform -translate-x-10 text-text-blue text-2xl tracking-wide font-bold"
                >
                  Trabajo
                </motion.h1>
                <motion.h2
                  animate={animateTitleContact}
                  className="Title-Name opacity-0 transform -translate-x-10 text-text-white-gray text-7xl font-bold tracking-wide"
                >
                  Contacto
                </motion.h2>
                <motion.h3
                  animate={animateSubtitleContact}
                  className="Subtitle-Text opacity-0 transform -translate-x-10 w-full sm:w-2/3 text-text-general mt-4"
                >
                  Ponte en contacto conmigo en cualquier momento, a través de
                  las redes sociales o correo electrónico.
                </motion.h3>
              </TitleSection>
            </div>
          </ContactSection>
          <ContactSection>
            <div className="content-wrapped mx-auto flex space-x-14">
              <div
                ref={refScroll}
                className="border-l sm:pl-24 border-text-general border-opacity-20 pb-10"
              >
                <div
                  className="border-b pb-14 border-text-general border-opacity-20
                              text-text-general text-sm sm:text-base space-y-6 mx-4 xl:mx-0"
                >
                  <p className="mt-5 text-text-general tracking-wide w-full h-full">
                    Solo un recordatorio amistoso de que la información
                    proporcionada aquí es únicamente para fines comerciales. Si
                    tienes alguna pregunta, no dudes en chatear conmigo
                    directamente en mis redes sociales.
                  </p>
                  <p className="text-text-general tracking-wide">
                    Agradezco su comprensión al usar esto de manera responsable.
                  </p>
                </div>
                <div
                  ref={ref1}
                  className="mt-8 border-b border-text-general border-opacity-20 pb-10 mx-4 xl:mx-0"
                >
                  <h1 className="text-text-white-gray text-2xl sm:text-3xl font-bold tracking-wide">
                    Contacto
                  </h1>
                  <TableContact />
                  <h1 className="text-text-general text-sm sm:text-base tracking-wide mt-5">
                    Si necesita más información, como mi número de teléfono, no
                    dude en enviarme un correo electrónico primero.
                  </h1>
                </div>
                <div
                  ref={ref2}
                  className="mt-10 space-y-5 text-text-general text-base tracking-wide mx-4 xl:mx-0"
                >
                  <h1 className="text-text-white-gray text-2xl sm:text-3xl font-bold tracking-wide">
                    Redes Sociales
                  </h1>
                  <p className="text-sm sm:text-base">
                    Si quieres encontrarme en las redes sociales, te dejo mis
                    principales medios de comunicación.
                  </p>
                  <p className="text-sm sm:text-base">
                    A continuación he incluido algunos enlaces a las plataformas
                    de redes sociales que uso con más frecuencia.
                  </p>
                </div>
                <TableSocialMedia />
              </div>
              <IndexContact
                subtitle_1={"Contact"}
                subtitle_2={"Social Media"}
                animate_1={animate1}
                animate_2={animate2}
                animate_scroll={animateScroll}
              />
            </div>
          </ContactSection>
          <div className="mt-20">
            <Footer />
          </div>
        </section>
      </HomeWraped>
    </>
  );
}

export default Contact;
