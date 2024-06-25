import React from "react";

function CardProject({ icon, title, text }) {
  return (
    <>
      <div
        className="bg-card flex justify-center
                        items-center rounded-2xl px-6 py-3 mb-5
                        border border-text-general border-opacity-10 font-sans"
      >
        <div className="flex items-center">
          <div className="mr-4">
            <h1 className="text-6xl font-bold text-text-general opacity-80">
              {icon}
            </h1>
          </div>
          <div className="">
            <h1 className="font-bold">{title}</h1>
            <h2 className="text-text-general text-sm mt-1">{text}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProject;
