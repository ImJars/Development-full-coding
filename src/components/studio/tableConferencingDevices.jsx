import React from "react";

function TableConferencingDevices() {
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
              <td className="px-6 py-2">Micrófono</td>
              <td className="px-6 py-2">MAONO FIFINE</td>
            </tr>
            <tr className="bg-secondary">
              <td className="px-6 py-2">Cámara Web</td>
              <td className="px-6 py-2">Logitech Brio 4k</td>
            </tr>
            <tr className="bg-secondary">
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
