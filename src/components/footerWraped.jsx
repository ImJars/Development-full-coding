import React from "react";
import styled from "styled-components";

const FooterContentWraped = styled.section`
  @media (max-width: 639px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 640px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

function FooterWraped({ children }) {
  return (
    <>
      <FooterContentWraped className="w-full">{children}</FooterContentWraped>
    </>
  );
}

export default FooterWraped;
