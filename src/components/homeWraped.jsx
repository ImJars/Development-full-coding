import React from "react";
import styled from "styled-components";

const HomeResponsiveWraped = styled.section`
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

function HomeWraped({ children }) {
  return (
    <>
      <HomeResponsiveWraped className="text-white font-poppins">
        {children}
      </HomeResponsiveWraped>
    </>
  );
}

export default HomeWraped;
