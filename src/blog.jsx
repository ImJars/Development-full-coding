import React from 'react'
import PinedCard from './components/blog/pined-card'
import Wraped from './components/wraped'

function Blog() {
    return (
        <>
            <section
                className='bg-primary w-full h-screen text-white'
            >
                <Wraped>
                    <div
                        className='pb-20'
                    >
                        <h1
                            className='text-7xl font-bold tracking-wide pt-40'
                        >
                            Personal Blog
                        </h1>
                        <h2
                            className='text-text-general text-2xl tracking-wide mt-8'
                        >
                            Web development thoughts and stories.
                        </h2>
                    </div>
                    <div
                        className='flex flex-col gap-8 md:flex-row md:gap-8 lg:gap-24'
                    >
                        <div
                            className='md:w-64'
                        />
                        <div
                            className='flex-1'
                        >
                            <PinedCard 
                                date='February 12, 2021 • English'
                                title='Tailwind CSS: Best Practices'
                                description='A collection of best practices for Tailwind CSS.'
                            />
                        </div>
                    </div>
                </Wraped>
            </section>
        </>
    )
}

export default Blog