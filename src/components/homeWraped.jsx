import React from "react";
import styled from "styled-components";

const HomeResponsiveWraped = styled.section`
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
    z-index: -10;
    opacity: 0.3199;
  }
`;

function HomeWraped({ children }) {
  return (
    <>
      <HomeResponsiveWraped className="text-white font-poppins">
        <div className="background-cuad" />
        {children}
      </HomeResponsiveWraped>
    </>
  );
}

export default HomeWraped;
