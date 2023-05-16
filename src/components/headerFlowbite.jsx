import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function HeaderFlowbite() {
  const [active, setActive] = useState(false);

  const animateArrow = useAnimation();
  const animateFlowbite = useAnimation();
  useEffect(() => {
    if (active) {
      animateArrow.start({
        rotate: 90,
        transition: {
          type: "spring",
          duration: 0.5,
        },
      });
      animateFlowbite.start({
        opacity: 1,
        y: 0,
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
      animateFlowbite.start({
        opacity: 0,
        y: -10,
        transition: {
          type: "spring",
          duration: 0.5,
        },
      });
    }
  }, [active, animateArrow]);

  return (
    <>
      <li className="list-none">
        <div>
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
          </button>
          <motion.div
            animate={ animateFlowbite }
            className="opacity-0 absolute border-text-general border-opacity-20 top-Flowbite flex w-40 flex-col rounded-2xl border p-3 backdrop-blur bg-secondary/90"
          >
            <a
              className="nav-link h-8 text-xs"
            >
              Skills &amp; Tools
            </a>
            <a
              className="nav-link h-8 text-xs"
            >
              Experience
            </a>
            <a
              className="nav-link h-8 text-xs"
            >
              Studio
            </a>
            <a
              className="nav-link h-8 text-xs"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </li>
    </>
  );
}

export default HeaderFlowbite;
