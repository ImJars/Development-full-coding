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

function PageProjectThree() {
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
                  Garden WEB
                </h1>
              </TitleSection>
              <div className="border-l pb-28 md:pl-24 border-text-general border-opacity-20">
                <div className="mx-4">
                  <p className="text-text-general my-8 text-left">
                    La creación de una plataforma administrativa web para el
                    Colegio Taxhuada la cual administra los procesos más
                    relevantes para el control de la información, de las
                    finanzas, personal, eventos, alumnos, padres de familia y
                    con base en esto se toman decisiones importantes, así mismo
                    brindar una experiencia a los padres de familia y/o tutores
                    diferente y de calidad que la competencia en el ámbito del
                    cuidado de los niños; brindando información importante y que
                    los tutores desean conocer de los niños como es su
                    comportamiento, el conocimiento de donde se encuentran como
                    saber el ingreso y la salida de los niños.
                  </p>
                  <p className="text-text-general my-4 text-justify sm:text-left">
                    Algunos de los requerimientos específicos para este proyecto
                    fueron:
                  </p>
                  <ul className="text-text-general my-4 sm:text-left flex flex-col gap-2">
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Una plataforma administrativa web con Front-End y
                        Back-End.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Jerarquías entre usuarios con base en una tabla
                        usuarios.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Control de acceso con base en un usuario y contraseña.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>Base de datos con base en los requerimientos.</p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Un módulo para dar de alta, niños, tutores y educadores.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Un espacio para visualizar la información de cada niño.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Implementar un sistema que administre pagos y gastos.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>Un módulo para efectuar los pagos de colegiatura.</p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>
                        Un módulo para visualizar y subir los eventos próximos.
                      </p>
                    </li>
                    <li className="flex space-x-2">
                      <span className="text-text-purple">&#8226;</span>
                      <p>Módulo para visualizar y subir el menú semanal.</p>
                    </li>
                  </ul>
                  <div className="flex flex-col justify-center my-8">
                    <img
                      src="gardenWeb.jpg"
                      alt="img_garden_web"
                      className="w-full sm:w-2/3 shadow-2xl shadow-text-purple/50 flex justify-center mx-auto rounded-lg"
                    />
                    <p className="flex justify-center text-xs text-text-white-gray">
                      p. Pagina de Administrador v1.0
                    </p>
                  </div>
                  <p className="text-text-general my-8">
                    Se benefició tanto la optimización de tiempos de respuesta
                    para conocer el estatus tanto general como cualquier área en
                    específico existente en el colegio, para brindar un mejor
                    control financiero de pagos de colegiaturas y gastos
                    existentes, teniendo a la mano esta
                    información recabada de la base de datos.
                  </p>
                  <p className="text-text-general my-4">
                    Además de ello se pudo brindar una experiencia de usuario
                    (cliente) personalizada y de calidad, brindando información
                    de los niños, eventos existentes en el colegio, control de
                    conocimiento de comidas y seguridad en el ingreso y salida
                    de los niños.
                  </p>
                  <p className="text-text-general tracking-wide my-8">
                    Algunas de las tecnologías utilizadas en este proyecto son:
                  </p>
                  <div className="flex flex-wrap gap-4 mt-5">
                    <Languajes title="HTML5" />
                    <Languajes title="CSS" />
                    <Languajes title="JavaScript" />
                    <Languajes title="PHP" />
                    <Languajes title="MySQL" />
                    <Languajes title="VSCode" />
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

export default PageProjectThree;
