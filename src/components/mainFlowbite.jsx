import React, { useState, useEffect } from "react";
import { BsGrid1X2Fill } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import { MdNightsStay } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { BsFillSunFill } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import ActivitieComponent from "./activitieComponent";
import { AiOutlineClose } from "react-icons/ai";

function MainFlowbite() {
  const [active, setActive] = useState(false);
  const mainFlowbite = useAnimation();

  const [darkMode, setDarkMode] = useState(false);

  function handleDarkMode() {
    setDarkMode(!darkMode);
  }

  function handleActive() {
    setActive(!active);
  }

  useEffect(() => {
    if (active === true) {
      mainFlowbite.start({
        visibility: "visible",
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.5,
        },
      });
    } else {
      mainFlowbite.start({
        visibility: "hidden",
        opacity: 0,
        transition: {
          type: "spring",
          duration: 0.5,
        },
      });
    }
  }, [active, mainFlowbite]);

  return (
    <>
      <li className="list-none">
        <div>
          <button
            className="bg-card bg-opacity-50 py-2 px-3 rounded-xl flex space-x-2 items-center
                                        hover:bg-opacity-100 transition-all duration-200 ease-in-out"
            onClick={() => handleActive()}
          >
            {" "}
            <div>
              <BsGrid1X2Fill />
            </div>
            <h1 className="text-sm hidden sm:block">Main Access</h1>
          </button>
          <motion.div
            animate={mainFlowbite}
            // Arreglar el scroll cuando se abre el menu
            // onClick={scrollTo(0, 0)}
            className="inset-0 fixed invisible flex w-full min-h-screen flex-col p-3 backdrop-blur bg-secondary/90 transition-all duration-200 ease-in-out"
          >
            <div>
              <div className="absolute inset-x-4 top-8 flex justify-end sm:inset-x-8">
                <button
                  className="p-2 font-bold text-xl rounded-xl bg-text-general bg-opacity-10 hover:bg-opacity-25 transition-all duration-200 ease-in-out"
                  onClick={() => handleActive()}
                >
                  <AiOutlineClose />
                </button>
              </div>
              <div className="fixed left-2 right-2 bottom-0 top-20 flex flex-col gap-6 sm:left-auto sm:right-6 sm:top-24 sm:w-[320px]">
                <div className="flex flex-col gap-2">
                  <div className="px-2 text-xl font-bold">Action Center</div>
                  <div className="flex h-24 gap-4">
                    <button onClick={() => handleDarkMode() } className="relative flex flex-1 flex-col justify-between rounded-xl p-4 transition-colors bg-white dark:bg-slate-700">
                      <div>
                        {
                          darkMode ? <BsFillSunFill className="text-xl" /> : <MdNightsStay className="text-xl" />
                        }
                      </div>
                      <div className="text-left text-[14px] font-medium dark:font-normal tracking-wider">
                        Dark Mode:
                      </div>
                    </button>
                    <button className="relative flex flex-1 flex-col justify-between rounded-xl p-4 transition-colors bg-white dark:bg-slate-700">
                      <div>
                        <AiFillEye className="text-xl" />
                      </div>
                      <div className="text-left text-[14px] font-medium dark:font-normal tracking-wider">
                        Focus:
                      </div>
                    </button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="px-2 text-xl font-bold">
                      Recent Activities
                    </div>
                    <div className="scrollbar-hide flex flex-1 basis-0 flex-col gap-2 p-2 pb-4 sm:pb-8">
                      <ActivitieComponent
                        link={"https://www.google.com"}
                        title={"REACTION"}
                        hours={"2 hours ago"}
                        text_1={"the"}
                        text_2_purple={"Tentang Next.js dan Tailwind CSS 🔥"}
                        text_3={"BLOG POST"}
                        text_4={"got new"}
                      />
                      <ActivitieComponent
                        link={"https://www.google.com"}
                        title={"REACTION"}
                        hours={"2 hours ago"}
                        text_1={"the"}
                        text_2_purple={"Tentang Next.js dan Tailwind CSS 🔥"}
                        text_3={"BLOG POST"}
                        text_4={"got new"}
                      />
                      <ActivitieComponent
                        link={"https://www.google.com"}
                        title={"REACTION"}
                        hours={"2 hours ago"}
                        text_1={"the"}
                        text_2_purple={"Tentang Next.js dan Tailwind CSS 🔥"}
                        text_3={"BLOG POST"}
                        text_4={"got new"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="fixed left-2 right-2 bottom-0 top-2/3 flex flex-col gap-6 sm:left-6 sm:top-24 sm:w-[320px]">
                <div className="flex flex-col gap-2">
                  <div className="px-2 text-xl font-bold">Note / Notice</div>
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex flex-1 basis-0 flex-col gap-2 p-2 pb-4 sm:pb-8">
                      <div>
                        <a
                          href="https://www.google.com"
                          className="block rounded-xl border p-4 text-[13px] backdrop-blur border-text-general border-opacity-20 bg-slate-900/60"
                        >
                          <div className="mb-1 flex justify-between text-xs text-slate-600 dark:text-slate-400">
                            <span className="text-sm">Curse of Javascript</span>
                            <span >22 hours ago</span>
                          </div>
                          <div className="flex flex-wrap items-baseline gap-x-1">
                            <span>Estare realizando un curso de React y Tailwind CSS en las proximas semanas</span>
                          </div>
                          <div className="mt-1 flex justify-end text-text-general text-sm">
                            <BiLinkExternal />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </li>
    </>
  );
}

export default MainFlowbite;
