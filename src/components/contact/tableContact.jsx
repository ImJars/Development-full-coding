import React from "react";
import { GrMail } from "react-icons/gr";

function TableContact() {
  return (
    <>
      <div className="relative overflow-x-auto rounded-lg border border-text-general border-opacity-10 my-10">
        <table className="w-full">
          <thead className=" text-text-white-gray text-sm font-bold tracking-wide">
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
            <tr>
              <td className="px-3 sm:px-6 py-2">Direccion</td>
              <td className="px-0 sm:px-6 py-2 flex items-center">
                Tula de Allende, Hidalgo. Mx
              </td>
            </tr>
            <tr>
              <td className="px-3 sm:px-6 py-2">Correo Electronico</td>
              <td className="px-0 sm:px-6 py-2">
                <a 
                    href="mailto:hi.legacyier@gmail.com?subject=Contacto%20desde%20el%20sitio%20web"
                    className="flex items-center text-text-blue"
                >
                    <GrMail className="inline-block mr-2" />
                    <span className="inline-block text-xs sm:text-sm">
                        hi.legacyier@gmail.com
                    </span>
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
