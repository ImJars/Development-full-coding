import React from "react";
import styled from "styled-components";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import FooterLink from "./components/footer/footerLinks";

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
                <h1 className="text-white hover:text-gray-300 bg-primary">
                  hola
                </h1>
              </div>
              <div></div>
            </div>
          </div>
        </FooterSection>
      </footer>
    </>
  );
}

export default Footer;
