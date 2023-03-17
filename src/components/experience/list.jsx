import React from 'react'

function List({ description }) {
  return (
    <>
        <li className="flex space-x-2 mb-2">
            <font className="text-xl">
                &#8226;
            </font>
            <p>
                { description }
            </p>
        </li>
    </>
  )
}

export default List