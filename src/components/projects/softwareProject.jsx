import React from "react";
import { FaFolderOpen } from "react-icons/fa";

function SoftwareProject() {
  return (
    <>
      <div className="border border-text-general border-opacity-10 rounded-xl">
        <div className="p-5">
          <div>
            <div className="flex justify-center items-center space-x-4">
              <FaFolderOpen className="text-4xl text-text-white-gray" />
              <h1 className="text-text-white-gray font-bold text-lg">Jarsdev Website</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SoftwareProject;
