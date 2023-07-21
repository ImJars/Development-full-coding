import React from 'react'
import CardNumber from './card-number'

function SubHome({ title, subtitle, text }) {
    return (
        <>
            <div>
                <h1
                    className='text-xs sm:text-lg font-bold text-text-purple mb-1'
                >
                    { title }
                </h1>
                <h2
                    className='text-xl sm:text-3xl font-bold mb-2'
                >
                    { subtitle }
                </h2>
                <h3
                    className='text-xs sm:text-base text-text-general mb-14'
                >
                    { text }
                </h3>
                <div
                    className='flex justify-center'
                >
                    <div
                        className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-0 '
                    >
                        <CardNumber 
                            number={ '1' }
                            title={ 'Typography' }
                            text={ 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
                        />
                        <CardNumber 
                            number={ '2' }
                            title={ 'Spacing' }
                            text={ 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
                        />
                        <CardNumber 
                            number={ '3' }
                            title={ 'Colors' }
                            text={ 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
                        />
                        <CardNumber 
                            number={ '4' }
                            title={ 'Effects' }
                            text={ 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubHome