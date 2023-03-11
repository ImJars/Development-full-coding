import React from 'react'

function MainSkill({ title, description_1, description_2, description_3 }) {
  return (
    <>
      <div
        className='border-t border-b border-text-general border-opacity-20'
      >
        <div
          className='py-10'
        >
          <h1
            className='text-3xl font-bold text-text-white-gray'
          >
            { title }
          </h1>
          <p
            className='mt-4 text-text-general tracking-wide'
          >
            { description_1 }
          </p>
          <p
            className='mt-4 text-text-general tracking-wide'
          >
            { description_2 }
          </p>
          <p
            className='mt-4 text-text-general tracking-wide'
          >
            { description_3 }
          </p>
        </div>
      </div>
    </>
  )
}

export default MainSkill