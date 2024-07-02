import React from "react";

function TableComputer() {
  return (
    <>
      <div className="relative overflow-x-auto rounded-lg border border-text-general border-opacity-25 mb-10 mt-6">
        <table className="w-full table-auto">
          <thead className=" text-text-white-gray text-sm font-bold tracking-wide bg-table_activate">
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
            <tr className="bg-secondary">
              <td className="px-6 py-2">OS</td>
              <td className="px-6 py-2">Windows 11 Pro</td>
            </tr>
            <tr className="bg-secondary">
              <td className="px-6 py-2">Procesador</td>
              <td className="px-6 py-2">AMD Ryzen 5 5600G</td>
            </tr>
            <tr className="bg-secondary">
              <td className="px-6 py-2">RAM</td>
              <td className="px-6 py-2">16 GB DDR4</td>
            </tr>
            <tr className="bg-secondary">
              <td className="px-6 py-2">GPU</td>
              <td className="px-6 py-2">GeForce RTX 3060 8 GB GDDR6</td>
            </tr>
            <tr className="bg-secondary">
              <td className="px-6 py-2">Memoria</td>
              <td className="px-6 py-2">M.2 1 TB</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableComputer;
