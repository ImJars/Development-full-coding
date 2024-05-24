import React, { useState, useEffect, useRef } from "react";
import { MdAttachMoney, MdOutlineClose } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";
import { FaBitcoin, FaEthereum } from "react-icons/fa";

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
  const textoRefEther = useRef(null);
  const [copiado, setCopiado] = useState(false);
  const [copiadoEther, setCopiadoEther] = useState(false);

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
  const copiarContenidoEther = async () => {
    try {
      await navigator.clipboard.writeText(textoRefEther.current.innerText);
      console.log("Contenido copiado al portapapeles");
      setCopiadoEther(true);

      // Hacer que el mensaje "Copiado" desaparezca después de 3 segundos
      setTimeout(() => {
        setCopiadoEther(false);
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
        className="inset-0 fixed invisible flex w-full min-h-full p-0 sm:p-3 transition-all duration-200 ease-in-out z-50"
      >
        <div className="w-full h-full flex justify-center items-end">
          <div className=" text-white bg-secondary/100 w-full sm:w-1/2 border border-opacity-25 rounded-lg border-text-general font-sans mx-4">
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
              <div className="mt-8 flex flex-col gap-3">
                <div className="flex items-center space-x-8">
                  <div className="flex items-center space-x-2">
                    <span ref={textoRef} id="miTexto" className="hidden">
                      bc1qvwwwnlwq9zkffuysdm2669gp4prkmeee8p423g
                    </span>
                    <FaBitcoin className="text-lg text-text-general" />
                    <h1
                      onClick={copiarContenido}
                      className="text-sm font-semibold cursor-pointer"
                    >
                      Direccion de Bitcoin
                    </h1>
                  </div>
                  <div className="space-x-4">
                    <div>
                      {copiado && (
                        <span className="text-xs font-semibold text-text-blue">
                          ¡Direccion copiada en el portapapeles!
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-8">
                  <div className="flex items-center space-x-2">
                    <span ref={textoRefEther} id="miTexto" className="hidden">
                      0xb64e56010218907e12aF9ac294Be29376999559a
                    </span>
                    <FaEthereum className="text-lg text-text-general" />
                    <h1
                      onClick={copiarContenidoEther}
                      className="text-sm font-semibold cursor-pointer"
                    >
                      Direccion de Ethereum
                    </h1>
                  </div>
                  <div>
                    {copiadoEther && (
                      <span className="text-xs font-semibold text-text-blue">
                        ¡Direccion copiada en el portapapeles!
                      </span>
                    )}
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
