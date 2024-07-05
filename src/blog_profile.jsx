import React, { useState } from "react";
import { MdVerified, MdOutlineWorkOutline } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { FaRegHeart, FaEye } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import SectionProfile from "./components/blog/sectionProfile";

import HomeWraped from "./components/homeWraped";
import Footter from "./footer";
import styled from "styled-components";
import FooterWraped from "./components/footerWraped";
import Status from "./components/blog/status";
import Detalles from "./components/blog/detalles";
import Fotos from "./components/blog/fotos";
import DonationButton from "./components/blog/donation_button";

const BlogSection = styled.section`
  display: block;
  max-width: 1300px;
  margin: auto;
  padding-top: 6rem;
  padding-bottom: 6rem;
  --tw-border-opacity: 0.1;
  border-width: 1px;
  border-color: rgb(144 158 178 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(15 23 42 / var(--tw-bg-opacity));
  border-radius: 0.5rem /* 8px */;
  .content-wrapped {
    max-width: 1152px;
  }
  .profile__design {
    border-width: 5px;
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

function BlogProfile() {
  const [active, setActive] = useState(false);

  return (
    <>
      <HomeWraped>
        <section className="w-full h-full text-white text-text mb-14">
          <BlogSection>
            {/* Section del Banner */}
            <section className="content-wrapped mx-auto">
              <div>
                <img src="banner.jpg" alt="" className="rounded-lg" />
              </div>
            </section>
            {/* Imagen de Perfil e Informacion principal*/}
            <section className="content-wrapped mx-auto sm:flex sm:justify-between -mb-10">
              <div className="flex items-center space-x-2 sm:space-x-2 md:space-x-4 lg:space-x-10 transform -translate-y-8 sm:-translate-y-8 md:-translate-y-12 translate-x-1 sm:translate-x-4 md:translate-x-6 lg:translate-x-8">
                <div>
                  <img
                    src="perfil.jpg"
                    alt=""
                    className="profile__design w-28 h-28 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-44 lg:h-44 rounded-full border-4 border-secondary"
                  />
                </div>
                <div>
                  <div className="mt-8 sm:mt-10 flex items-center space-x-1 sm:space-x-2">
                    <h1 className="text-xl sm:text-lg md:text-2xl lg:text-3xl font-bold font-sans">
                      Angel Ramirez
                    </h1>
                    <MdVerified className="text-text-blue text-xs sm:text-sm md:text-xl" />
                  </div>
                  <div className="mt-0 lg:mt-1">
                    <h2 className="font-sans text-text-general text-xs sm:text-sm md:text-base">
                      @Im_Jars
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex justify-between sm:justify-start font-sans text-text- -mt-4 sm:mt-5 md:mt-4 lg:mt-8 space-x-0 sm:space-x-4 mx-4">
                <div className="order-2 sm:order-1 flex items-center sm:items-start">
                  <DonationButton />
                </div>
                <div className="text-xs lg:text-base order-1 sm:order-2">
                  <div className="flex items-center space-x-1">
                    <MdOutlineWorkOutline className="font-semibold" />
                    <h1>Software developer/Programmer/Software engineer</h1>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiMapPin />
                    <h1>Pachuca de Soto, Hidalgo</h1>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaRegHeart />
                    <h1>En una relación con Paulette Hernandez</h1>
                  </div>
                </div>
              </div>
            </section>
            <section className="content-wrapped mx-auto rounded-lg font-sans mt-16 sm:mt-10 md:mt-0">
              <div className="flex flex-col sm:flex-row gap-4 mx-4 xl:mx-0">
                <div className="w-full sm:w-7/12 flex flex-col h-full">
                  <SectionProfile classNames={"py-3 sm:py-5"}>
                    <h1 className="font-bold text-xl mb-1">Publicaciones</h1>
                    <div className="border-t border-opacity-20 border-text-general" />
                    <button
                      onClick={() => setActive(!active)}
                      className="w-full flex sm:text-text-general items-center space-x-1 justify-center mt-1 -mb-2 pointer-events-auto sm:pointer-events-none text-text-blue focus:text-text-blue no-seleccionable"
                    >
                      <FaEye className="mt-1" />
                      <h2 className="mt-1 text-sm">
                        Vista de{" "}
                        <span>{active ? "Informacion" : "Publicaciones"}</span>
                      </h2>
                      <HiCursorClick className="mt-1 block sm:hidden" />
                    </button>
                  </SectionProfile>

                  {/* // AQUI COMIENZAN LOS ESTADOS // */}

                  <div
                    className={`flex flex-col ${
                      active ? "hidden sm:block" : "block"
                    }`}
                  >
                    <SectionProfile classNames={"py-3 sm:py-5 mt-4"}>
                      <Status
                        idContador={"postOne"}
                        date={"10 May. 2024"}
                        text={
                          "He conocido una de las mejores librerías para los amantes de TailwindCSS como yo, se llama AceternityUI y tiene muchos componentes que te pueden ayudar a mejorar tu diseño web, además que son muy fáciles de implementar y muy interactivos con tu web. Lo estaré probando para algún proyecto y veremos que tal va. 😲​"
                        }
                      >
                        <img src="aceternity.jpg" className="rounded-lg" />
                      </Status>
                    </SectionProfile>
                    <SectionProfile classNames={"py-5 mt-4"}>
                      <Status
                        idContador={"postTwo"}
                        text={
                          "'Una palabra de aliento puede ser suficiente para despertar la motivación de alguien para continuar con un desafío difícil'"
                        }
                        date={"01 May. 2024"}
                      />
                    </SectionProfile>
                    <SectionProfile classNames={"py-5 mt-4"}>
                      <Status
                        idContador={"postThree"}
                        date={"28 Abr. 2024"}
                        text={"¡Contratado! JAJAJA"}
                      >
                        <img src="meme_1.jpg" className="rounded-lg" />
                      </Status>
                    </SectionProfile>
                  </div>
                </div>
                <div
                  className={`w-full sm:w-5/12 flex flex-col h-full ${
                    active ? "block" : "hidden sm:block"
                  }`}
                >
                  <SectionProfile classNames={"pt-4"}>
                    <Detalles />
                  </SectionProfile>
                  <SectionProfile classNames={"pt-4 mt-4"}>
                    <Fotos />
                  </SectionProfile>
                </div>
              </div>
            </section>
          </BlogSection>
        </section>
        <FooterWraped>
          <Footter />
        </FooterWraped>
      </HomeWraped>
    </>
  );
}

export default BlogProfile;
