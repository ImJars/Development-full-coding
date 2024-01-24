import React, { useState } from "react";
import { FaFolderOpen } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

function SoftwareProject() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="border bg-card hover:bg-opacity-80 hover:-translate-y-1 transition-all duration-300 ease-in-out border-text-general border-opacity-10 rounded-xl font-poppins">
        <div className="p-5">
          <div>
            <div className="flex flex-col items-center space-x-4">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <FaFolderOpen className="text-3xl text-text-white-gray" />
                  <h1 className="text-text-white-gray font-bold text-lg">
                    Jarsdev Website
                  </h1>
                </div>
                <div>
                  <a href="#">
                    <FiGithub className="text-xl text-text-white-gray" />
                  </a>
                </div>
              </div>
              <p className="w-full flex justify-start text-sm mt-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus animi perferendis beatae corporis nesciunt commodi
                quibusdam natus esse odio a ratione sint error, aliquam iure
                unde laudantium consequuntur veritatis quam?
              </p>
              {
                active ? (
                  <div className="w-full flex justify-start text-sm mt-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus animi perferendis beatae corporis nesciunt commodi
                    quibusdam natus esse odio a ratione sint error, aliquam iure
                    unde laudantium consequuntur veritatis quam?
                  </div>
                ) : null
              }
              <div className="w-full flex justify-end mt-5">
                <ul className="flex space-x-2 text-xs text-text-general">
                  <li>VS Code</li>
                  <h1 className="text-xs opacity-50 cursor-default text-text-white-gray">
                    &#8226;
                  </h1>
                  <li>React</li>
                  <h1 className="text-xs opacity-50 cursor-default text-text-white-gray">
                    &#8226;
                  </h1>
                  <li>Tailwind</li>
                  <h1 className="text-xs opacity-50 cursor-default text-text-white-gray">
                    &#8226;
                  </h1>
                  <li>Node</li>
                </ul>
              </div>
              <div className="w-full flex justify-start">
                <button onClick={ () => setActive(!active) } className="bg-text-blue px-6 py-1 rounded-lg bg-opacity-25 text-sm">
                  { active ? "Cerrar" : "Ver más"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SoftwareProject;
