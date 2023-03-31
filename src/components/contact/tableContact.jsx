import React from "react";
import { GrMail } from "react-icons/gr";

function TableContact() {
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
              <td className="px-6 py-2">Address</td>
              <td className="px-6 py-2 flex items-center">
                Hidalgo, Mexico
              </td>
            </tr>
            <tr>
              <td className="px-6 py-2">E-mail</td>
              <td className="px-6 py-2">
                <a 
                    href="#"
                    className="flex items-center text-text-blue"
                >
                    <GrMail className="inline-block mr-2" />
                    <span className="inline-block">
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
