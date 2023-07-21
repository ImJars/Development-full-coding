import React from 'react'

function CardNumber({ number, title, text }) {
    return (
        <>
            <div
                className='bg-secondary flex justify-center
                            items-center rounded-2xl py-4 mb-5
                            border border-text-general border-opacity-10'
            >
                <div
                    className='flex flex-col items-center justify-center'
                >
                    <div
                        className='flex justify-center items-center'
                    >
                        <h1
                            className='text-5xl sm:text-7xl font-bold text-text-general opacity-50'
                        >
                            { number }
                        </h1>
                    </div>
                    <div
                        className='flex flex-col items-center justify-center'
                    >
                        <h1
                            className='font-semibold sm:font-bold'
                        >
                            { title }
                        </h1>
                        <h2
                            className='text-text-general text-xs sm:text-sm mt-1 text-center'
                        >
                            { text }
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardNumber