import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

function Detalles() {
  return (
    <>
      <div>
        <h1 className="font-bold text-xl mb-1">Detalles</h1>
        <div className="border-t border-opacity-20 border-text-general" />
        <div className="flex justify-center">
          <p className="flex justify-center text-center font-sans text-sm mt-8">
            CEO of @Legacyier | Inversionista & Desarrollador ⚛ | ₿ $LSS $SEON
            $COP 💎 | Player 🇲🇽 | Natural Aesthetic 🔥 | A little shark swimming
            among whales 🦈💸
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="flex space-x-2 items-center">
            <TbWorld className="text-2xl text-text-general" />
            <a
              href="https://www.instagram.com/jars.little/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-text-blue font-semibold"
            >
              jars.dev
            </a>
          </div>
          <div className="flex space-x-2 items-center">
            <FaLinkedin className="text-2xl text-text-general" />
            <a
              href="https://www.linkedin.com/in/imjars/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-text-blue font-semibold"
            >
              ImJars
            </a>
          </div>
          <div className="flex space-x-2 items-center">
            <FaGithub className="text-2xl text-text-general" />
            <a
              href="https://github.com/ImJars"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-text-blue font-semibold"
            >
              ImJars
            </a>
          </div>
          <div className="flex space-x-2 items-center">
            <h1 className="text-2xl text-text-general ml-5px">𝕏</h1>
            <a
              href="https://twitter.com/Im_Jars"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-text-blue font-semibold"
            >
              Im_Jars
            </a>
          </div>
          <div className="flex space-x-2 items-center">
            <FaInstagram className="text-2xl text-text-general" />
            <a
              href="https://www.instagram.com/jars.little/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-text-blue font-semibold"
            >
              jars.little
            </a>
          </div>

          <div className="flex space-x-2 items-center">
            <FaWhatsapp className="text-2xl text-text-general" />
            <a
              href="https://api.whatsapp.com/send?phone=5217731511761&text=Hola!%20Bienvenido%20a%20mi%20Whatsapp%20%F0%9F%91%8B"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-text-blue font-semibold"
            >
              +52 773 151 1761
            </a>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Detalles;
