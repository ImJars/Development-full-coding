import React from "react";
import { MdVerified, MdOutlineWorkOutline } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { FaRegHeart, FaEye } from "react-icons/fa";
import SectionProfile from "./components/blog/sectionProfile";

import Card from "./components/blog/card";
import PinedCard from "./components/blog/pined-card";
import Wraped from "./components/wraped";
import Footter from "./footer";
import { motion } from "framer-motion";
import styled from "styled-components";
import FooterWraped from "./components/footerWraped";
import Status from "./components/blog/status";

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
  return (
    <>
      <Wraped>
        <section className="w-full h-full text-white text-text">
          <BlogSection>
            {/* Section del Banner */}
            <section className="content-wrapped mx-auto">
              <div>
                <img src="banner.jpg" alt="" className="rounded-lg" />
              </div>
            </section>
            {/* Imagen de Perfil e Informacion principal*/}
            <section className="content-wrapped mx-auto flex justify-between -mb-10">
              <div className="flex items-center space-x-10 transform -translate-y-12 translate-x-8">
                <div>
                  <img
                    src="perfil.jpg"
                    alt=""
                    className="profile__design w-44 h-44 rounded-full border-4 border-slate-900"
                  />
                </div>
                <div>
                  <div className="mt-10 flex items-center space-x-2">
                    <h1 className="text-3xl font-bold font-sans">
                      Angel Ramirez
                    </h1>
                    <MdVerified className="text-text-blue text-xl" />
                  </div>
                  <div className="mt-1">
                    <h2 className="font-sans text-text-general">@Im_Jars</h2>
                  </div>
                </div>
              </div>
              <div className="flex font-sans text-text-general mt-8">
                <div>
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
            <section className="content-wrapped mx-auto rounded-lg font-sans">
              <div className="flex gap-2">
                <div className="flex flex-col flex-1 gap-4">
                  <SectionProfile>
                    <h1 className="font-bold text-xl mb-1">
                      Publicaciones
                    </h1>
                    <div className="border-t border-opacity-20 border-text-general"/>
                    <div className="flex text-text-general items-center space-x-1 justify-center mt-1 -mb-2">
                      <FaEye className="mt-1"/>
                      <h2 className="mt-1 text-sm">Vista de Actividad</h2>
                    </div>
                  </SectionProfile>
                  <SectionProfile>
                    <Status 
                      text={'Nunca es demasiado tarde para empezar de nuevo. Nunca es demasiado tarde para ser feliz.'}
                      date={'28 May. 2024'}
                    />
                  </SectionProfile>
                </div>
                <div className="flex-1">
                  <SectionProfile>
                    <h1>Dos</h1>
                  </SectionProfile>
                </div>
              </div>
            </section>
          </BlogSection>
          <FooterWraped className="mt-20">
            <Footter />
          </FooterWraped>
        </section>
      </Wraped>
    </>
  );
}

export default BlogProfile;
