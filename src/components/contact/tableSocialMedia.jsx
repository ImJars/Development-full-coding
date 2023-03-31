import React from "react";
import { HiExternalLink } from "react-icons/hi";

function TableSocialMedia() {
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
              <td className="px-6 py-2">LinkedIn</td>
              <td className="px-6 py-2">
                <a 
                    href="https://www.linkedin.com/in/imjars" 
                    className="flex items-center text-text-blue"
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
              <td className="px-6 py-2">Twitter</td>
              <td className="px-6 py-2">
                <a 
                    href="https://twitter.com/Im_Jars" 
                    className="flex items-center text-text-blue"
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
              <td className="px-6 py-2">Instagram</td>
              <td className="px-6 py-2">
                <a 
                    href="https://www.instagram.com/jars.little" 
                    className="flex items-center text-text-blue"
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
