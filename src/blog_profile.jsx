import React from "react";
import { MdVerified } from "react-icons/md";
import Card from "./components/blog/card";
import PinedCard from "./components/blog/pined-card";
import Wraped from "./components/wraped";
import Footter from "./footer";
import { motion } from "framer-motion";
import styled from "styled-components";
import FooterWraped from "./components/footerWraped";

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
            <section className="content-wrapped mx-auto flex justify-between">
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
              <div>
                <div>
                  <div>
                    <h1>Software developer/Programmer/Software engineer</h1>
                  </div>
                  <div>
                    <h1>Pachuca de Soto, Hidalgo</h1>
                  </div>
                  <div>
                    <h1>En una relación con Paulette Hernandez</h1>
                  </div>
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
