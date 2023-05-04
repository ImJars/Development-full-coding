import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function HeaderFlowbite() {
  const [active, setActive] = useState(false);

  const animateArrow = useAnimation();
  useEffect(() => {
    if (active) {
      animateArrow.start({
        rotate: 90,
        transition: {
          type: "spring",
          duration: 0.5,
        },
      });
    } else {
      animateArrow.start({
        rotate: 0,
        transition: {
          type: "spring",
          duration: 0.5,
        },
      });
    }
  }, [active, animateArrow]);

  return (
    <>
      <button
        className="text-text-blue flex items-center space-x-1 bg-text-blue bg-opacity-20
                   py-2 px-4 rounded-full"
        onClick={() => setActive(!active)}
      >
        <h1 className="text-sm font-semibold">Work</h1>
        <motion.svg
          animate={animateArrow}
          id="arrow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-3 w-3 rotate-90 sm:-rotate-0"
        >
          <path d="M14.5 7.40192C16.5 8.55662 16.5 11.4434 14.5 12.5981L8.5 16.0622C6.5 17.2169 4 15.7735 4 13.4641L4 6.5359C4 4.2265 6.5 2.78312 8.5 3.93782L14.5 7.40192Z"></path>
        </motion.svg>
        <select className="transform left-[22%]">
            <ol>
                <li>
                    Skills & Tools
                </li>
                <li>
                    Experience
                </li>
                <li>
                    Studio
                </li>
                <li>
                    Contact
                </li>
            </ol>
        </select>
      </button>
      
    </>
  );
}

export default HeaderFlowbite;
