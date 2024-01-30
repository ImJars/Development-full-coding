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
  height: 2000px;
  background: rgb(12, 18, 34);
  background: linear-gradient(
    0deg,
    rgba(12, 18, 34, 1) 0%,
    rgba(15, 23, 42, 1) 40%,
    rgba(15, 23, 42, 1) 50%,
    rgba(15, 23, 42, 1) 60%,
    rgba(12, 18, 34, 1) 100%
  );
  mask-image: linear-gradient(to bottom, tranparent 50%, black 80%);
  -webkit-mask-image: linear-gradient(to bottom, tranparent 50%, black 80%);
  stroke-opacity: 0.5;
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
      <BackgroundSection className="relative">
        <div
          className="w-full h-full static inset-0 bg-[bottom_1px_center]"
          style={{ backgroundImage: "url('descarga.svg')" }}
        />
        <section className="absolute top-0 w-full h-full text-white">
          <ProjectSection>
            <div className="content-wrapped block mx-auto pt-32">
              <TitleSection className="mx-5 sm:mx-0 my-20 flex justify-center">
                <h1 className="Title-Name text-text-white-gray text-7xl font-bold tracking-wide">
                  Jarsdev Website
                </h1>
              </TitleSection>
              <div className="border-l pl-5 sm:pl-24 border-text-general border-opacity-20">
                <div>
                  <p className="text-text-general my-8">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, hic perspiciatis quidem natus quod temporibus maiores reprehenderit harum in sequi dolore non, quasi quas voluptate expedita deserunt ipsam sit. Eos.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ex nisi laborum reprehenderit ipsum porro, ratione cupiditate, aspernatur error necessitatibus omnis, earum at blanditiis ut eveniet? Quisquam, voluptatem. Non, magni!
                  </p>
                  <div className="flex justify-center my-8">
                    <img
                      src="legacyier-express.png"
                      alt="img_legacyier-express"
                      className="w-2/3 shadow-2xl shadow-text-purple/50"
                    />
                  </div>
                  <p className="text-text-general tracking-wide my-8">
                    One of the most important things for me when working from
                    home is having the right tools. So, let's start with my main
                    device - the computer.
                  </p>
                </div>
                <div className="mt-10">
                  <h1 className="text-4xl font-bold text-text-white-gray tracking-wide mb-5">
                    Computer
                  </h1>
                  <p className="text-text-general">
                    This computer may not have the latest specs, but it runs
                    incredibly fast and smooth! It's perfect for web
                    development, even for larger or heavier projects like React
                    Electron.
                  </p>
                  <p className="text-text-general mt-5">
                    The 32GB of RAM also ensures that multitasking is a breeze!
                  </p>
                </div>
                <div className="mt-10">
                  <div>
                    <h1 className="text-4xl font-bold text-text-white-gray tracking-wide mb-5">
                      Display
                    </h1>
                    <p className="text-text-general">
                      The dual monitor setup maximizes my web development
                      workflow. I can code on one screen while previewing live
                      on the other — no more Alt + Tab necessary for faster,
                      more efficient work!
                    </p>
                    <p className="text-text-general mt-5">
                      Need a website with extra wide breakpoint? I've got you
                      covered with my ultrawide monitor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ProjectSection>
        </section>
      </BackgroundSection>
    </>
  );
}

export default PageProject;
