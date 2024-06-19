import React from "react";
import CardNumber from "./card-number";
import { FaProjectDiagram, FaUsers } from "react-icons/fa";
import { IoIosHappy } from "react-icons/io";
import { AiFillCode } from "react-icons/ai";
import { MdWork, MdVerified } from "react-icons/md";
function SubHome({ subtitleOne, text }) {
  return (
    <>
      <div className="text-text-white-gray font-sans border p-4 border-text-general border-opacity-25 rounded-2xl bg-primary/25 backdrop-blur-sm">
        <div className="flex items-center space-x-2 mt-2 mb-4">
            <div>
              <img src="perfil.jpg" alt="" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full no-seleccionable" />
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <h1 className="font-bold text-base sm:text-lg no-seleccionable">Angel Ramirez</h1>
                <MdVerified className="text-xs sm:text-sm text-text-blue" />
              </div>
              <h2 className="text-xs sm:text-sm text-text-general no-seleccionable">@Im_Jars</h2>
            </div>
          </div>
        <h3 className="text-base text-text-general mb-8">{text}</h3>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-4 ">
            <CardNumber
              number={<FaProjectDiagram />}
              title={"100% Proyectos completados"}
            />
            <CardNumber
              number={<FaUsers />}
              title={"100% Clientes satisfechos"}
            />
            <CardNumber
              number={<MdVerified />}
              title={"100% Feedback positivo"}
            />
            <CardNumber
              number={<IoIosHappy />}
              title={"+3 Años de Experiencia"}
            />
            <CardNumber
              number={<AiFillCode />}
              title={"+50000 lineas de codigo"}
            />
            <CardNumber
              number={<MdWork />}
              title={"+2000 horas de trabajo"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SubHome;
