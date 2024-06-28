import React from 'react'

function Skill({ title, description_1, description_2, description_3}) {
  return (
    <>
        <div
            className='mt-11 mx-4 xl:mx-0'
        >
            <h1
                className='text-2xl sm:text-3xl font-bold text-text-white-gray tracking-wide'
            >
                { title }
            </h1>
            <h2
                className='text-text-general mt-4 text-sm sm:text-base'
            >
                { description_1 }
            </h2>
            <h3
                className='text-text-general tracking-wide mt-5 text-sm sm:text-base' 
            >
                { description_2 }
            </h3>
            <h4
                className='text-text-general tracking-wide mt-5 text-sm sm:text-base' 
            >
                { description_3 }
            </h4>
        </div>
    </>
  )
}

export default Skill