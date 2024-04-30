import React from "react";

function TableSecondary() {
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
              <td className="px-6 py-2">Modelo</td>
              <td className="px-6 py-2">FIODIO AF11F</td>
            </tr>
            <tr>
              <td className="px-6 py-2">Resolucion</td>
              <td className="px-6 py-2">2560x1080</td>
            </tr>
            <tr>
              <td className="px-6 py-2">Relacion de Aspecto</td>
              <td className="px-6 py-2">21:9</td>
            </tr>
            <tr>
              <td className="px-6 py-2">Frecuencia de Actualizacion</td>
              <td className="px-6 py-2">100 Hz</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableSecondary;
