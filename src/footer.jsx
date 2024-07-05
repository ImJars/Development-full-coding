import React from "react";
import styled from "styled-components";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import FooterLink from "./components/footer/footerLinks";
import FooterIcons from "./components/footer/footerIcons";

const FooterSection = styled.section`
  display: block;
  .content-wrapped {
    max-width: 1152px;
  }
`;

function Footer() {
  return (
    <>
      <footer className="text-white font-sans bg-table-color">
        <FooterSection className="">
          <div className="content-wrapped block mx-auto">
            <div className="mx-4 xl:mx-0">
              <div className="flex justify-between sm:space-x-10">
                <div className="w-1/2 sm:w-1/3 flex justify-start items-center">
                  <div>
                    <a href="/" className="flex items-center">
                      <div className="flex sm:text-xl font-bold space-x-1 ">
                        <div className="block">
                          <div className="font-outfit flex text-2xl items-center">
                            <img src="logo_web.png" alt="logo_web" className="w-28 h-28" />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="w-1/2 sm:w-2/3 pt-10 shadow-table-color shadow-2xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div>
                      <FooterLink text={"Inicio"} link={"/"} />
                      <FooterLink text={"Proyectos"} link={"/projects"} />
                      <FooterLink text={"Blog"} link={"/blog"} />
                      <FooterLink text={"T.I.L."} link={"/til"} />
                    </div>
                    <div>
                      <FooterLink text={"Habilidades "} link={"/skills"} />
                      <FooterLink text={"Experiencia"} link={"/experience"} />
                      <FooterLink text={"Estudio"} link={"/studio"} />
                      <FooterLink text={"Contacto"} link={"/contact"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between pb-10 pt-5 mt-5 border-t border-opacity-20 border-text-white-gray">
              <div className="flex justify-center sm:justify-end space-x-6 text-2xl mb-4 sm:mb-0 mx-4 xl:mx-0">
                <FooterIcons
                  classNames={""}
                  link={"https://github.com/ImJars"}
                  children={<FiGithub />}
                />
                <FooterIcons
                  classNames={""}
                  link={"https://www.linkedin.com/in/imjars/"}
                  children={<FiLinkedin />}
                />
                <FooterIcons
                  classNames={""}
                  link={"https://www.instagram.com/jars.little/"}
                  children={<FiInstagram />}
                />
                <FooterIcons
                  classNames={"text-3xl"}
                  link={"https://x.com/Im_Jars"}
                  children={"𝕏"}
                />
              </div>
              <div className="flex justify-center items-center mx-4 xl:mx-0">
                <div>
                  <h1 className="text-xs text-text-white-gray">
                    © Angel Ramirez {new Date().getFullYear()}, Todos los
                    derechos reservados.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </FooterSection>
      </footer>
    </>
  );
}

export default Footer;
