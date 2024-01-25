import React from "react";
import styled from "styled-components";
import Wraped from "../wraped";

const ProjectSection = styled.section`
  display: block;
  .content-wrapped {
    max-width: 1152px;
  }
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
      <Wraped>
        <section className="w-full h-screen text-white">
          <ProjectSection>
            <div className="content-wrapped block mx-auto">
              <TitleSection className="mx-5 sm:mx-0 flex justify-center pt-40">
                <h1 className="Title-Name text-text-white-gray text-7xl font-bold tracking-wide">
                  Jarsdev Website
                </h1>
              </TitleSection>
            </div>
          </ProjectSection>
        </section>
      </Wraped>
    </>
  );
}

export default PageProject;
