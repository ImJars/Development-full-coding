import React from "react";
import Index from "./components/experience";
import Content from "./components/experience/content";
import List from "./components/experience/list";
import Wraped from "./components/wraped";
import Footer from "./footer";

function Experience() {
  return (
    <>
      <section className="bg-primary w-full h-full text-white">
        <Wraped>
          <div className="pb-20">
            <h1 className="text-text-blue text-2xl tracking-wide pt-40 font-bold">
              Work
            </h1>
            <h2 className="text-text-white-gray text-7xl font-bold tracking-wide">
              Experience
            </h2>
            <h3 className="w-2/3 text-text-general text-2xl tracking-wide mt-8">
              All about my freelance, self-employed, and professional work
              experience.
            </h3>
          </div>
          <div className="flex justify-between">
            <div className="w-2/3 ">
              <div className="border-l pl-24 border-text-general border-opacity-20 pb-96">
                <div
                  className="border-b pb-14 border-text-general border-opacity-20
                                            text-text-general text-base space-y-6"
                >
                  <h1>
                    I started my professional career as a web developer around
                    2016. In 2021, I resigned from my job to focus on completing
                    college matters while taking on some freelance projects.
                  </h1>
                </div>
                <div>
                    <Content 
                        title={"Self-employed"}
                        company={"Hemat.id"}
                        date={"(Jun 2022 - Jul 2022)"}
                        description={
                            <ol>
                              <List 
                                description={`Improving the UI & UX of Femicam's desktop application based on React Electron and Material UI.`}
                              />
                              <List 
                                description={`Designing and creating React components for the application dashboard.`}
                              />
                              <List 
                                description={`Creating an image editor using Sharp.js.`}
                              />
                            </ol>
                        }
                    />
                </div>
              </div>
            </div>
            <Index
              subtitle_1={"Self-Employed"}
              subtitle_2={"Freelance"}
              subtitle_3={"Professional Work"}
              subtitle_4={"What They Say"}
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

export default Experience;
