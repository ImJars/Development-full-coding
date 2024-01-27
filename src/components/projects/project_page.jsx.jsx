import React from "react";
import styled from "styled-components";
import Wraped from "../wraped";

const ProjectSection = styled.section`
  display: block;
  .content-wrapped {
    max-width: 1152px;
  }
`;
const BackgroundSection = styled.div`
  width: 100%;
  height:100%;
  background: rgb(12, 18, 34);
  background: linear-gradient(
    0deg,
    rgba(12, 18, 34, 1) 0%,
    rgba(15, 23, 42, 1) 40%,
    rgba(15, 23, 42, 1) 50%,
    rgba(15, 23, 42, 1) 60%,
    rgba(12, 18, 34, 1) 100%
  );
`;
const TitleSection = styled.div`
  .Title-Name {
    font-size: clamp(1.875rem, 0.3125rem + 6.25vw, 4.5rem);
  }
  .Subtitle-Text {
    font-size: clamp(0.875rem, 0.503rem + 1.4881vw, 1.5rem);
  }
  .dynamic-text {
    font-size: clamp(1.125rem, 0.6539rem + 2.2167vw, 2.25rem);
  }
`;

function PageProject() {
  return (
    <>
      <BackgroundSection className="static">
        <img className="static min-w-full object-cover bg-repeat w-full h-full stroke-text-purple fill-text-purple" src="background.svg" alt="" />
        <section className="absolute top-0 w-full h-full text-white">
          <ProjectSection>
            <div className="content-wrapped block mx-auto pt-40">
              <TitleSection className="mx-5 sm:mx-0 flex justify-center">
                <h1 className="Title-Name text-text-white-gray text-7xl font-bold tracking-wide">
                  Jarsdev Website
                </h1>
              </TitleSection>
            </div>
          </ProjectSection>
        </section>
      </BackgroundSection>
    </>
  );
}

export default PageProject;
