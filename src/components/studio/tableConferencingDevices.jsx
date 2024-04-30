import React from "react";

function TableConferencingDevices() {
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
              <td className="px-6 py-2">Microfono</td>
              <td className="px-6 py-2">MAONO FIFINE</td>
            </tr>
            <tr>
              <td className="px-6 py-2">Camara Web</td>
              <td className="px-6 py-2">Logitech Brio 4k</td>
            </tr>
            <tr>
              <td className="px-6 py-2">Interfaz de Audio</td>
              <td className="px-6 py-2">OBS Studio</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableConferencingDevices;
