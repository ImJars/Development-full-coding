import React from 'react'

function CardProject({ icon, title, text }) {
  return (
    <>
        <div
            className='bg-secondary flex justify-center
                        items-center rounded-2xl p-5 mb-5
                        border border-text-general border-opacity-10'
        >
            <div
                className='flex items-center'
            >
                <div
                    className='mr-10 ml-4'
                >
                    <h1
                        className='text-7xl font-bold text-text-general opacity-50'
                    >
                        { icon }
                    </h1>
                </div>
                <div
                    className=''
                >
                    <h1
                        className='font-bold'
                    >
                        { title }
                    </h1>
                    <h2
                        className='text-text-general text-sm mt-1'
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