import React from 'react'
import IndexStudio from './components/studio/indexStudio'
import Wraped from './components/wraped'
import Footer from './footer'

function Studio() {
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
                        Studio
                    </h2>
                    <h3
                        className='w-2/3 text-text-general text-2xl tracking-wide mt-8'
                    >
                        A work-from-home workspace that allows me to efficiently complete most tasks.
                    </h3>
                </div>
                <div
                    className='flex justify-between'
                >
                    <div
                        className='w-2/3'
                    >

                    </div>
                    <IndexStudio 

                    />
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

export default Studio