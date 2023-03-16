import React from "react";

function Index() {
  return (
    <>
      <div className="-mt-48 hidden lg:block">
        <div className="sticky top-24 z-[901] w-64 xl:w-[272px]">
          <nav
            className="bg-table-color border border-text-general border-opacity-10 
                                        rounded-xl"
          >
            <div className="py-3 px-5 border-b border-text-general border-opacity-10">
              <h1 className="text-text-white-gray text-sm font-bold tracking-wide">
                Table of Contents
              </h1>
            </div>
            <div className="p-3 py-4">
              <ol className="flex flex-col gap-2 text-text-general text-sm">
                <li className="px-2 text-text-white-gray font-semibold">
                  Front-End Developer
                </li>
                <li className="px-5">TypeScript</li>
                <li className="px-5">React</li>
                <li className="px-5">Tailwind CSS</li>
                <li className="px-5">Framer Motion</li>
                <li className="px-5">Next.js</li>
                <li className="px-2 text-text-white-gray font-semibold">
                  UI/UX Designer
                </li>
                <li className="px-2 text-text-white-gray font-semibold">
                  Detail and Summary
                </li>
                <li className="px-5">Programming Languages</li>
                <li className="px-5">Technologies</li>
                <li className="px-5">Softwares and Tools</li>
              </ol>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Index;
