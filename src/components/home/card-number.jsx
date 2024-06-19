import React from 'react'

function CardNumber({ number, title, text }) {
    return (
        <>
            <div
                className='bg-table-color flex justify-center
                            items-center rounded-2xl py-8
                            border border-text-general border-opacity-25'
            >
                <div
                    className='flex flex-col items-center justify-center'
                >
                    <div
                        className='flex justify-center items-center'
                    >
                        <h1
                            className='text-5xl font-bold text-text-general opacity-50'
                        >
                            { number }
                        </h1>
                    </div>
                    <div
                        className='flex flex-col items-center justify-center'
                    >
                        <h1
                            className='text-text-general font-medium text-xs sm:text-sm mt-3 mx-2 flex justify-center text-center'
                        >
                            { title }
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardNumber