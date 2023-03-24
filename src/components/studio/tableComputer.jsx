import React from "react";

function TableComputer() {
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
              <td className="px-6 py-2">OS</td>
              <td className="px-6 py-2">Windows 11 pro</td>
            </tr>
            <tr>
              <td className="px-6 py-2">Proccessor</td>
              <td className="px-6 py-2">Intel Core i3-12100 12th Gen</td>
            </tr>
            <tr>
              <td className="px-6 py-2">RAM</td>
              <td className="px-6 py-2">32GB 3600Mhz DDR4</td>
            </tr>
            <tr>
              <td className="px-6 py-2">GPU</td>
              <td className="px-6 py-2">RTX 3060 12GB GDDR6</td>
            </tr>
            <tr>
              <td className="px-6 py-2">Storage</td>
              <td className="px-6 py-2">VMe M.2 1TB Gen4x4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableComputer;
