import React from "react";
import { FaFolderOpen } from "react-icons/fa";

function SoftwareProject() {
  return (
    <>
      <div className="border border-text-general border-opacity-10 rounded-xl">
        <div className="p-5">
          <div>
            <div className="flex flex-col items-center space-x-4">
              <div className="w-full flex justify-start items-center">
                <FaFolderOpen className="text-4xl text-text-white-gray" />
                <h1 className="text-text-white-gray font-bold text-lg">
                  Jarsdev Website
                </h1>
              </div>
              <p className="p-0">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus animi perferendis beatae corporis nesciunt commodi
                quibusdam natus esse odio a ratione sint error, aliquam iure
                unde laudantium consequuntur veritatis quam?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SoftwareProject;
