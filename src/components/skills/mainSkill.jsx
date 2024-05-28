import React from 'react'

function MainSkill({ title, description_1, description_2, description_3 }) {
  return (
    <>
      <div
        className='border-t border-b border-text-general border-opacity-20 mx-4 sm:mx-0'
      >
        <div
          className='py-10'
        >
          <h1
            className='text-2xl sm:text-3xl font-bold text-text-white-gray'
          >
            { title }
          </h1>
          <p
            className='mt-4 text-text-general tracking-wide text-sm sm:text-base'
          >
            { description_1 }
          </p>
          <p
            className='mt-4 text-text-general tracking-wide text-sm sm:text-base'
          >
            { description_2 }
          </p>
          <p
            className='mt-4 text-text-general tracking-wide text-sm sm:text-base'
          >
            { description_3 }
          </p>
        </div>
      </div>
    </>
  )
}

export default MainSkill