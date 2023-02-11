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
                    className='flex items-center'
                >
                    <div
                        className='mr-10'
                    >
                        <h1
                            className='text-7xl font-bold text-text-general opacity-50'
                        >
                            { number }
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

export default CardNumber