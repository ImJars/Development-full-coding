import React from "react";
import IndexStudio from "./components/studio/indexStudio";
import TableComputer from "./components/studio/tableComputer";
import TablePrimary from "./components/studio/tablePrimary";
import Wraped from "./components/wraped";
import Footer from "./footer";

function Studio() {
  return (
    <>
      <section className="bg-primary w-full h-full text-white">
        <Wraped>
          <div className="pb-20">
            <h1 className="text-text-blue text-2xl tracking-wide pt-40 font-bold">
              Work
            </h1>
            <h2 className="text-text-white-gray text-7xl font-bold tracking-wide">
              Studio
            </h2>
            <h3 className="w-2/3 text-text-general text-2xl tracking-wide mt-8">
              A work-from-home workspace that allows me to efficiently complete
              most tasks.
            </h3>
          </div>
          <div className="flex justify-between">
            <div className="w-2/3">
              <div className="border-l pl-24 border-text-general border-opacity-20 pb-96">
                <div>
                  <div className="border p-32 border-text-general border-opacity-20 mb-10" />
                  <p className="text-text-general tracking-wide">
                    One of the most important things for me when working from
                    home is having the right tools. So, let's start with my main
                    device - the computer.
                  </p>
                </div>
                <div className="mt-10">
                  <h1 className="text-4xl font-bold text-text-white-gray tracking-wide mb-5">
                    Computer
                  </h1>
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
                </div>
                <div className="mt-10">
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
                  <h1
                    className="text-2xl font-bold text-text-white-gray tracking-wide mt-5"
                  >
                    Primary
                  </h1>
                  <TablePrimary />
                </div>
              </div>
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
          <div className="mt-20">
            <Footer />
          </div>
        </Wraped>
      </section>
    </>
  );
}

export default Studio;
