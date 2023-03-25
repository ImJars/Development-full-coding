import React from "react";

function TablePeripherals() {
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
              <td className="px-6 py-2">Keyboard</td>
              <td className="px-6 py-2">Rexus Daiva RX-D68</td>
            </tr>
            <tr>
              <td className="px-6 py-2">Mouse</td>
              <td className="px-6 py-2">Rexus Xierra X15</td>
            </tr>
            <tr>
              <td className="px-6 py-2">Pen Tablet</td>
              <td className="px-6 py-2">One by Wacom</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TablePeripherals;
