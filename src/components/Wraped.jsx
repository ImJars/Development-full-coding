import React from "react";
import styled from "styled-components";

const ContentWraped = styled.section`
  background: rgb(12, 18, 34);
  background: linear-gradient(
    0deg,
    rgba(12, 18, 34, 1) 0%,
    rgba(15, 23, 42, 1) 40%,
    rgba(15, 23, 42, 1) 50%,
    rgba(15, 23, 42, 1) 60%,
    rgba(12, 18, 34, 1) 100%
  );
  @media (max-width: 639px) {
    margin-left: auto;
    margin-right: auto;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  @media (min-width: 640px) {
    margin-left: auto;
    margin-right: auto;
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

function Wraped({ children }) {
  return (
    <>
      <ContentWraped className="text-white font-poppins">
      {/* <img src="background.svg" className="object-contain w-full h-screen relative" alt=""/> */}
        {/* <div className="absolute top-0 left-1/8 flex"> */}
        {children}
        {/* </div> */}
      </ContentWraped>
    </>
  );
}

export default Wraped;
