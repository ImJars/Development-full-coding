import React from 'react'
import { MdOutlineBarChart } from 'react-icons/md'
import { AiOutlineEllipsis, AiOutlineShareAlt } from 'react-icons/ai'

function Card({ date, title, description, link }) {
    return (
        <>
            <div
                className='flex space-x-5 my-20'
            >
                <div
                    className='border-text-general border-opacity-10 -translate-y-line border-b mt-16 w-24 block'
                />
                <div
                    className='text-start'
                >
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
                        className='text-text-general tracking-wide text-base'
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 animate-pulse"><path d="M14.5 7.40192C16.5 8.55662 16.5 11.4434 14.5 12.5981L8.5 16.0622C6.5 17.2169 4 15.7735 4 13.4641L4 6.5359C4 4.2265 6.5 2.78312 8.5 3.93782L14.5 7.40192Z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card