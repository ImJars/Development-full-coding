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

function PageProjectSix() {
  const navigate = useNavigate();
  return (
    <>
      <BackgroundSection>
        <div className="background-cuad" />
        <section className=" text-white">
          <ProjectSection>
            <div className="content-wrapped pt-20 sm:pt-32">
              <div className="flex mx-4 sm:mx-0">
                <button onClick={() => navigate(-1)} className="">
                  <MdOutlineKeyboardBackspace className="text-4xl text-text-general hover:scale-90 transition-all duration-300 ease-in-out" />
                </button>
              </div>
              <TitleSection className="mx-5 sm:mx-0 my-20 flex justify-center">
                <h1 className="Title-Name text-text-white-gray text-7xl font-bold tracking-wide">
                  Radix Aguas
                </h1>
              </TitleSection>
              <div className="border-l pb-28 md:pl-24 border-text-general border-opacity-20">
                <div className="mx-4 sm:mx-0">
                  <p className="text-text-general my-8 sm:text-left">
                    El proyecto Radix Aguas fue desarrollado por el hecho que la
                    empresa Bonafont del grupo Danone realizaba la captura de
                    KPI´s manualmente mediante archivos de Excel que eran
                    enviados por correo y estos a su vez contaban con un tamaño
                    alrededor de +23,000 KB para lo cual se trata de archivos
                    demasiado pesados, haciendo que los correos y computadoras
                    se saturen ademas que el tiempo de envio era demasiado
                    prolongado, algunas veces se volvian inoperables las
                    computadora; esto hace que el proceso sea muy laborioso para
                    la creación del reportes gráficos basados de la información
                    mandada por los distintos CBU (países donde se encuentra la
                    empresa Bonafont) los cuales se tratan de México, Argentina,
                    Brasil, Colombia, Uruguay.
                  </p>
                  <p className="text-text-general my-4 text-justify sm:text-left">
                    Algunos de los requirimientos especificos para este proyecto
                    fueron:
                  </p>
                  <ul className="text-text-general my-4 sm:text-left flex flex-col gap-2">
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>Migracion de información a una base de datos.</p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Crear un control de acceso a la captura y visualización
                        de la información mediante usuarios y contraseñas para
                        los cuales solo ciertos usuarios puedan capturar
                        información y otros usuarios solo puedan visualizar la
                        misma.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Hacer que los RF solo puedan ser autorizados
                        primeramente por la persona administradora en LATAM.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Reducir los tiempos de captura y visualización de KPI´s.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>Optimización para él envió de información.</p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        La creación de un sistema que se conectara a una Base de
                        Datos a una serie de interfaces en Excel.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        La base de datos contendrá información recabada de las
                        diversas empresas de BONAFONT en toda LATAM.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        La creación de reportes gráficos que serán observados
                        por usuarios específicos para saber los datos
                        almacenados.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Este sistema será fácilmente operable e intuitivo por el
                        equipo de trabajo y que garantice la optimización de
                        procesos internos para el análisis de la información.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Creación de usuarios y contraseñas únicos para la
                        administración de dicho sistema.
                      </p>
                    </li>
                  </ul>
                  <p className="text-text-general my-8">
                    El sistema fue desarrollado a la medida, acoplandose a las
                    necesidades de la empresa y se utilizaron recursos que la
                    empresa tenia a su disposicion por el hecho de que el
                    proyecto a realizar no existe en el mercado y se tomo como
                    un sistema RP privado.
                  </p>
                  <p className="text-text-general my-8">
                    Un poco de informacion detallada en el siguiente enlace:
                  </p>
                  <div className="inline-block group">
                      <a href="radixAguas.docx" download={"radixAguas.docx"} className="flex flex-col">
                        <div className="flex justify-center">
                          <SlDoc className="text-3xl text-text-purple group-hover:text-purple-400 transition-all duration-200 ease-in-out" />
                        </div>
                        <h1 className="text-text-purple text-sm mt-2 group-hover:text-purple-400 transition-all duration-200 ease-in-out">
                        radixAguas.docx
                        </h1>
                      </a>
                    </div>
                  <p className="text-text-general tracking-wide my-8">
                    Algunas de las tecnologias utilizadas en este proyecto son:
                  </p>
                  <div className="flex flex-wrap gap-4 mt-5">
                    <Languajes title="SQL Server" />
                    <Languajes title="Excel" />
                    <Languajes title="Visual Basic" />
                    <Languajes title="Macros de Excel" />
                    <Languajes title="Google Drive" />
                    <Languajes title="VSCode" />
                  </div>
                  <p className="text-text-general my-8 font-mono">
                    ***El proyecto fue tomado como un proyecto privado y
                    cualquier detalle o informacion sobre grupo Danone se
                    tomaran acciones legales, no se puede mostrar el codigo
                    fuente, interfaces, bases de datos, informacion personal, correos
                    electronicos, productos, ingredientes, proveedores, cartera
                    de clientes, archivos XML, archivos Excel, ni la
                    documentación oficial del mismo.***
                  </p>
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

export default PageProjectSix;
