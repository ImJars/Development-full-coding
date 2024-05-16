import React, { useState, useEffect, useRef } from "react";
import { MdBarChart } from "react-icons/md";
import { IoMdHeartDislike } from "react-icons/io";

function Star({ incrementar, decrementar, contador }) {
  const [favd, setFavd] = useState(false);
  const favRef = useRef(null);

  useEffect(() => {
    const favElem = favRef.current;

    const handleMouseDown = () => {
      favElem.classList.add("favPress");
    };

    const handleMouseUp = () => {
      favElem.classList.remove("favPress");
      setFavd((prevFavd) => !prevFavd);
    };

    favElem.addEventListener("mousedown", handleMouseDown);
    favElem.addEventListener("mouseup", handleMouseUp);

    return () => {
      favElem.removeEventListener("mousedown", handleMouseDown);
      favElem.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const className = `fav ${favd ? "favd" : ""}`;

  return (
    <>
      <section className="flex w-full justify-between mt-2 -mb-2">
        <div className="flex items-center space-x-1 flex-1 justify-center">
          <a
            ref={favRef}
            className={`${className} cursor-pointer`}
            onClick={incrementar}
            id="fav"
          >
            <svg className="stableHeart" viewBox="-1 0 18 15">
              <defs>
                <path
                  d="M16 4.872c0-4.9-6.894-5.8-8 .695C6.81-.928 0-.027 0 5.25c0 5.274 8 9.697 8 9.697s8-5.177 8-10.075z"
                  id="heartPath"
                >
                  {" "}
                </path>
              </defs>
              <use xlinkHref="#heartPath" />
            </svg>
            <svg className="floatHeart" viewBox="-1 0 18 15">
              <use xlinkHref="#heartPath" />
            </svg>
          </a>
          <span className="text-xs no-seleccionable text-text-general">{contador}</span>
        </div>
        <div className="flex-1 flex justify-center py-2 rounded-lg items-center space-x-1 ">
          <IoMdHeartDislike
            onClick={decrementar}
            className="text-2xl cursor-pointer text-text-general hover: hover:scale-125 active:text-text-blue active:scale-100 transition-all duration-200 ease-in-out"
          />
        </div>
        <div className="flex-1 flex justify-center py-2 rounded-lg items-center">
          <MdBarChart className="text-text-general text-2xl" />
          <span className="text-xs no-seleccionable text-text-general">
            {(contador + 1) * 5}
          </span>
        </div>
      </section>
    </>
  );
}

export default Star;
