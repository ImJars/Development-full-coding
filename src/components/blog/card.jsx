import React from "react";
import { MdOutlineBarChart } from "react-icons/md";
import { AiOutlineEllipsis, AiOutlineShareAlt } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";

function Card({ date, title, description, link }) {
  return (
    <>
      <section className="group">
        <div className="flex space-x-5 my-8">
          <div className="hidden sm:block justify-end border-text-general border-opacity-20 -translate-y-line border-b w-20 group-hover:w-24 transition-all duration-300 ease-in-out" />
          <div className="px-10 py-8 hover:bg-slate-900 group-hover:scale-[101%] text-start group-hover:shadow-xl transition-all duration-300 ease-in-out group-hover:border-text-white-gray border-text-white-gray group-hover:rounded-2xl rounded-2xl group-hover:border-opacity-10 border-opacity-0 group-hover:border border">
            <div className="flex space-x-2">
              <h1 className="text-text-general text-xs font-semibold">
                {date}
              </h1>
              <FaExternalLinkAlt className="text-xs text-text-general" />
            </div>
            <h2 className="block text-text-white-gray text-lg sm:text-3xl font-bold mb-1 sm:tracking-wide">
              {title}
            </h2>
            <h3 className="block text-text-general text-sm sm:text-base">
              {description}
            </h3>
            <div className="flex space-x-2 items-center mt-4">
              <div className="flex items-center text-text-general text-xs space-x-1">
                <MdOutlineBarChart className="text-lg" />
                <h1>2534</h1>
                <h2>Views</h2>
              </div>
              <font className="text-text-general text-xl">
                <AiOutlineEllipsis />
              </font>
              <div className="flex items-center text-text-general text-xs space-x-1">
                <AiOutlineShareAlt className="text-lg" />
                <h1>150</h1>
                <h2>Shares</h2>
              </div>
            </div>
            <div className="flex items-center">
              <a
                className="flex items-center text-text-purple group-hover:text-text-blue text-sm font-bold mt-2 space-x-1 transition-all duration-300 ease-in-out"
                href={link}
              >
                <h1>read more</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-3 w-3"
                >
                  <path d="M14.5 7.40192C16.5 8.55662 16.5 11.4434 14.5 12.5981L8.5 16.0622C6.5 17.2169 4 15.7735 4 13.4641L4 6.5359C4 4.2265 6.5 2.78312 8.5 3.93782L14.5 7.40192Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;
