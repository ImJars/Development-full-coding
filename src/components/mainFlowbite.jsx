import React, { useState, useEffect } from "react";
import { BsGrid1X2Fill } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import { MdNightsStay } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { BsFillSunFill } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import ActivitieComponent from "./activitieComponent";
import { AiOutlineClose } from "react-icons/ai";
import NoteComponent from "./noteComponent";

function MainFlowbite() {
  const [active, setActive] = useState(false);
  const mainFlowbite = useAnimation();

  const [darkMode, setDarkMode] = useState(false);

  function handleDarkMode() {
    setDarkMode(!darkMode);
  }

  function handleActive() {
    setActive(!active);
    // Obtener el elemento root
    const root = document.documentElement;

    // Verificar si después de alternar, active es true o false
    if (!active) {
      // Si active ahora es true, agregar una clase
      root.classList.add("overflow-hidden");
    } else {
      // Si active ahora es false, quitar la clase
      root.classList.remove("overflow-hidden");
    }
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
      <div className="list-none font-sans">
        <div>
          <button
            className="bg-card bg-opacity-50 py-2 px-2.5 rounded-lg flex space-x-2 items-center
                                        hover:bg-opacity-100 transition-all duration-200 ease-in-out"
            onClick={() => handleActive()}
          >
            {" "}
            <div>
              <BsGrid1X2Fill />
            </div>
            <h1 className="text-sm hidden sm:block">Menú Principal</h1>
          </button>
          <motion.div
            animate={mainFlowbite}
            // Arreglar el scroll cuando se abre el menu
            // onClick={scrollTo(0, 0)}
            className="inset-0 fixed invisible flex w-full min-h-screen flex-col p-3 backdrop-blur bg-secondary/90 transition-all duration-200 ease-in-out z-50"
          >
            <div>
              <div className="absolute inset-x-4 sm:inset-x-8 top-6 flex justify-end">
                <button
                  className="p-2 font-bold text-xl rounded-lg bg-text-general bg-opacity-10 hover:bg-opacity-25 transition-all duration-200 ease-in-out"
                  onClick={() => handleActive()}
                >
                  <AiOutlineClose />
                </button>
              </div>
              <div className="fixed left-2 right-2 bottom-0 top-14 flex flex-col gap-6 md:left-auto md:right-6 md:top-24 md:w-[320px]">
                <div className="flex flex-col gap-2 mx-2">
                  <div className="text-xl font-bold">Centro de acción</div>
                  <div className="flex h-24 gap-4">
                    <button
                      onClick={() => handleDarkMode()}
                      className="relative flex flex-1 flex-col justify-between rounded-xl p-4 transition-colors bg-slate-700 no-seleccionable cursor-not-allowed"
                    >
                      <div>
                        {darkMode ? (
                          <>
                            <MdNightsStay className="text-xl absolute opacity-0 transition-all duration-500 ease-in-out" />
                            <BsFillSunFill className="text-xl absolute opacity-100 transition-all duration-500 ease-in-out" />
                          </>
                        ) : (
                          <>
                            <MdNightsStay className="text-xl absolute opacity-100 transition-all duration-500 ease-in-out" />
                            <BsFillSunFill className="text-xl absolute opacity-0 transition-all duration-500 ease-in-out" />
                          </>
                        )}
                      </div>
                      <div className="text-left text-[14px] font-normal tracking-wider">
                        {darkMode ? "Modo Claro" : "Modo Oscuro"}
                      </div>
                    </button>
                    <button className="relative flex flex-1 flex-col justify-between rounded-xl p-4 transition-colors bg-slate-700 no-seleccionable cursor-not-allowed">
                      <div>
                        <AiFillEye className="text-xl" />
                      </div>
                      <div className="text-left text-[14px] font-medium dark:font-normal tracking-wider">
                        Enfocar
                      </div>
                    </button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col mx-2">
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="text-lg sm:text-xl font-bold">
                      Actividades recientes
                    </div>
                    <div className="scrollbar-hide flex flex-1 basis-0 flex-col gap-2 pb-4 sm:pb-8">
                      <ActivitieComponent
                        link={"/blog"}
                        title={"Blog"}
                        hours={"10 May. 2024"}
                        text_1={"Nueva"}
                        text_2_purple={"Publicación 🔥"}
                        text_3={"en el blog."}
                      />
                      <ActivitieComponent
                        link={"/til"}
                        title={"Hoy Aprendí"}
                        hours={"28 Abr. 2024"}
                        text_1={"Nueva"}
                        text_2_purple={"Actualización 🔥"}
                        text_3={"en la seccion de TIL."}
                      />
                      <ActivitieComponent
                        link={"/til"}
                        title={"Hoy Aprendí"}
                        hours={"28 Feb. 2024"}
                        text_1={"Nueva"}
                        text_2_purple={"Actualización 🔥"}
                        text_3={"en la seccion de TIL."}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="fixed left-2 right-2 top-[54%]  flex flex-col gap-2 md:left-6 md:top-24 md:w-[320px]">
                <div className="flex flex-col">
                  <div className="px-2 text-lg sm:text-xl font-bold">
                    Nota / Aviso
                  </div>
                </div>
                <NoteComponent
                  title={"Aviso"}
                  date={"20 Jun. 2024"}
                  description={
                    "Próximamente, estará disponible el centro de acción del menú principal, ya que se encuentra en rediseño y optimización. 😄 Por el momento se encuentra deshabilitado.​​"
                  }
                />
                <NoteComponent
                  title={"Aviso"}
                  date={"10 May. 2024"}
                  description={
                    "Se ha implementado una nueva versión del sitio web que corrige errores, optimiza funcionalidades y amplía el contenido informativo disponible.​​"
                  }
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default MainFlowbite;
