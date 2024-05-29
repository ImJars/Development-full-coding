import React from "react";

function TablePeripherals() {
  return (
    <>
      <div className="relative overflow-x-auto rounded-lg border border-text-general border-opacity-10 mt-5 mb-10">
        <table className="w-full">
          <thead className=" text-text-white-gray text-sm font-bold tracking-wide">
            <tr className="border-b border-text-general border-opacity-10">
              <th scope="col" className="px-6 py-3 text-start">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3 text-start">
                Detalles
              </th>
            </tr>
          </thead>
          <tbody className="text-text-general text-sm tracking-wide font-normal">
            <tr>
              <td className="px-6 py-2">Teclado</td>
              <td className="px-6 py-2">HyperX</td>
            </tr>
            <tr>
              <td className="px-6 py-2">Mouse</td>
              <td className="px-6 py-2">Razer Deathadder Essential</td>
            </tr>
            <tr>
              <td className="px-6 py-2">Tableta gráfica</td>
              <td className="px-6 py-2">Huion</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TablePeripherals;
