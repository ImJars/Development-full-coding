import React from "react";
import { MdVerified } from "react-icons/md";
import { FaStar, FaShare } from "react-icons/fa";

function Status({ text, date }) {
  return (
    <>
      <div>
        <div className="flex space-x-2 justify-between">
          <div className="flex items-center space-x-2">
            <div>
              <img src="perfil.jpg" alt="" className="w-10 h-10 rounded-full" />
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <h1 className="font-bold text-base">Angel Ramirez</h1>
                <MdVerified className="text-sm text-text-blue" />
              </div>
              <h2 className="text-sm text-text-general">@Im_Jars</h2>
            </div>
          </div>
          <div className="text-text-general">{date}</div>
        </div>
        <div className="mt-3">
          <p className="ml-12 font-sans">{text}</p>
        </div>
        <div className="mt-4">
          <div className="flex justify-between gap-3">
            <button className="flex-1 bg-text-blue bg-opacity-10 flex justify-center py-2 rounded-lg">
              <FaStar className="text-text-general" />
            </button>
            <button className="flex-1 bg-text-blue bg-opacity-10 flex justify-center py-2 rounded-lg">
              <FaShare className="text-text-general" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Status;
