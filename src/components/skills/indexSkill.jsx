import React from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

function IndexSkill({
  title_1,
  subtitle_1,
  subtitle_2,
  subtitle_3,
  subtitle_4,
  subtitle_5,
  title_3,
  subtitle_back2,
  subtitle_back3,
  subtitle_back4,
  animate_back,
  animate_back2,
  animate_back3,
  animate_back4,
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
            <div className="py-3 px-4 border-b border-text-general border-opacity-10 flex justify-between items-center">
              <h1 className="text-text-white-gray text-xs xl:text-sm font-bold tracking-wide">
                Contenido
              </h1>
              <motion.div
                className="opacity-0 transform translate-x-10"
                animate={animate_scroll}
              >
                <a
                  href="#skills"
                  className="text-xs text-text-blue border border-text-blue border-opacity-20 px-3 py-1 rounded-lg flex items-center space-x-1"
                >
                  <span>Scroll</span>
                  <FaArrowUp className="text-xs" />
                </a>
              </motion.div>
            </div>
            <div className="py-4">
              <ol className="flex flex-col text-text-general text-sm">
                <motion.a
                  href="#frontend"
                  animate={animate_1}
                  whileHover={{ color: "#60A5FA" }}
                  className="p-2 text-text-white-gray font-semibold"
                >
                  {title_1}
                </motion.a>
                <motion.a
                  href="#typescript"
                  animate={animate_2}
                  whileHover={{ color: "#60A5FA" }}
                  className="px-5 py-1"
                >
                  {subtitle_1}
                </motion.a>
                <motion.a
                  href="#react"
                  animate={animate_3}
                  whileHover={{ color: "#60A5FA" }}
                  className="px-5 py-1"
                >
                  {subtitle_2}
                </motion.a>
                <motion.a
                  href="#tailwind"
                  animate={animate_4}
                  whileHover={{ color: "#60A5FA" }}
                  className="px-5 py-1"
                >
                  {subtitle_3}
                </motion.a>
                <motion.a
                  href="#framer"
                  animate={animate_5}
                  whileHover={{ color: "#60A5FA" }}
                  className="px-5 py-1"
                >
                  {subtitle_4}
                </motion.a>
                <motion.a
                  href="#nextjs"
                  animate={animate_6}
                  whileHover={{ color: "#60A5FA" }}
                  className="px-5 py-1"
                >
                  {subtitle_5}
                </motion.a>
                <motion.a
                  href="#uiux"
                  animate={animate_back}
                  whileHover={{ color: "#60A5FA" }}
                  className="p-2 text-text-white-gray font-semibold"
                >
                  {title_3}
                </motion.a>
                <motion.a
                  href="#framer"
                  animate={animate_back2}
                  whileHover={{ color: "#60A5FA" }}
                  className="px-5 py-1"
                >{subtitle_back2}</motion.a>
                <motion.a
                  href="#type"
                  animate={animate_back3}
                  whileHover={{ color: "#60A5FA" }}
                  className="px-5 py-1"
                >{subtitle_back3}</motion.a>
                <motion.a
                  href="#type"
                  animate={animate_back4}
                  whileHover={{ color: "#60A5FA" }}
                  className="px-5 py-1"
                >{subtitle_back4}</motion.a>
                <motion.a
                  href="#uiux"
                  animate={animate_7}
                  whileHover={{ color: "#60A5FA" }}
                  className="p-2 text-text-white-gray font-semibold"
                >
                  {title_2}
                </motion.a>
                <motion.a
                  href="#programming"
                  animate={animate_9}
                  whileHover={{ color: "#60A5FA" }}
                  className="px-5 py-1"
                >
                  {subtitle_6}
                </motion.a>
                <motion.a
                  href="#technologies"
                  animate={animate_10}
                  whileHover={{ color: "#60A5FA" }}
                  className="px-5 py-1"
                >
                  {subtitle_7}
                </motion.a>
                <motion.a
                  href="#softwares"
                  animate={animate_11}
                  whileHover={{ color: "#60A5FA" }}
                  className="px-5 py-1"
                >
                  {subtitle_8}
                </motion.a>
              </ol>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default IndexSkill;
