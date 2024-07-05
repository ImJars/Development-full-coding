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
            <div className="mb-14 content-wrapped block mx-auto">
              <TilSectionTitle className="mx-4 xl:mx-0 flex">
                <div className="md:w-1/3 border-l border-text-general border-opacity-20 hidden md:block"/>
                <div className="flex-1 sm:ml-0 flex flex-col gap-4">
                  <TodayComponent
                    title="TypeScript de forma sencilla"
                    tag_1="#JavaScript"
                    tag_2="#TypeScript"
                    tag_3="#Aprendizaje"
                    description="Iniciando en TypeScript, aprendo todo lo más relevante de este superlenguaje, que le da todo ese poder a JavaScript. TypeScript es un superconjunto de JavaScript que añade tipado estático y objetos basados en clases."
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
                    description="El desarrollo de mi sitio web, donde muestro mis habilidades y proyectos. Utilizando ReactJS y Tailwind CSS, dos tecnologías que me encantan. Siendo esta la actualización de la página web personal principal."
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
                    link_2="Documento official"
                    link1={'https://developer.mozilla.org/es/docs/Web/JavaScript'}
                    link2={'https://www.w3schools.com/js/'}
                  />
                  <TodayComponent
                    title="El Lenguaje de Marcado de Hipertexto (HTML)"
                    tag_1="#HTML"
                    tag_2="#Markup"
                    tag_3="#Language"
                    description="El HTML es el lenguaje esencial para construir páginas web. Con sus etiquetas, organizamos y mostramos contenido en los navegadores. Podemos incluir texto, imágenes, enlaces y formularios, y también añadir contenido multimedia y funciones interactivas con scripts. Es clave en el desarrollo web y ha sido fundamental para el crecimiento de internet como plataforma global de información y comunicación."
                    link_1="Pagina principal"
                    link_2="Documento official"
                    link1={"https://developer.mozilla.org/es/docs/Web/HTML"}
                    link2={"https://www.w3schools.com/html/"}
                  />
                  <TodayComponent
                    title="React Hooks"
                    tag_1="#React"
                    tag_2="#Hooks"
                    tag_3="#Language"
                    description="Funciones especiales en React que permiten usar estado y otras características de React en componentes funcionales. Simplifican el código, facilitan la reutilización de lógica y mejoran el rendimiento. Principales Hooks: useState para estado local, useEffect para efectos secundarios, useContext para contextos y useReducer para estados complejos."
                    link_1="Pagina principal"
                    link_2="Documento official"
                    link1={"https://legacy.reactjs.org/docs/getting-started.html"}
                    link2={"https://legacy.reactjs.org/docs/hooks-intro.html"}
                  />
                  <TodayComponent
                    title="La revolucion de Tailwind CSS"
                    tag_1="#TailwindCSS"
                    tag_2="#CSS"
                    tag_3="#Framework"
                    description="Tailwind CSS revoluciona el paradigma del desarrollo web al ofrecer una metodología completamente nueva: el diseño utilitario. En lugar de escribir CSS personalizado, los desarrolladores utilizan clases predefinidas que aplican estilos directamente en el HTML. Este enfoque no solo acelera el proceso de desarrollo, sino que también promueve una consistencia visual rigurosa."
                    link_1="Pagina principal"
                    link_2="Documento official"
                    link1={"https://tailwindcss.com/"}
                    link2={"https://tailwindcss.com/docs"}
                  />
                  <TodayComponent
                    title="Firebase: Potencia Tu Aplicación con la Nube de Google"
                    tag_1="#Firebase"
                    tag_2="#Google"
                    tag_3="#Cloud"
                    description="Lo que hace a Firebase único es su capacidad para integrar funciones clave sin necesidad de configuraciones complejas. Por ejemplo, Firebase Realtime Database permite sincronizar datos en tiempo real entre usuarios, lo cual es ideal para aplicaciones colaborativas como chats o juegos. Además, Firebase Authentication ofrece métodos seguros para registrar usuarios a través de diferentes proveedores de identidad, como Google, Facebook o correo electrónico. Esto simplifica el desarrollo de funciones de inicio de sesión seguras y confiables."
                    link_1="Pagina principal"
                    link_2="Documento official"
                    link1={"https://firebase.google.com/"}
                    link2={"https://firebase.google.com/docs?hl=es"}
                  />
                  <TodayComponent
                    title="Manejo de proyectos con Git y GitHub"
                    tag_1="#Git"
                    tag_2="#GitHub"
                    tag_3="#Versioning"
                    description="Manejar proyectos con Git y GitHub es esencial para equipos de desarrollo. Git ofrece un sistema de control de versiones distribuido que permite a cada miembro trabajar en ramas independientes antes de fusionar cambios. GitHub complementa Git con herramientas para almacenar, revisar y gestionar proyectos de manera colaborativa, incluyendo seguimiento de problemas y solicitudes de extracción. Las mejores prácticas incluyen el uso de ramas para nuevas características, commits descriptivos, solicitudes de extracción claras, revisión de código regular y automatización de pruebas y despliegue. En conjunto, Git y GitHub mejoran la eficiencia y la colaboración en el desarrollo de software."
                    link_1="Pagina Github"
                    link_2="Pagina Git"
                    link1={"https://github.com/"}
                    link2={"https://git-scm.com/"}
                  />
                  <TodayComponent
                    title="Gestión de proyectos"
                    tag_1="#Development"
                    tag_2="#Project"
                    tag_3="#Management"
                    description="La gestión de proyectos es crucial para el éxito empresarial, abarcando desde la planificación hasta la ejecución y el cierre. Requiere comunicación efectiva, liderazgo sólido y adaptabilidad para superar desafíos. Con herramientas modernas, se optimizan recursos y se minimizan riesgos, asegurando entregas exitosas que satisfacen al cliente y agregan valor a la organización."
                    link_1="Pagina"
                    link_2="Pagina"
                    link1={"https://www.docunecta.com/blog/que-es-la-gestion-de-proyectos"}
                    link2={"https://rockcontent.com/es/blog/que-es-gestion-de-proyectos/"}
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
