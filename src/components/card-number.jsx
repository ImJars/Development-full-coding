import React from 'react'

function CardNumber() {
    return (
        <>
            <div
                className='bg-secondary w-1/2 flex justify-center
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
                            1
                        </h1>
                    </div>
                    <div
                        className=''
                    >
                        <h1
                            className='font-bold'
                        >
                            Typography
                        </h1>
                        <h2
                            className='text-text-general text-sm mt-1'
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardNumber