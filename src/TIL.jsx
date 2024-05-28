import React from "react";
import TodayComponent from "./components/TIL/todayComponent";
import HomeWraped from "./components/homeWraped";
import Footer from "./footer";
import { motion } from "framer-motion";
import styled from "styled-components";
import FooterWraped from "./components/footerWraped";

const TilSection = styled.div`
  display: block;
  .content-wrapped {
    max-width: 1152px;
  }
`;
const TilSectionTitle = styled.div`
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

function Til() {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate_Title: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        delay: 0.2,
      },
    },
    animate_Subtitle: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  return (
    <>
      <HomeWraped>
        <div className="w-full h-full text-white">
          <TilSection className="pb-10 sm:pb-20 pt-40">
            <div className="content-wrapped block mx-auto">
              <TilSectionTitle className="mx-4 xl:mx-0">
                <motion.h1
                  className="text-text-white-gray Title-Name opacity-0 transform -translate-x-10 font-bold tracking-wide"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate_Title"
                  viewport={{
                    once: true,
                  }}
                >
                  Hoy aprendí
                </motion.h1>
                <motion.h2
                  className="Subtitle-Text opacity-0 transform -translate-x-10 text-text-general tracking-wide sm:mt-2"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate_Subtitle"
                  viewport={{
                    once: true,
                  }}
                >
                  Notas breves sobre temas relacionados con el full-stack.
                </motion.h2>
              </TilSectionTitle>
            </div>
          </TilSection>
          <TilSection>
            <div className="mb-20 content-wrapped block mx-auto">
              <TilSectionTitle className="mx-4 xl:mx-0 flex">
                <div className="md:w-1/3 border-l border-text-general border-opacity-20 hidden md:block"/>
                <div className="flex-1 sm:ml-0 flex flex-col gap-4">
                  <TodayComponent
                    title="Typescript de forma sencilla"
                    tag_1="#Javascript"
                    tag_2="#Typescript"
                    tag_3="#Aprendizaje"
                    description="Iniciando en Typescript, aprendo todo lo más relevante de este super lenguaje, que le da todo ese poder a JavaScript. Typescript es un superconjunto de JavaScript que añade tipado estático y objetos basados en clases."
                    link_1="Udemy"
                    link_2="Manuel Muñoz"
                    link1={'https://www.udemy.com/'}
                    link2={'https://www.udemy.com/user/manuel-munoz-mir-2/'}
                  />
                  <TodayComponent
                    title="React y Tailwind CSS ━ 2024"
                    tag_1="#ReactJS"
                    tag_2="#TailwindCSS"
                    tag_3="#Personal"
                    description="El desarrollo de mi sitio web, donde muestro mis habilidades y proyectos. Utilizando ReactJS y Tailwind CSS, dos tecnologías que me encantan. Siendo esta la actualizacion de la pagina web personal principal."
                    link_1="Boceto Principal"
                    link_2="Actualizacion"
                    link1={'https://elegant-kitten-f26e46.netlify.app/'}
                    link2={'/'}
                  />
                  <TodayComponent
                    title="Javascript es muy popular en el mundo"
                    tag_1="#JavaScript"
                    tag_2="#Programming"
                    tag_3="#Language"
                    description="JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. Desde actualizar fuentes de redes sociales a mostrar animaciones y mapas interactivos, las funciones de JavaScript pueden mejorar la experiencia del usuario de un sitio web."
                    link_1="Credits"
                    link_2="Official Docs"
                  />
                  <TodayComponent
                    title="El Lenguaje de Marcado de Hipertexto (HTML)"
                    tag_1="#HTML"
                    tag_2="#Markup"
                    tag_3="#Language"
                    description="HTML is a markup language for describing web documents (web pages)."
                    link_1="Page"
                    link_2="Official Docs"
                  />
                  <TodayComponent
                    title="React Hooks is a new addition in React"
                    tag_1="#React"
                    tag_2="#Hooks"
                    tag_3="#Language"
                    description="HTML is a markup language for describing web documents (web pages). React Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class."
                    link_1="Page"
                    link_2="Official Docs"
                  />
                  <TodayComponent
                    title="Tailwind CSS is a utility-first CSS framework"
                    tag_1="#HTML"
                    tag_2="#Markup"
                    tag_3="#Language"
                    description="Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces."
                    link_1="Page"
                    link_2="Official Docs"
                  />
                  <TodayComponent
                    title="Javascript is a programming language in the world"
                    tag_1="#HTML"
                    tag_2="#Markup"
                    tag_3="#Language"
                    description="Javascript is a programming language that conforms to the ECMAScript specification. It is the best language in the world."
                    link_1="Page"
                    link_2="Official Docs"
                  />
                </div>
              </TilSectionTitle>
            </div>
          </TilSection>
          <FooterWraped className="mt-20">
            <Footer />
          </FooterWraped>
        </div>
      </HomeWraped>
    </>
  );
}

export default Til;
