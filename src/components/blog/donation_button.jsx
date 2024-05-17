import React, { useState, useEffect } from "react";
import { MdAttachMoney, MdOutlineClose } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

const DonationSection = styled.section`
  position: fixed; /* Posición fija para que se mantenga en el centro de la pantalla incluso al desplazarse */
  top: 50%; /* Centrado vertical */
  left: 50%; /* Centrado horizontal */
  transform: translate(
    -50%,
    -50%
  ); /* Ajuste para centrar perfectamente el modal */
  width: 80%; /* Ancho del modal */
  max-width: 600px; /* Ancho máximo para evitar que el modal sea demasiado grande en pantallas grandes */
  height: auto; /* Altura automática, puede cambiar dependiendo del contenido del modal */
  z-index: 1000; /* Z-index alto para asegurar que el modal esté por encima de otros elementos */
`;

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

  console.log(active);

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
        <div className="w-full h-full flex justify-center items-end ">
          <div className=" text-white backdrop-blur bg-secondary/100 w-1/2 border border-opacity-25 rounded-lg border-text-general">
            <div className="p-4">
              <div className="flex justify-end">
                <button onClick={handleActive} className="border border-opacity-25 border-text-general bg-table_activate p-0.5 rounded-md">
                <MdOutlineClose className="text-2xl"/>
                </button>
              </div>
              <div>
                <h1>Hola Mundo</h1>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default DonationButton;
