import React from "react";
import styled from "styled-components";

const ContentWraped = styled.section`
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
      <ContentWraped className='bg-primary text-white font-poppins'>{children}</ContentWraped>
    </>
  );
}

export default Wraped;
