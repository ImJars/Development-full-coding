import React from "react";
import styled from "styled-components";
import Languajes from "../skills/languajes";
import Footer from "../../footer";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { SlDoc } from "react-icons/sl";

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
function PageProjectFive() {
  const navigate = useNavigate();
  return (
    <>
      <BackgroundSection>
        <div className="background-cuad" />
        <section className="font-sans">
          <ProjectSection>
            <div className="content-wrapped pt-20 sm:pt-32">
              <div className="flex mx-4 xl:mx-0">
                <button onClick={() => navigate(-1)} className="">
                  <MdOutlineKeyboardBackspace className="text-4xl text-text-general hover:scale-90 transition-all duration-300 ease-in-out" />
                </button>
              </div>
              <TitleSection className="mx-4 sm:mx-0 my-20 flex justify-center">
                <h1 className="Title-Name text-text-white-gray text-7xl font-bold tracking-wide">
                  Proyecto CMO
                </h1>
              </TitleSection>
              <div className="border-l pb-28 md:pl-24 border-text-general border-opacity-20">
                <div className="mx-4">
                  <p className="text-text-general my-8 sm:text-left">
                    Proyecto CMO es un proyecto realizado para el grupo Holcim
                    México que tuvo como objetivo el desarrollo de un software
                    con interfaz gráfica que sea capaz de calcular el
                    costo-beneficio de la mano de obra de procesos por medio de
                    proyectos y que nos valore varias opciones para poder
                    determinar qué proyecto es más factible.
                  </p>
                  <p className="text-text-general my-4 text-justify sm:text-left">
                    Algunos de los requerimientos específicos para este proyecto
                    fueron:
                  </p>
                  <ul className="text-text-general my-4 sm:text-left flex flex-col gap-2">
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Un software con interfaz gráfica intuitivo y
                        familiarizado con la empresa.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Software capaz de calcular la mano de obra con
                        diferentes variables.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Que el software de varias opciones de las propuestas
                        obtenidas.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Sistema de seguridad mediante usuario y contraseña para
                        el ingreso al sistema.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Que el software sea capaz de conectarse a una base de
                        datos cliente-servidor.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Software compatible con el S.O. Windows 10 (en todas sus
                        versiones).
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Compatibilidad con el manejador de base de datos MySQL
                        8.0
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        El software se debe adaptar a cualquier tipo de división
                        del Grupo Holcim para poder realizar.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        El software debe ser un sistema mano de obra para
                        Rolling Forecast en simulación
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        El software deberá consultar información real de la
                        empresa para generar una simulación de las propuestas,
                        sin tener que generar una acción o cambios a la base de
                        datos actual.
                      </p>
                    </li>
                  </ul>
                  <div className="flex flex-col justify-center my-8">
                    <img
                      src="proyectoCMO.png"
                      alt="img_proyectoCMO"
                      className="w-full sm:w-2/3 shadow-2xl shadow-text-purple/50 flex justify-center mx-auto rounded-lg"
                    />
                    <p className="flex justify-center text-xs text-text-white-gray">
                      p. Pagina de inicio de sesion software CMO
                    </p>
                  </div>
                  <p className="text-text-general my-8">
                    El software para la empresa Grupo Holcim cumplió con las
                    necesidades ya descritas en los requerimientos, de igual
                    manera basándonos en el análisis realizado, se detectó,
                    corrigió y sugirieron herramientas o procedimientos que
                    ayudaron con el proceso de mejora.
                  </p>
                  <p className="text-text-general my-8">
                    Más información sobre este proyecto en los siguientes
                    enlaces:
                  </p>
                  <div className="flex justify-center space-x-14">
                    <div className="inline-block group">
                      <a href="proyectoCMO.docx" download={"proyectoCMO.docx"}>
                        <div className="flex justify-center">
                          <SlDoc className="text-3xl text-text-purple group-hover:text-purple-400 transition-all duration-200 ease-in-out" />
                        </div>
                        <h1 className="text-text-purple text-sm mt-2 group-hover:text-purple-400 transition-all duration-200 ease-in-out">
                          proyectoCMO.docx
                        </h1>
                      </a>
                    </div>
                    <div className="inline-block group">
                      <a
                        href="ProyectoCMO.pptx"
                        download={"ProyectoCMO.pptx"}
                        className="flex flex-col"
                      >
                        <div className="flex justify-center">
                          <SlDoc className="text-3xl text-text-purple group-hover:text-purple-400 transition-all duration-200 ease-in-out" />
                        </div>
                        <h1 className="text-text-purple text-sm mt-2 group-hover:text-purple-400 transition-all duration-200 ease-in-out">
                          ProyectoCMO.pptx
                        </h1>
                      </a>
                    </div>
                  </div>
                  <p className="text-text-general tracking-wide my-8">
                    Algunas de las tecnologías utilizadas en este proyecto son:
                  </p>
                  <div className="flex flex-wrap gap-4 mt-5">
                    <Languajes title="MySQL" />
                    <Languajes title="Visual Basic .NET" />
                    <Languajes title="Excel" />
                    <Languajes title="Microsoft Project" />
                    <Languajes title="Google Drive" />
                    <Languajes title="Slack" />
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

export default PageProjectFive;
