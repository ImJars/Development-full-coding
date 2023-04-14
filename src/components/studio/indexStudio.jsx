import React from "react";
import { motion } from "framer-motion";

function IndexStudio({
  subtitle_1,
  subtitle_2,
  subtitle_3,
  subtitle_4,
  subtitle_5,
  description_1,
  description_2,
  animate_1,
  animate_2,
  animate_3,
  animate_4,
  animate_5,
  animate_6,
  animate_7,
}) {
  return (
    <>
      <div className="-mt-48 hidden lg:block">
        <div className="sticky top-24 z-[901] w-64 xl:w-[272px]">
          <nav
            className="bg-table-color border border-text-general border-opacity-10 
                                        rounded-xl"
          >
            <div className="py-3 px-5 border-b border-text-general border-opacity-10">
              <h1 className="text-text-white-gray text-sm font-bold tracking-wide">
                Table of Contents
              </h1>
            </div>
            <div className="p-3 py-4">
              <ol className="flex flex-col gap-2 text-text-general text-sm">
                <motion.li
                  animate={animate_1}
                  className="px-2 text-text-white-gray font-semibold"
                >
                  {subtitle_1}
                </motion.li>
                <motion.li
                  animate={animate_2}
                  className="px-2 text-text-white-gray font-semibold"
                >
                  {subtitle_2}
                </motion.li>
                <motion.li animate={animate_3} className="px-5">
                  {description_1}
                </motion.li>
                <motion.li animate={animate_4} className="px-5">
                  {description_2}
                </motion.li>
                <motion.li
                  animate={animate_5}
                  className="px-2 text-text-white-gray font-semibold"
                >
                  {subtitle_3}
                </motion.li>
                <motion.li
                  animate={animate_6}
                  className="px-2 text-text-white-gray font-semibold"
                >
                  {subtitle_4}
                </motion.li>
                <motion.li
                  animate={animate_7}
                  className="px-2 text-text-white-gray font-semibold"
                >
                  {subtitle_5}
                </motion.li>
              </ol>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default IndexStudio;
