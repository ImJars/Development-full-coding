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

function PageProjectFour() {
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
              <TitleSection className="mx-4 sm:mx-0 my-20 flex justify-center">
                <h1 className="Title-Name text-text-white-gray text-7xl font-bold tracking-wide">
                  ASIST-PROY
                </h1>
              </TitleSection>
              <div className="border-l px-5 pb-28 md:pl-24 border-text-general border-opacity-20">
                <div>
                  <p className="text-text-general my-8 text-left">
                    El proyecto de ASIST-PROY nace de una investigación profunda
                    sobre calidad, eficiencia, optimización y rentabilidad de
                    diversos software para la gestión de proyectos
                    empresariales, los software actuales en el mercado marcan
                    mucha demanda, pero algo elevados en costos de membresía así
                    mismo se han tomado referencias para la optimización, diseño
                    y elaboración en nuestro software, creando módulos adaptados
                    a las necesidades de desarrollo de proyectos de las
                    empresas, con base a la organización de los tiempos se
                    contempla la primera versión del software, desarrollado por
                    RAXE-TECH, enfocándose primordialmente en BI, costes de los
                    proyectos, actividades y los cronogramas, haciendo que esté
                    con base en una suscripción entre en el entorno competitivo
                    con diversos software del mercado haciéndolo una gran
                    elección para las diversas empresas ya sean nacionales o
                    internacionales.
                  </p>
                  <p className="text-text-general my-4 text-justify sm:text-left">
                    Algunos de los requerimientos específicos para este proyecto
                    fueron:
                  </p>
                  <ul className="text-text-general my-4 sm:text-left flex flex-col gap-2">
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Que el software organice los tiempos del proyecto y así
                        tener un mejor control de versiones del proyecto.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        El software ayúdenos a planificar con flexibilidad las
                        actividades y tareas en general del proyecto.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Que el software ayude a la toma de decisiones con las
                        técnicas de B.I.
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
                        El software proporcionará una vista en general de todas
                        las actividades del proyecto.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        El software mejora el rendimiento del equipo con datos
                        visuales en tiempo real y así que el equipo puede
                        emplear.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Que el software ayude a administrar diferentes proyectos
                        existentes en una empresa para el control y la gestión
                        de los mismos.
                      </p>
                    </li>
                  </ul>
                  <div className="flex flex-col justify-center my-8">
                    <img
                      src="asistProy.png"
                      alt="img_asistProy"
                      className="w-full sm:w-2/3 shadow-2xl shadow-text-purple/50 flex justify-center mx-auto rounded-lg"
                    />
                    <p className="flex justify-center text-xs text-text-white-gray">
                      p. Pagina de Inicio de acceso ASIST-PROY
                    </p>
                  </div>
                  <div className="flex flex-col justify-center my-8">
                    <img
                      src="asistProy_reporte.png"
                      alt="img_asistProy_reporte"
                      className="w-full sm:w-2/3 shadow-2xl shadow-text-purple/50 flex justify-center mx-auto rounded-lg"
                    />
                    <p className="flex justify-center text-xs text-text-white-gray">
                      p. Reporte final en excel, tableu y power bi.
                    </p>
                  </div>
                  <p className="text-text-general my-8">
                    Este proyecto desarrollado en su totalidad por RAXE-TECH y
                    fue dirigido para las empresas que buscan una solución a la
                    gestión de proyectos de forma eficiente y rentable, con el
                    fin de mejorar la productividad y la toma de decisiones en
                    el entorno empresarial.
                  </p>
                  <p className="text-text-general my-8">
                    Con este proyecto se busca que las empresas opten por el uso
                    de administradores de proyectos para tener un mejor control
                    y gestión de sus procesos dentro de un proyecto y así
                    evitar:
                  </p>
                  <ul className="text-text-general my-4 sm:text-left flex flex-col gap-2">
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>Falta de organización.</p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>Déficits en los costes de proyecto.</p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        No contar con un control del equipo de trabajo
                        involucrado en el proyecto.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Falta de control en las tareas a realizar en el día a
                        día.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>Asignación inadecuada de recursos.</p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Incumplimiento de fechas de entrega de proyectos
                        (retardos).
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Poca integración para solución de problemas existentes
                        en el proyecto.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>Desventaja competitiva.</p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>Pérdida de oportunidades de toma de decisiones.</p>
                    </li>
                  </ul>
                  <p className="text-text-general my-8">
                    Más información sobre este proyecto en los siguientes
                    enlaces:
                  </p>
                  <div className="flex justify-center space-x-14">
                    <div className="inline-block group">
                      <a
                        href="ASIST-PROY_doc.pdf"
                        download={"ASIST-PROY_doc.pdf"}
                      >
                        <div className="flex justify-center">
                          <SlDoc className="text-3xl text-text-purple group-hover:text-purple-400 transition-all duration-200 ease-in-out" />
                        </div>
                        <h1 className="text-text-purple text-sm mt-2 group-hover:text-purple-400 transition-all duration-200 ease-in-out">
                          ASIST-PROY.pdf
                        </h1>
                      </a>
                    </div>
                    <div className="inline-block group">
                      <a
                        href="ASIST-PROY_presentacion.pptx"
                        download={"ASIST-PROY_presentacion.pptx"}
                        className="flex flex-col"
                      >
                        <div className="flex justify-center">
                          <SlDoc className="text-3xl text-text-purple group-hover:text-purple-400 transition-all duration-200 ease-in-out" />
                        </div>
                        <h1 className="text-text-purple text-sm mt-2 group-hover:text-purple-400 transition-all duration-200 ease-in-out">
                          ASIST-PROY_presentacion.pptx
                        </h1>
                      </a>
                    </div>
                  </div>
                  <p className="text-text-general tracking-wide my-8">
                    Algunas de las tecnologías utilizadas en este proyecto son:
                  </p>
                  <div className="flex flex-wrap gap-4 mt-5">
                    <Languajes title="Visual Basic .NET" />
                    <Languajes title="Excel Macros" />
                    <Languajes title="Power BI" />
                    <Languajes title="Tableu" />
                    <Languajes title="MySQL" />
                    <Languajes title="Visual Studio" />
                    <Languajes title="Git / Github" />
                    <Languajes title="Google Drive" />
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

export default PageProjectFour;
