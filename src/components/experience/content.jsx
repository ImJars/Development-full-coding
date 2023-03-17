import React from 'react'
import { AiOutlineMore } from 'react-icons/ai'

function Content({ title, company, date, description }) {
  return (
    <>
        <div
            className='py-14 border-b border-text-general border-opacity-20'
        >
            <div
                className='flex flex-col'
            >
                <h1
                    className='text-4xl font-bold text-text-white-gray tracking-wide mb-5'
                >
                    { title }
                </h1>
                <div
                    className='flex gap-1 items-center text-text-general mb-5'
                >
                    <h2
                        className='font-semibold text-text-general text-base tracking-wide'
                    >
                        { company }
                    </h2>
                    <AiOutlineMore />
                    <h3
                        className='font-semibold text-sm text-text-general tracking-wide'
                    >
                        { date }
                    </h3>
                </div>
                <div
                    className='text-text-general text-base'
                >
                    { description }
                </div>
            </div>
        </div>
    </>
  )
}

export default Content