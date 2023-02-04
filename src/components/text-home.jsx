import React from 'react'

function TextHome({ text_one, text_two, text_three }) {
    return (
        <>
            <div
                className='flex justify-center items-center py-10'
            >
                <span
                    className='flex flex-col items-center space-y-2'
                >
                    <span
                        className='font-semibold text-6xl text-text-general'
                    >
                        { text_one }
                    </span>
                    <span
                        className='font-semibold text-6xl text-text-general'
                    >
                        { text_two }
                    </span>
                    <span
                        className='font-semibold text-6xl text-text-general'
                    >
                        { text_three }
                    </span>
                </span>
            </div>
        </>
    )
}

export default TextHome