import React from 'react'
import Wraped from './components/wraped'

function Experience() {
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
                        className='text-text-blue text-2xl tracking-wide pt-40 font-bold'
                    >
                        Work
                    </h1>
                    <h2
                        className='text-text-white-gray text-7xl font-bold tracking-wide'
                    >
                        Experience
                    </h2>
                    <h3
                        className='text-text-general text-2xl tracking-wide mt-8'
                    >
                        All about my freelance, self-employed, and professional work experience.
                    </h3>
                </div>
            </Wraped>
        </section>
    </>
  )
}

export default Experience