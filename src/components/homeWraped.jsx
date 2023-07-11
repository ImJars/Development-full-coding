import React from 'react'
import styled from "styled-components";

const HomeResponsiveWraped = styled.section`
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

function HomeWraped({ children }) {
    return (
        <>
            <HomeResponsiveWraped>
                { children }
            </HomeResponsiveWraped>
        </>
    )
}

export default HomeWraped
