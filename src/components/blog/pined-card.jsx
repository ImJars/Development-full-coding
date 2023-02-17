import React from 'react'
import { BsPinFill } from 'react-icons/bs'
import { MdOutlineBarChart } from 'react-icons/md'
import { AiOutlineEllipsis, AiOutlineShareAlt } from 'react-icons/ai'

function PinedCard({ date, title, description }) {
    return (
        <>
            <div
                className='border border-text-general rounded-2xl border-opacity-10 mb-8'
            >
                <div
                    className='p-6 block'
                >
                    <div
                        className='flex space-x-2 items-center mb-4 text-text-purple'
                    >
                        <BsPinFill 
                            className='text-xl'
                        />
                        <h1
                            className='font-semibold'
                        >
                            Pinned Post
                        </h1>
                    </div>
                    <h1
                        className='text-text-general text-xs font-semibold mb-1'
                    >
                        { date }
                    </h1>
                    <h2
                        className='text-text-white-gray text-2xl font-bold mb-2 tracking-wide'
                    >
                        { title }
                    </h2>
                    <h3
                        className='text-text-general tracking-wide text-lg'
                    >
                        { description }
                    </h3>
                    <div
                        className='flex space-x-2 items-center mt-2'
                    >   
                        <div
                            className='flex items-center text-text-general text-xs space-x-1'
                        >
                            <MdOutlineBarChart 
                                className='text-lg'
                            />
                            <h1>
                                1485
                            </h1>
                            <h2>
                                Views
                            </h2>
                        </div>
                        <font
                            className='text-text-general text-xl'
                        >
                            <AiOutlineEllipsis />
                        </font>
                        <div
                            className='flex items-center text-text-general text-xs space-x-1'
                        >
                            <AiOutlineShareAlt 
                                className='text-lg'
                            />
                            <h1>
                                27
                            </h1>
                            <h2>
                                Shares
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PinedCard