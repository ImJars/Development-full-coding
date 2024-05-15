import React, { useState, useEffect, useRef } from "react";

function Star() {
    const [favd, setFavd] = useState(false);
    const favRef = useRef(null);

    useEffect(() => {
        const favElem = favRef.current;

        const handleMouseDown = () => {
            favElem.classList.add('favPress');
        };

        const handleMouseUp = () => {
            favElem.classList.remove('favPress');
            setFavd(prevFavd => !prevFavd);
        };

        favElem.addEventListener('mousedown', handleMouseDown);
        favElem.addEventListener('mouseup', handleMouseUp);

        return () => {
            favElem.removeEventListener('mousedown', handleMouseDown);
            favElem.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    const className = `fav ${favd ? 'favd' : ''}`;

    return (
        <a ref={favRef} className={className} id="fav">
            <svg className="stableHeart" viewBox="-1 0 18 15">
                <defs>
                    <path
                        d="M16 4.872c0-4.9-6.894-5.8-8 .695C6.81-.928 0-.027 0 5.25c0 5.274 8 9.697 8 9.697s8-5.177 8-10.075z"
                        id="heartPath"
                    > </path>
                </defs>

                <use xlinkHref="#heartPath" />
            </svg>
            <svg className="floatHeart" viewBox="-1 0 18 15">
                <use xlinkHref="#heartPath" />
            </svg>
        </a>
    );
}

export default Star;
