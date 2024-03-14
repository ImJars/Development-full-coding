import React from "react";
import { BsPinFill } from "react-icons/bs";
import { MdOutlineBarChart } from "react-icons/md";
import { AiOutlineEllipsis, AiOutlineShareAlt } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";

function PinedCard({ date, title, description }) {
  return (
    <>
      <section className="group">
        <div className="border font-poppins border-text-general rounded-2xl border-opacity-10 mb-8 bg-slate-900 group-hover:scale-[101%] group-hover:shadow-xl transition-all duration-300 ease-in-out">
          <div className="p-6 block">
            <div className="flex space-x-2 items-center mb-3 text-text-purple group-hover:text-text-blue justify-between transition-all duration-300 ease-in-out">
              <div className="flex space-x-2">
                <BsPinFill className="text-lg sm:text-xl transform -rotate-45" />
                <h1 className="font-bold text-base">Pinned Post</h1>
              </div>
              <div>
                <FaExternalLinkAlt className="text-lg" />
              </div>
            </div>
            <h1 className="text-text-general text-xs font-semibold mb-1">
              {date}
            </h1>
            <h2 className="block text-text-white-gray text-lg sm:text-3xl font-bold mb-1 sm:tracking-wide">
              {title}
            </h2>
            <h3 className="block text-text-general text-sm sm:text-base">
              {description}
            </h3>
            <div className="flex space-x-2 items-center mt-4">
              <div className="flex items-center text-text-general text-xs space-x-1">
                <MdOutlineBarChart className="text-lg" />
                <h1>1485</h1>
                <h2>Views</h2>
              </div>
              <font className="text-text-general text-xl">
                <AiOutlineEllipsis />
              </font>
              <div className="flex items-center text-text-general text-xs space-x-1">
                <AiOutlineShareAlt className="text-lg" />
                <h1>27</h1>
                <h2>Shares</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PinedCard;
