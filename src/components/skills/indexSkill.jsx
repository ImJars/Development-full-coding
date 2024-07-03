import React from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const scrollToSection = (programming) => {
  const section = document.getElementById(programming);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

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
              <h1 className="text-text-white-gray text-xs xl:text-base font-bold tracking-wide">
                Contenido
              </h1>
              <motion.div
                className="opacity-0 transform translate-x-10"
                animate={animate_scroll}
              >
                <div
                  onClick={scrollToTop}
                  className="cursor-pointer text-xs text-text-blue border border-text-blue border-opacity-20 px-3 py-1 rounded-lg flex items-center space-x-1"
                >
                  <span>Scroll</span>
                  <FaArrowUp className="text-xs" />
                </div>
              </motion.div>
            </div>
            <div className="py-4">
              <ol className="flex flex-col text-text-general text-sm">
                <motion.li
                  animate={animate_1}
                  whileHover={{ color: "#60A5FA" }}
                  className="p-2 text-text-white-gray font-semibold no-seleccionable"
                >
                  {title_1}
                </motion.li>
                <motion.li
                  animate={animate_2}
                  whileHover={{ color: "#60A5FA" }}
                  className="px-5 py-1 no-seleccionable"
                >
                  {subtitle_1}
                </motion.li>
                <motion.li
                  animate={animate_3}
                  whileHover={{ color: "#60A5FA" }}
                  className="px-5 py-1 no-seleccionable"
                >
                  {subtitle_2}
                </motion.li>
                <motion.li
                  animate={animate_4}
                  whileHover={{ color: "#60A5FA" }}
                  className="px-5 py-1 no-seleccionable"
                >
                  {subtitle_3}
                </motion.li>
                <motion.li
                  animate={animate_5}
                  whileHover={{ color: "#60A5FA" }}
                  className="px-5 py-1 no-seleccionable"
                >
                  {subtitle_4}
                </motion.li>
                <motion.li
                  animate={animate_6}
                  whileHover={{ color: "#60A5FA" }}
                  className="px-5 py-1 no-seleccionable"
                >
                  {subtitle_5}
                </motion.li>
                <motion.li
                  animate={animate_back}
                  whileHover={{ color: "#60A5FA" }}
                  className="p-2 text-text-white-gray font-semibold no-seleccionable"
                >
                  {title_3}
                </motion.li>
                <motion.li
                  animate={animate_back2}
                  whileHover={{ color: "#60A5FA" }}
                  className="px-5 py-1 no-seleccionable"
                >{subtitle_back2}</motion.li>
                <motion.li
                  animate={animate_back3}
                  whileHover={{ color: "#60A5FA" }}
                  className="px-5 py-1 no-seleccionable"
                >{subtitle_back3}</motion.li>
                <motion.li
                  animate={animate_back4}
                  whileHover={{ color: "#60A5FA" }}
                  className="px-5 py-1 no-seleccionable"
                >{subtitle_back4}</motion.li>
                <motion.li
                  animate={animate_7}
                  whileHover={{ color: "#60A5FA" }}
                  className="p-2 text-text-white-gray font-semibold no-seleccionable"
                >
                  {title_2}
                </motion.li>
                <motion.li
                  onClick={() => scrollToSection("programming")}
                  animate={animate_9}
                  whileHover={{ color: "#60A5FA" }}
                  className="px-5 py-1 text-start no-seleccionable"
                >
                  {subtitle_6}
                </motion.li>
                <motion.li
                  animate={animate_10}
                  whileHover={{ color: "#60A5FA" }}
                  className="px-5 py-1 no-seleccionable"
                >
                  {subtitle_7}
                </motion.li>
                <motion.li
                  animate={animate_11}
                  whileHover={{ color: "#60A5FA" }}
                  className="px-5 py-1 no-seleccionable"
                >
                  {subtitle_8}
                </motion.li>
              </ol>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default IndexSkill;
