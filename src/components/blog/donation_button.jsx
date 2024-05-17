import React, { useState, useEffect, useRef } from "react";
import { MdAttachMoney, MdOutlineClose } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";
import { FaBitcoin } from "react-icons/fa";

function DonationButton() {
  const [active, setActive] = useState(false);
  const mainFlowbite = useAnimation();

  function handleActive() {
    setActive(!active);
  }
  useEffect(() => {
    if (active === true) {
      mainFlowbite.start({
        visibility: "visible",
        opacity: 1,
        overflow: "hidden",
        transition: {
          type: "spring",
          duration: 0.5,
        },
      });
    } else {
      mainFlowbite.start({
        visibility: "hidden",
        opacity: 0,
        overflow: "auto",
        transition: {
          type: "spring",
          duration: 0.5,
        },
      });
    }
  }, [active, mainFlowbite]);

  const textoRef = useRef(null);
  const [copiado, setCopiado] = useState(false);

  const copiarContenido = async () => {
    try {
      await navigator.clipboard.writeText(textoRef.current.innerText);
      console.log("Contenido copiado al portapapeles");
      setCopiado(true);

      // Hacer que el mensaje "Copiado" desaparezca después de 3 segundos
      setTimeout(() => {
        setCopiado(false);
      }, 4000);
    } catch (err) {
      console.error("Error al copiar: ", err);
    }
  };

  return (
    <>
      <button
        onClick={handleActive}
        className="border p-1 rounded-full flex justify-center items-center border-text-general"
      >
        <MdAttachMoney className="text-2xl text-text-white-gray" />
      </button>
      <motion.section
        animate={mainFlowbite}
        className="inset-0 fixed invisible flex w-full min-h-full p-3 transition-all duration-200 ease-in-out z-50"
      >
        <div className="w-full h-full flex justify-center items-end">
          <div className=" text-white backdrop-blur bg-secondary/100 w-1/2 border border-opacity-25 rounded-lg border-text-general font-sans">
            <div className="p-4">
              <div className="flex justify-end">
                <button
                  onClick={handleActive}
                  className="border border-opacity-25 border-text-general bg-table_activate p-0.5 rounded-md"
                >
                  <MdOutlineClose className="text-2xl" />
                </button>
              </div>
              <div className="flex justify-center">
                <h1>Enviar a:&nbsp;</h1>
                <h2 className="font-bold">@Im_Jars</h2>
              </div>
              <div className="mt-8">
                <div className="flex items-center space-x-8">
                  <div className="flex items-center space-x-2">
                    <span ref={textoRef} id="miTexto" className="hidden">
                      bc1qvwwwnlwq9zkffuysdm2669gp4prkmeee8p423g
                    </span>
                    <FaBitcoin className="text-lg text-text-general" />
                    <h1 className="text-sm font-semibold">
                      Direccion de Bitcoin
                    </h1>
                  </div>
                  <div className="space-x-4">
                    <button
                      className="btn bg-text-blue bg-opacity-20 py-1 px-3 rounded-md"
                      onClick={copiarContenido}
                    >
                      <span className="text-text-blue text-xs font-bold">
                        {" "}
                        Copiar direccion
                      </span>
                    </button>
                    {copiado && <span className="text-xs">¡Direccion copiada en el portapapeles!</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default DonationButton;
