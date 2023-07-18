import React from "react";
import styled from "styled-components";

const FooterContentWraped = styled.section`
  @media (max-width: 639px) {
    margin-left: auto;
    margin-right: auto;
    padding-left: .5rem;
    padding-right: .5rem;
  }
  @media (min-width: 640px) {
    margin-left: auto;
    margin-right: auto;
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

function FooterWraped({ children }) {
  return (
    <>
      <FooterContentWraped className="mt-5 mx-auto">{children}</FooterContentWraped>
    </>
  );
}

export default FooterWraped;
