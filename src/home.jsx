import React from 'react'

function Home() {
    return (
        <>
            <section
                className='w-full h-screen flex justify-center items-center
                            bg-primary text-white'
            >
                <div
                    className='max-w-display'
                >
                    <div>
                        <h1
                            className='text-lg text-text-general'
                        >
                            Hi!
                        </h1>
                        <h2
                            className='text-7xl font-bold mb-4'
                        >
                            I'm&nbsp;
                            <font className='text-text-purple'>
                                Angel
                            </font>
                            &nbsp;Ramirez
                        </h2>
                        <h3 className='text-xl text-text-general'>
                            a full-stack web developer
                        </h3>
                        <div
                            className='flex mt-6'
                        >
                            <button
                                className='bg-text-purple text-white
                                            rounded-lg px-8 py-2 font-semibold'
                            >
                                Get in Touch
                            </button>
                            <h1
                                className='flex items-center ml-4 text-text-purple 
                                        animate-pulse'
                            >
                                ● Available for hire
                            </h1>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Home