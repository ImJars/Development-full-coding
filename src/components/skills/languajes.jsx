import React from 'react'

function Languajes({ title }) {
  return (
    <>
        <div
            className='bg-table-color border border-text-general border-opacity-10 rounded-md
                        cursor-default flex flex-col'
        >
            <h1
                className='text-xs font-mono tracking-wider text-text-white-gray py-2 px-3'
            >
                &#60;{ title }&#47;&#62;
            </h1>

        </div>
    </>
  )
}

export default Languajes