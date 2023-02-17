import React from 'react'
import { MdOutlineBarChart } from 'react-icons/md'
import { AiOutlineEllipsis, AiOutlineShareAlt } from 'react-icons/ai'
import { BsFillTriangleFill } from 'react-icons/bs'

function Card({ date, title, description, link }) {
    return (
        <>
            <div
                className='flex space-x-5 my-10'
            >
                <div
                    className='border-text-general border-opacity-10 -translate-y-line border-b mt-16 w-24 block'
                />
                <div>
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
                                2534
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
                                150
                            </h1>
                            <h2>
                                Shares
                            </h2>
                        </div>
                    </div>
                    <div
                        className='flex items-center'
                    >
                        <a
                            className='flex items-center text-text-purple text-sm font-bold mt-2 space-x-2'
                            href={ link }
                        >
                            <h1>
                                read more
                            </h1>
                            <BsFillTriangleFill 
                                className='text-xxs transform rotate-90 animate-pulse'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card