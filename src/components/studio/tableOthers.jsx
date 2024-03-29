import React from "react";

function TableOthers() {
  return (
    <>
      <div className="relative overflow-x-auto rounded-lg border border-text-general border-opacity-10 my-10">
        <table className="w-full">
          <thead className=" text-text-white-gray text-sm font-bold tracking-wide">
            <tr className="border-b border-text-general border-opacity-10">
              <th scope="col" className="px-6 py-3 text-start">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-start">
                Detail
              </th>
            </tr>
          </thead>
          <tbody className="text-text-general text-sm tracking-wide font-normal">
            <tr>
              <td className="px-6 py-2">Internet</td>
              <td className="px-6 py-2">20Mbps WiFi</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableOthers;
