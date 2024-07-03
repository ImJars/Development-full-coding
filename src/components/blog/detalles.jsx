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
          <p className="flex justify-center text-center font-sans text-sm mt-8 text-text-white-gray">
            Desarrollador de software apasionado por crear soluciones
            innovadoras que impacten positivamente 💻 | Amante de la ciencia
            ficción y tecnología 📚 | Siempre en búsqueda de nuevos desafíos y
            aprendizajes tecnológicos para mejorar mis habilidades y
            conocimientos 🌟 | Creo firmemente en el poder transformador de la
            tecnología para resolver problemas reales y mejorar la vida de las
            personas 🚀 | #DevLife #TechEnthusiast 💡
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="flex space-x-2 items-center">
            <TbWorld className="text-2xl text-text-general" />
            <a
              href="https://jarsdev.netlify.app/"
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
              href="https://x.com/Im_Jars"
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
              href="https://api.whatsapp.com/send?phone=5215529147674&text=Hola!%20Soy%20[Tu%20Nombre]%20¿Podemos%20hablar%20sobre%20[asunto]?%20Me%20gustaria%20discutir%20algunas%20ideas%20contigo.%20"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-text-blue font-semibold"
            >
              +52 55 2914 7674
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
