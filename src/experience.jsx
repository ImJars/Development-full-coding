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
                  <Content
                    display={true}
                    title={"Freelance"}
                    company={"1928.id"}
                    date={"(Jun 2022 - Jul 2022)"}
                    description={
                      <ol>
                        <List
                          description={`Created main site navigation (menu, footer, mobile drawer) using Tailwind CSS.`}
                        />
                        <List
                          description={`Created product tiles, promotion cards, and other small components using Tailwind CSS.`}
                        />
                      </ol>
                    }
                    company_2={"Hemat.id"}
                    date_2={"(Jun 2022 - Jul 2022)"}
                    description_2={
                      <ol>
                        <List
                          description={`Improving the UI & UX of Femicam's desktop application based on React Electron and Material UI.`}
                        />
                        <List
                          description={`Designing and creating React components for the application dashboard.`}
                        />
                      </ol>
                    }
                  />
                  <Content
                    title={"Professional Work"}
                    company={"Ciptaloka"}
                    date={"(Jul 2016 - Jun 2021)"}
                    description={
                      <>
                        <div
                          className="space-y-6"
                        >
                          <p>
                            My first and (currently) only professional work is
                            at Ciptaloka. At Ciptaloka, I do many types of work,
                            such as developing desktop, mobile, and web
                            applications.
                          </p>
                          <p>
                            However, my work there is primarily focused on web
                            development, and around the last 2 years I worked
                            there, I have learned a lot about React,
                            particularly when creating the v2 design editor.
                          </p>
                          <div
                            className="space-y-4"
                          >
                            <h1>
                              Here are the details of the work I did at
                              Ciptaloka:
                            </h1>
                            <ol>
                              <List
                                description={`Created the v2 design editor layout using React.`}
                              />
                              <List
                                description={`Redesigned the website's front page from vanilla CSS to use Foundation 6.`}
                              />
                              <List
                                description={`Developed interactive UI on mobile editor using Framework7, Backbone.js, and Marionette.js.`}
                              />
                              <List
                                description={`Created e-mail marketing design templates using Foundation for E-mails.`}
                              />
                              <List
                                description={`Customized the blog.ciptaloka.com WordPress theme to match the looks and feels of the main site.`}
                              />
                            </ol>
                          </div>
                        </div>
                      </>
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
