import React from 'react'
import Wraped from './components/wraped'
import Footer from './footer'

function Skills() {
  return (
    <>
        <section
            className='bg-primary w-full h-screen text-white'
        >
            <Wraped>
                <div
                    className='pb-20'
                >
                    <p
                        className='text-text-blue text-2xl tracking-wide pt-40 font-bold'
                    >
                        Work
                    </p>
                    <h1
                        className='text-text-white-gray text-7xl font-bold tracking-wide'
                    >
                        Skills and Tools
                    </h1>
                    <h2
                        className='text-text-general text-2xl tracking-wide mt-8'
                    >
                        A look at all the programming languages, libraries, and tools I've worked with.
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

export default Skills