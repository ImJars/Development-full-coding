import React from "react";

function TableSecondary() {
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
              <td className="px-6 py-2">Model</td>
              <td className="px-6 py-2">Mi Desktop Monitor 27"</td>
            </tr>
            <tr>
              <td className="px-6 py-2">Resolutions</td>
              <td className="px-6 py-2">1920x1080</td>
            </tr>
            <tr>
              <td className="px-6 py-2">Aspect ratio</td>
              <td className="px-6 py-2">16:9</td>
            </tr>
            <tr>
              <td className="px-6 py-2">Refresh rate</td>
              <td className="px-6 py-2">75 Hz</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableSecondary;
