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
      <footer className="bg-primary text-white font-poppins">
        <FooterSection className="mx-1 sm:mx-0">
          <div className="content-wrapped block mx-auto">
            <div>
              <div>
                <h1 className="text-2xl font-bold">Contacto</h1>
                <div>
                  <h1 className="text-text-white-gray text-sm mt-2">
                    Si desea ponerse en contacto conmigo, puede enviarme un
                    correo electrónico a <a href="mailto:" />
                  </h1>
                </div>
              </div>
              <div className="flex justify-between space-x-10 mt-8">
                <div className="w-1/3">
                  <div>
                    <a href="/" className="flex items-center">
                      <div className="flex sm:text-xl font-bold space-x-1 ">
                        <div className=" hidden sm:block">
                          <div className="flex">
                            <h1>&nbsp;Jars</h1>
                            <h2 className="text-text-purple">dev</h2>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="w-2/3">
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div>
                      <FooterLink text={"Home"} link={"/"} />
                      <FooterLink text={"Projects"} link={"/projects"} />
                      <FooterLink text={"Blog"} link={"/blog"} />
                      <FooterLink text={"T.I.L."} link={"/til"} />
                    </div>
                    <div>
                      <FooterLink text={"Skills & Tools"} link={"/skills"} />
                      <FooterLink text={"Experience"} link={"/experience"} />
                      <FooterLink text={"Studio"} link={"/studio"} />
                      <FooterLink text={"Contact"} link={"/contact"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary flex justify-between pb-10 pt-32">
              <div className="flex justify-end space-x-5 text-2xl">
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
                  classNames={""}
                  link={"https://twitter.com/Im_Jars"}
                  children={"𝕏"}
                />
              </div>
              <div className="flex justify-center items-center">
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
