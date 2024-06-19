import React from "react";
import { FaFolderOpen, FaFolder } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

function SoftwareProject({
  projectLink,
  title,
  description,
  skill_1,
  skill_2,
  skill_3,
  skill_4,
}) {
  return (
    <>
      <a href={projectLink} className="group">
        <div className="border bg-primary/25 backdrop-blur-sm group-hover:bg-table_activate group-hover:bg-opacity-80 group-hover:-translate-y-1 group-hover:transition-all group-hover:duration-800 group-hover:ease-linear border-text-general border-opacity-25 rounded-2xl font-sans">
          <div className="p-4">
            <div>
              <div className="flex flex-col items-center space-x-4">
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <FaFolderOpen className="group-hover:opacity-100 opacity-0 ml-1.5 text-4xl text-text-white-gray group-hover:transition-all group-hover:duration-800 group-hover:ease-in-out absolute" />
                      <FaFolder className="group-hover:opacity-0 ml-1.5 text-3xl text-text-white-gray group-hover:transition-all group-hover:duration-800 group-hover:ease-in-out absolute" />
                    </div>
                    <div className="flex items-center">
                      <h1 className="ml-10 text-text-white-gray font-bold text-xl">
                        {title}
                      </h1>
                    </div>
                  </div>
                  <div>
                    <FaExternalLinkAlt className="text-base text-text-white-gray group-hover:text-text-purple group-hover:transition-all group-hover:duration-800 group-hover:ease-in-out" />
                  </div>
                </div>
                <p className="w-full flex justify-start text-sm mt-3 text-text-general">
                  {description}
                </p>
                <div className="w-full flex justify-end mt-5">
                  <ul className="flex space-x-2 text-xs text-text-purple">
                    <li>{skill_1}</li>
                    <h1 className="text-xs opacity-50 cursor-default text-text-white-gray">
                      &#8226;
                    </h1>
                    <li>{skill_2}</li>
                    <h1 className="text-xs opacity-50 cursor-default text-text-white-gray">
                      &#8226;
                    </h1>
                    <li>{skill_3}</li>
                    <h1 className="text-xs opacity-50 cursor-default text-text-white-gray">
                      &#8226;
                    </h1>
                    <li>{skill_4}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

export default SoftwareProject;
