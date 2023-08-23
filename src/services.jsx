import React from "react";
import Wraped from "./components/wraped";
import IndexStudio from "./components/studio/indexStudio";
import styled from "styled-components";
import TableComputer from "./components/studio/tableComputer";
import TablePrimary from "./components/studio/tablePrimary";

const ServicesSection = styled.section`
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

function Services() {
  return (
    <>
      <Wraped>
        <section className="bg-primary w-full h-full text-white">
          <div>
            <ServicesSection className="pb-10 sm:pb-20 pt-40">
              <div className="content-wrapped block mx-auto">
                <TitleSection className="mx-5 sm:mx-0">
                  <h1 className="Subtitle-Text text-text-blue text-2xl tracking-wide font-bold">
                    Work
                  </h1>
                  <h2 className="Title-Name text-text-white-gray text-7xl font-bold tracking-wide">
                    Services
                  </h2>
                  <h3 className="Subtitle-Text w-full sm:w-2/3 text-text-general mt-4">
                    A work-from-home workspace that allows me to efficiently
                    complete most tasks.
                  </h3>
                </TitleSection>
              </div>
            </ServicesSection>
            <ServicesSection>
              <div className="content-wrapped mx-auto flex space-x-14">
                <div className="mx-5 sm:mx-0 border-l pl-24 border-text-general border-opacity-10">
                  <p className="text-text-general tracking-wide">
                    One of the most important things for me when working from
                    home is having the right tools. So, let's start with my main
                    device - the computer.
                  </p>
                  <TableComputer />
                  <p className="text-text-general">
                    This computer may not have the latest specs, but it runs
                    incredibly fast and smooth! It's perfect for web
                    development, even for larger or heavier projects like React
                    Electron.
                  </p>
                  <p className="text-text-general mt-5">
                    The 32GB of RAM also ensures that multitasking is a breeze!
                  </p>
                  <h1 className="text-4xl font-bold text-text-white-gray tracking-wide mb-5">
                    Display
                  </h1>
                  <p className="text-text-general">
                    The dual monitor setup maximizes my web development
                    workflow. I can code on one screen while previewing live on
                    the other — no more Alt + Tab necessary for faster, more
                    efficient work!
                  </p>
                  <p className="text-text-general mt-5">
                    Need a website with extra wide breakpoint? I've got you
                    covered with my ultrawide monitor.
                  </p>
                  <h1 className="text-2xl font-bold text-text-white-gray tracking-wide mt-5">
                    Primary
                  </h1>
                  <TablePrimary />
                </div>
                <IndexStudio
                  subtitle_1={"Computer"}
                  subtitle_2={"Display"}
                  description_1={"Primary"}
                  description_2={"Secondary"}
                  subtitle_3={"Peripherals"}
                  subtitle_4={"Conferencing Devices"}
                  subtitle_5={"Others"}
                />
              </div>
            </ServicesSection>
          </div>
        </section>
      </Wraped>
    </>
  );
}

export default Services;
