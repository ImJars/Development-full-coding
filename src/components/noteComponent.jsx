import React from "react";

function NoteComponent({ title, date, description}) {
  return (
    <>
      <div className="flex flex-1 flex-col font-sans mx-2 sm:mx-0">
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-1 basis-0 flex-col gap-2">
            <div>
              <div
                className="block rounded-xl border p-4 text-[13px] backdrop-blur border-text-general border-opacity-25 bg-slate-900/60"
              >
                <div className="mb-1 flex justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span className="text-sm">{title}</span>
                  <span>{date}</span>
                </div>
                <div className="text-xs sm:text-sm flex flex-wrap items-baseline gap-x-1">
                  <span>
                    {description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoteComponent;
