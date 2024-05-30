import React from "react";
import styled from "styled-components";
import Languajes from "../skills/languajes";
import Footer from "../../footer";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

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

function PageProjectTwo() {
  const navigate = useNavigate();
  return (
    <>
      <BackgroundSection>
        <div className="background-cuad" />
        <section className=" text-white">
          <ProjectSection>
            <div className="content-wrapped pt-20 sm:pt-32">
              <div className="flex mx-4 xl:mx-0">
                <button onClick={() => navigate(-1)} className="">
                  <MdOutlineKeyboardBackspace className="text-4xl text-text-general hover:scale-90 transition-all duration-300 ease-in-out" />
                </button>
              </div>
              <TitleSection className="mx-4 xl:mx-0 my-20 flex justify-center">
                <h1 className="Title-Name text-text-white-gray text-7xl font-bold tracking-wide">
                  Legacyier Express
                </h1>
              </TitleSection>
              <div className="border-l pb-28 md:pl-24 border-text-general border-opacity-20">
                <div className="mx-4 xl:mx-0">
                  <p className="text-text-general my-8 text-justify sm:text-left">
                    Legacyier Express es un proyecto donde se ofrecen servicios
                    de Desarrollo de Software como Freelancer donde se pueden
                    encontrar servicios de Desarrollo Web, Desarrollo de
                    Aplicaciones Moviles, Desarrollo de Software a la medida,
                    entre otros. Asi mismo aproveche este pequeño proyexto para
                    practicar y mejorar mis habilidades en el desarrollo web.
                  </p>
                  <div className="flex flex-col justify-center my-8">
                    <img
                      src="LegacyierExpress.png"
                      alt="img_legacyier-express"
                      className="w-full sm:w-2/3 shadow-2xl shadow-text-purple/50 flex justify-center mx-auto"
                    />
                    <p className="flex justify-center text-xs text-text-white-gray">
                      p. Pagina de Inicio de sitio web Jarsdev
                    </p>
                  </div>
                  <div className="inline-block group mt-5">
                    <a
                      href="https://elegant-kitten-f26e46.netlify.app/"
                      className=" items-center space-x-1 text-sm text-text-general group-hover:text-text-purple transition-all duration-300 ease-in-out flex"
                    >
                      <span>v2.1 del sitio web Legacyier Express</span>
                      <FaExternalLinkAlt className="text-xs text-text-general group-hover:text-text-purple transition-all duration-300 ease-in-out" />
                    </a>
                  </div>
                  <p className="text-text-general mb-8 mt-4">
                    Este proyecto fue construido para ofrecer servicios de consultoria y desarrollo de software a la medida.
                    Tanto para negocios locales como para empresas nacionales. La actualizacion y reconstruccion a una nueva version del sitio web ya esta disponible.
                  </p>
                  <p className="text-text-general tracking-wide my-4">
                    Algunas de las tecnologias utilizadas en este proyecto son:
                  </p>
                  <div className="flex flex-wrap gap-4 mt-5">
                  <Languajes title="GatsbyJS" />
                    <Languajes title="HTML5" />
                    <Languajes title="TailwindCSS" />
                    <Languajes title="StyledComponents" />
                    <Languajes title="JavaScript" />
                    <Languajes title="ReactJS" />
                    <Languajes title="Framer Motion" />
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

export default PageProjectTwo;
