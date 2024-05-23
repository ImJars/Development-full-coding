import React from "react";
import { FaFolderOpen } from "react-icons/fa";
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
      <a href={projectLink}>
        <div
          className='border bg-slate-900 hover:bg-opacity-80 hover:-translate-y-1 transition-all duration-300 ease-in-out border-text-general border-opacity-20 rounded-xl font-poppins'
        >
          <div className="p-5">
            <div>
              <div className="flex flex-col items-center space-x-4">
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FaFolderOpen className="text-3xl text-text-white-gray" />
                    <div className="flex items-center">
                      <h1 className="text-text-white-gray font-bold text-xl">
                        {title}
                      </h1>
                    </div>
                  </div>
                  <div>
                    <FaExternalLinkAlt className="text-base text-text-white-gray" />
                  </div>
                </div>
                <p className="w-full flex justify-start text-sm mt-3 text-text-general">
                  {description}
                </p>
                <div className="w-full flex justify-end mt-5">
                  <ul className="flex space-x-2 text-xs text-text-purple text-opacity-80">
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
