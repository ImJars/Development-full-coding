import React from "react";
import { GrMail } from "react-icons/gr";

function TableContact() {
  return (
    <>
      <div className="relative overflow-x-auto rounded-lg border border-text-general border-opacity-25 mb-10 mt-6 font-sans">
        <table className="w-full">
          <thead className=" text-text-white-gray text-sm font-bold tracking-wide bg-table_activate">
            <tr className="border-b border-text-general border-opacity-10">
              <th scope="col" className="px-3 sm:px-6 py-3 text-start">
                Nombre
              </th>
              <th scope="col" className="px-0 sm:px-6 py-3 text-start">
                Detalles
              </th>
            </tr>
          </thead>
          <tbody className="text-text-general text-sm tracking-wide font-normal">
            <tr className="bg-secondary">
              <td className="px-3 sm:px-6 py-2">Dirección</td>
              <td className="px-0 sm:px-6 py-2 flex items-center">
                Tula de Allende, Hidalgo. Mx
              </td>
            </tr>
            <tr className="bg-secondary">
              <td className="px-3 sm:px-6 py-2">Correo Electrónico</td>
              <td className="px-0 sm:px-6 py-2">
                <a
                  href="mailto:hi.legacyier@gmail.com?subject=Contacto%20desde%20el%20sitio%20web"
                  className="text-text-blue inline-block"
                >
                  <div className="flex items-center">
                    <GrMail className="inline-block mr-2" />
                    <span className="inline-block text-xs sm:text-sm">
                      hi.legacyier@gmail.com
                    </span>
                  </div>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableContact;
