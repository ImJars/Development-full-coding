import React from 'react'

function IconHome({ classNames, icon }) {
    return (
        <li
            className={`${ classNames } text-2xl text-text-general transition duration-300 ease-in-out transform hover:scale-125 cursor-pointer`}
        >
            { icon }
        </li>
    )
}

export default IconHome