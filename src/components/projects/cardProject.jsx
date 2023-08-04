import React from 'react'

function CardProject({ icon, title, text }) {
  return (
    <>
        <div
            className='bg-secondary flex justify-center
                        items-center rounded-2xl p-5 mb-5
                        border border-text-general border-opacity-10 font-poppins'
        >
            <div
                className='flex items-center'
            >
                <div
                    className='mr-4'                >
                    <h1
                        className='text-6xl font-bold text-text-general opacity-50'
                    >
                        { icon }
                    </h1>
                </div>
                <div
                    className=''
                >
                    <h1
                        className='font-bold xl:text-sm'
                    >
                        { title }
                    </h1>
                    <h2
                        className='text-text-general text-xs mt-1'
                    >
                        { text }
                    </h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardProject