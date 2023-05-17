import React from "react";
import { BsGrid1X2Fill } from "react-icons/bs";

function MainFlowbite() {
  return (
    <>
      <li className="list-none">
        <div>
          <button
            className="bg-card bg-opacity-50 py-2 px-3 rounded-xl flex space-x-2 items-center
                                        hover:bg-opacity-100 transition-all duration-200 ease-in-out"
          >
            {" "}
            <div>
              <BsGrid1X2Fill />
            </div>
            <h1 className="text-sm">Main Access</h1>
          </button>
        </div>
      </li>
    </>
  );
}

export default MainFlowbite;
