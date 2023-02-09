import React from 'react'
import CardNumber from './card-number'

function SubHome({ title, subtitle, text }) {
    return (
        <>
            <div>
                <div>
                    <h1
                        className='text-lg font-bold text-text-purple mb-2'
                    >
                        { title }
                    </h1>
                    <h2
                        className='text-4xl font-bold mb-5'
                    >
                        { subtitle }
                    </h2>
                    <h3
                        className='w-1/2 text-base text-text-general mb-5'
                    >
                        { text }
                    </h3>
                </div>
                <div>
                    <CardNumber />
                </div>
            </div>
        </>
    )
}

export default SubHome