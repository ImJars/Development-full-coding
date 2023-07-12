import React from "react";

function CardHome() {
  return (
    <>
      <div className="border-text-general relative z-10 flex-1 rounded-2xl border border-opacity-10 border-divider-dark bg-slate-900">
        <div className="border-text-general border-opacity-10 absolute inset-x-0 inset-y-8 z-[-1] border-t border-divider-dark"></div>
        <div className="border-text-general border-opacity-10 absolute inset-y-0 inset-x-8 z-[-1] border-l border-divider-dark"></div>
        <div className="-mt-0.5">
          <div className="mt-4 mr-2 ml-4 flex items-center gap-6 rounded-full bg-slate-100 dark:bg-slate-800">
            <div className="-m-2">
              <div className="rounded-full bg-amber-300 p-3.5 dark:bg-amber-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-white"
                >
                  <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z"></path>
                </svg>
              </div>
            </div>
            <div className="truncate py-2 pr-4 text-sm font-bold text-slate-700 dark:text-slate-300">
              Clean &amp; Intuitive
            </div>
          </div>
        </div>
        <div className="p-4 pl-12 text-sm text-slate-600 dark:text-slate-400">
          Keep the UI clean with a modern touch without compromising UX.
        </div>
      </div>
    </>
  );
}

export default CardHome;
