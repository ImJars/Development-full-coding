import React from "react";

function IndexContact({ subtitle_1, subtitle_2 }) {
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
                  {subtitle_1}
                </li>
                <li className="px-2 text-text-white-gray font-semibold">
                  {subtitle_2}
                </li>
              </ol>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default IndexContact;