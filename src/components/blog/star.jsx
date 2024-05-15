import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaShare } from "react-icons/fa";

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
      <div className="flex items-center space-x-1 flex-1 justify-center">
        <a ref={favRef} className={className} onClick={incrementar} id="fav">
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
        <span className="text-sm no-seleccionable">{contador}</span>
      </div>
      <button
        onClick={decrementar}
        className="flex-1 bg-text-blue bg-opacity-10 flex justify-center py-2 rounded-lg"
      >
        <FaShare className="text-text-general" />
      </button>
    </>
  );
}

export default Star;
