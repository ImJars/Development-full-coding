import React from "react";
import styled from "styled-components";
import Languajes from "../skills/languajes";
import Footer from "../../footer";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ProjectSection = styled.section`
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  .content-wrapped {
    max-width: 1152px;
    display: flex;
    flex-direction: column;
    z-index: 2;
  }
`;
const BackgroundSection = styled.div`
  width: auto;
  height: auto;
  position: relative;
  z-index: 0;
  background: rgb(12, 18, 34);
  background: linear-gradient(
    0deg,
    rgba(12, 18, 34, 1) 0%,
    rgba(15, 23, 42, 1) 40%,
    rgba(15, 23, 42, 1) 50%,
    rgba(15, 23, 42, 1) 60%,
    rgba(12, 18, 34, 1) 100%
  );
  .background-cuad {
    background-image: url("descarga.svg");
    background-repeat: repeat;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    opacity: 1;
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

function PageProject() {
  const navigate = useNavigate();
  return (
    <>
      <BackgroundSection>
        <div className="background-cuad font-sans" />
        <section className=" text-white">
          <ProjectSection>
            <div className="content-wrapped pt-20 sm:pt-32">
              <div className="flex mx-4 xl:mx-0">
                <button onClick={() => navigate(-1)} className="">
                  <MdOutlineKeyboardBackspace className="text-4xl text-text-general hover:scale-90 transition-all duration-300 ease-in-out" />
                </button>
              </div>
              <TitleSection className="mx-4 sm:mx-0 my-20 flex justify-center">
                <h1 className="Title-Name text-text-white-gray text-7xl font-bold tracking-wide">
                  Jarsdev Website
                </h1>
              </TitleSection>
              <div className="border-l pb-28 md:pl-24 border-text-general border-opacity-20">
                <div className="mx-4 xl:mx-0">
                  <p className="text-text-general my-8 text-left">
                    Jarsdev es uno de los últimos proyectos en los que he
                    trabajado, es un proyecto que me ha encantado hacer. Este
                    proyecto es un sitio web personal construido desde cero que
                    me permite mostrar mis habilidades y proyectos a futuros
                    empleadores y clientes. Cada vez mejorando y enfocándome en
                    la experiencia de usuario, eficiencia, tecnologías empleadas
                    y sobre todo que sea atrayente para el usuario. Poniendo en
                    práctica uno de mis verdaderos objetivos que es la
                    simplicidad pero con un toque de elegancia.
                  </p>
                  <div className="flex flex-col justify-center my-8">
                    <img
                      src="legacyier-express.png"
                      alt="img_legacyier-express"
                      className="w-full sm:w-2/3 shadow-2xl shadow-text-purple/50 flex justify-center mx-auto rounded-lg"
                    />
                    <p className="flex justify-center text-xs text-text-white-gray">
                      p. Pagina de Inicio de sitio web Jarsdev
                    </p>
                  </div>
                  <p className="text-text-general my-8">
                    Este proyecto fue inspirado en el dicho de Bill Gates: "Si
                    tu negocio no está en internet, tu negocio no existe", y es
                    por eso que decidí crear este sitio web para mostrar al
                    mundo lo que puedo hacer y lo que puedo ofrecer, aunque lo
                    más importante es para que las personas puedan encontrarme,
                    contactarme y conocerme mejor.
                  </p>
                  <p className="text-text-general tracking-wide my-8">
                    Algunas de las tecnologías utilizadas en este proyecto son:
                  </p>
                  <div className="flex flex-wrap gap-4 mt-5">
                    <Languajes title="HTML5" />
                    <Languajes title="TailwindCSS" />
                    <Languajes title="StyledComponents" />
                    <Languajes title="JavaScript" />
                    <Languajes title="ReactJS" />
                    <Languajes title="Firebase" />
                    <Languajes title="Vite" />
                    <Languajes title="Framer Motion" />
                    <Languajes title="React Router" />
                    <Languajes title="React Icons" />
                    <Languajes title="VSCode" />
                    <Languajes title="Git / Github" />
                  </div>
                </div>
              </div>
            </div>
          </ProjectSection>
          <div className="pt-40">
            <Footer />
          </div>
        </section>
      </BackgroundSection>
    </>
  );
}

export default PageProject;
