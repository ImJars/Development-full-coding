import React from "react";
import { HiExternalLink } from "react-icons/hi";

function TableSocialMedia() {
  return (
    <>
      <div className="relative overflow-x-auto rounded-lg border border-text-general border-opacity-10 my-10 font-poppins mx-4 xl:mx-0">
        <table className="w-full">
          <thead className=" text-text-white-gray text-sm font-bold">
            <tr className="border-b border-text-general border-opacity-10">
              <th scope="col" className="px-3 sm:px-6 text-start">
                Nombre
              </th>
              <th scope="col" className="px-0 sm:px-6 py-3 text-start">
                Detalles
              </th>
            </tr>
          </thead>
          <tbody className="text-text-general text-sm font-normal">
            <tr>
              <td className="px-3 sm:px-6 py-2 text-xs sm:text-sm">LinkedIn</td>
              <td className="px-0 sm:px-6 py-2">
                <a 
                    href="https://www.linkedin.com/in/imjars" 
                    className="flex items-center text-text-blue text-xs sm:text-sm"
                    target={"_blank"}
                    rel="noreferrer"
                >
                  <span className="inline-block">https://www.linkedin.com/in/imjars </span>
                  &nbsp;
                  <HiExternalLink className="inline-block mr-2" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-3 sm:px-6 py-2 text-xs sm:text-sm">X (Twitter)</td>
              <td className="px-0 sm:px-6 py-2">
                <a 
                    href="https://twitter.com/Im_Jars" 
                    className="flex items-center text-text-blue text-xs sm:text-sm"
                    target={"_blank"}
                    rel="noreferrer"
                >
                  <span className="inline-block">https://twitter.com/Im_Jars </span>
                  &nbsp;
                  <HiExternalLink className="inline-block mr-2" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-3 sm:px-6 py-2 text-xs sm:text-sm">Instagram</td>
              <td className="px-0 sm:px-6 py-2">
                <a 
                    href="https://www.instagram.com/jars.little" 
                    className="flex items-center text-text-blue text-xs sm:text-sm"
                    target={"_blank"}
                    rel="noreferrer"
                >
                  <span className="inline-block">https://www.instagram.com/jars.little </span>
                  &nbsp;
                  <HiExternalLink className="inline-block mr-2" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TableSocialMedia;
