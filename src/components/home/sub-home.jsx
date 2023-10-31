import React from "react";
import CardNumber from "./card-number";
import { FaProjectDiagram } from "react-icons/fa";
import { IoIosHappy } from "react-icons/io";
import { AiFillCode } from "react-icons/ai";
import { MdWork } from "react-icons/md";
function SubHome({ title, subtitleOne, subtitleTwo, text }) {
  return (
    <>
      <div className="font-poppins">
        <h1 className="text-xs sm:text-lg font-bold text-text-purple mb-1">
          {title}
        </h1>
        <div className="flex">
            <h1 className="text-xl sm:text-3xl font-bold mb-2">
                {subtitleOne}&nbsp;
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold mb-2 text-text-blue">{subtitleTwo}</h2>
        </div>
        <h3 className="text-sm sm:text-base text-text-general mb-14">{text}</h3>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-4 ">
            <CardNumber
              number={<FaProjectDiagram />}
              title={"100% Proyectos completados"}
            />
            <CardNumber
              number={<IoIosHappy />}
              title={"+3 Años de Experiencia"}
            />
            <CardNumber
              number={<IoIosHappy />}
              title={"+3 Años de Experiencia"}
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
