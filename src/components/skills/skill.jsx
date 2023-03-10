import React from 'react'

function Skill({ title, description_1, description_2 }) {
  return (
    <>
        <div
            className='mt-10'
        >
            <h1
                className='text-2xl font-bold text-text-white-gray tracking-wide'
            >
                { title }
            </h1>
            <h2
                className='text-text-general tracking-wide mt-5'
            >
                { description_1 }
            </h2>
            <h3
                className='text-text-general tracking-wide mt-5'
            >
                { description_2 }
            </h3>
        </div>
    </>
  )
}

export default Skill