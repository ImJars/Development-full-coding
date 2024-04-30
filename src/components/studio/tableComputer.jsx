import React from "react";

function TableComputer() {
  return (
    <>
      <div className="relative overflow-x-auto rounded-lg border border-text-general border-opacity-10 my-10">
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
              <td className="px-6 py-2">OS</td>
              <td className="px-6 py-2">Windows 11 Pro</td>
            </tr>
            <tr>
              <td className="px-6 py-2">Procesador</td>
              <td className="px-6 py-2">AMD Ryzen 5 5600G</td>
            </tr>
            <tr>
              <td className="px-6 py-2">RAM</td>
              <td className="px-6 py-2">16GB DDR4</td>
            </tr>
            <tr>
              <td className="px-6 py-2">GPU</td>
              <td className="px-6 py-2">GForce RTX 3060 8GB GDDR6</td>
            </tr>
            <tr>
              <td className="px-6 py-2">Memoria</td>
              <td className="px-6 py-2">M.2 1TB</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableComputer;
