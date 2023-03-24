import React from "react";
import IndexStudio from "./components/studio/indexStudio";
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
                  <div className="relative overflow-x-auto rounded-lg border border-text-general border-opacity-10">
                    <table className="w-full">
                      <thead className=" text-text-white-gray text-sm font-bold tracking-wide">
                        <tr className="border-b border-text-general border-opacity-10">
                          <th scope="col" className="px-6 py-3 text-start">
                            Name
                          </th>
                          <th scope="col" className="px-6 py-3 text-start">
                            Detail
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-text-general text-sm tracking-wide font-normal">
                        <tr>
                          <td className="px-6 py-2">OS</td>
                          <td className="px-6 py-2">Windows 11 pro</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-2">Proccessor</td>
                          <td className="px-6 py-2">Intel Core i3-12100 12th Gen</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-2">RAM</td>
                          <td className="px-6 py-2">32GB 3600Mhz DDR4</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-2">GPU</td>
                          <td className="px-6 py-2">RTX 3060 12GB GDDR6</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-2">Storage</td>
                          <td className="px-6 py-2">VMe M.2 1TB Gen4x4</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
