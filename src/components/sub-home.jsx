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
        </>
    )
}

export default SubHome