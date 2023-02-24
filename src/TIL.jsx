import React from 'react'
import Wraped from './components/wraped'
import Footer from './footer'

function Til() {
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
                            className='text-text-white-gray text-7xl font-bold tracking-wide pt-40'
                        >
                            Today I Learned
                        </h1>
                        <h2
                            className='text-text-general text-2xl tracking-wide mt-8'
                        >
                            Short notes on full-stack related topics.
                        </h2>
                    </div>
                    <div
                        className='mt-20'
                    >
                        <Footer />
                    </div>
                </Wraped>
            </section>
        </>
    )
}

export default Til