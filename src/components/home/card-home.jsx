import React from "react";

function CardHome({ extraClassIcon, icon, title, description }) {
  return (
    <>
      <div className="font-sans border-text-general relative z-10 flex-1 rounded-2xl border border-opacity-25 border-divider-dark bg-primary/75 backdrop-blur-3xl">
        <div className="border-text-general border-opacity-10 absolute inset-x-0 inset-y-8 z-[-1] border-t border-divider-dark"></div>
        <div className="border-text-general border-opacity-10 absolute inset-y-0 inset-x-8 z-[-1] border-l border-divider-dark"></div>
        <div className="-mt-0.5">
          <div className="mt-4 mr-2 ml-4 flex items-center gap-6 rounded-full bg-slate-800">
            <div className="-m-2">
              <div className={` ${extraClassIcon} rounded-full p-2.5`}>
                <h1 className="text-2xl">{icon}</h1>
              </div>
            </div>
            <div className="truncate py-2 pr-4 text-sm font-bold text-slate-300">
              {title}
            </div>
          </div>
        </div>
        <div className="p-4 pl-12 text-sm text-text-general">
          {description}
        </div>
      </div>
    </>
  );
}

export default CardHome;
