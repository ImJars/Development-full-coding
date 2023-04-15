import React from "react";
import { motion } from "framer-motion";

function IndexSkill({
  title_1,
  subtitle_1,
  subtitle_2,
  subtitle_3,
  subtitle_4,
  subtitle_5,
  title_2,
  subtitle_6,
  subtitle_7,
  subtitle_8,

  animate_1,
  animate_2,
  animate_3,
  animate_4,
  animate_5,
  animate_6,
  animate_7,
  animate_9,
  animate_10,
  animate_11,
  animate_scroll,
}) {
  return (
    <>
      <div className="-mt-48 hidden lg:block">
        <div className="sticky top-24 z-[901] w-64 xl:w-[272px]">
          <nav
            className="bg-table-color border border-text-general border-opacity-10 
                                        rounded-xl"
          >
            <div className="py-3 px-5 border-b border-text-general border-opacity-10 flex justify-between items-center">
              <h1 className="text-text-white-gray text-sm font-bold tracking-wide">
                Table of Contents
              </h1>
              <motion.div className="opacity-0 transform translate-x-10" animate={animate_scroll}>
                <a href="#skills" className="text-xs text-text-blue border border-text-blue border-opacity-20 px-2 py-1 rounded-full">
                  scroll to top
                </a>
              </motion.div>
            </div>
            <div className="py-4">
              <ol className="flex flex-col text-text-general text-sm">
                <motion.li
                  animate={animate_1}
                  className="p-2 text-text-white-gray font-semibold"
                >
                  {title_1}
                </motion.li>
                <motion.li animate={animate_2} className="px-5 py-1">
                  {subtitle_1}
                </motion.li>
                <motion.li animate={animate_3} className="px-5 py-1">
                  {subtitle_2}
                </motion.li>
                <motion.li animate={animate_4} className="px-5 py-1">
                  {subtitle_3}
                </motion.li>
                <motion.li animate={animate_5} className="px-5 py-1">{subtitle_4}</motion.li>
                <motion.li animate={animate_6} className="px-5 py-1">{subtitle_5}</motion.li>
                <motion.li animate={animate_7} className="p-2 text-text-white-gray font-semibold">
                  {title_2}
                </motion.li>
                <motion.li animate={animate_9} className="px-5 py-1">{subtitle_6}</motion.li>
                <motion.li animate={animate_10} className="px-5 py-1">{subtitle_7}</motion.li>
                <motion.li animate={animate_11} className="px-5 py-1">{subtitle_8}</motion.li>
              </ol>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default IndexSkill;
