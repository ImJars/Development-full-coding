import React from "react";

function TableSecondary() {
  return (
    <>
      <div className="relative overflow-x-auto rounded-lg border border-text-general border-opacity-25 mt-5 mb-10">
        <table className="w-full">
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
              <td className="px-6 py-2">Modelo</td>
              <td className="px-6 py-2">FIODIO AF11F</td>
            </tr>
            <tr className="bg-secondary">
              <td className="px-6 py-2">Resolución</td>
              <td className="px-6 py-2">2560x1080</td>
            </tr>
            <tr className="bg-secondary">
              <td className="px-6 py-2">Relación de Aspecto</td>
              <td className="px-6 py-2">21:9</td>
            </tr>
            <tr className="bg-secondary">
              <td className="px-6 py-2">Frecuencia de Actualización</td>
              <td className="px-6 py-2">100 Hz</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableSecondary;
