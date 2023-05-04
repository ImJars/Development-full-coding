import React from 'react'

function CardAbout({ extraClass, icon, description, text }) {
    return (
        <>
            <div
                className='w-full border border-text-general border-opacity-10
                            py-4 px-2 rounded-3xl'
            >
                <div
                    className='flex flex-col justify-center items-center'
                >
                    <div
                        className='flex justify-center items-center relative'
                    >
                        <div
                            className={ ` ${ extraClass } w-11 h-11 flex justify-center
                                        items-center rounded-full absolute left-1` }
                        >
                            <h1
                                className='text-xl'
                            >
                                { icon }
                            </h1>
                        </div>
                        <h1
                            className='text-sm text-white bg-card bg-opacity-50
                                        pr-32 pl-11 py-2 rounded-full ml-4 font-semibold'
                        >
                            { description }
                        </h1>
                    </div>
                    <div
                        className='h-full ml-16 mt-4 flex'
                    >
                        <h1
                            className='text-text-general text-sm'
                        >
                            { text }
                        </h1>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default CardAbout