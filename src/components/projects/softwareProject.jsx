import React from "react";
import { FaFolderOpen } from "react-icons/fa";

function SoftwareProject() {
  return (
    <>
      <div className="border border-text-general border-opacity-10 rounded-xl font-poppins">
        <div className="p-5">
          <div>
            <div className="flex flex-col items-center space-x-4">
              <div className="w-full flex justify-start items-center space-x-2">
                <FaFolderOpen className="text-4xl text-text-white-gray" />
                <h1 className="text-text-white-gray font-bold text-lg">
                  Jarsdev Website
                </h1>
              </div>
              <p className="w-full flex justify-start text-sm mt-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus animi perferendis beatae corporis nesciunt commodi
                quibusdam natus esse odio a ratione sint error, aliquam iure
                unde laudantium consequuntur veritatis quam?
              </p>
              <div className="w-full flex justify-end mt-5">
                <ul className="flex space-x-2 text-xs text-text-general">
                  <li>
                    VS Code
                  </li>
                  <h1 className="text-xs opacity-50 cursor-default text-text-white-gray">&#8226;</h1>
                  <li>
                    React
                  </li>
                  <h1 className="text-xs opacity-50 cursor-default text-text-white-gray">&#8226;</h1>
                  <li>
                    Tailwind
                  </li>
                  <h1 className="text-xs opacity-50 cursor-default text-text-white-gray">&#8226;</h1>
                  <li>
                    Node
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SoftwareProject;
