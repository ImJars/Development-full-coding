import React from 'react'
import Wraped from './components/wraped'
import Footer from "./footer";

function Projects() {
    return (
        <>
            <section
                className='bg-primary w-full text-white'
            >
                <Wraped>
                    <div
                        className='pb-40'
                    >
                        <div>
                            <h1
                                className='text-7xl font-bold tracking-wide pt-40'
                            >
                                Projects
                            </h1>
                            <h2
                                className='text-text-general text-2xl tracking-wide mt-8'
                            >
                                Showcase of my full-stack related work.
                            </h2>
                        </div>
                        <div
                            className='mt-20'
                        >
                            <h1
                                className='text-sm text-text-purple font-bold tracking-wide mb-4'
                            >
                                tailwindcss-accent
                            </h1>
                            <h2
                                className='text-4xl font-bold tracking-wide'
                            >
                                The dynamic accent colors.
                            </h2>
                            <h3
                                className='text-text-general tracking-wide mt-5 w-1/2'
                            >
                                Add accent colors for dynamic, flexible color use in your Tailwind CSS project.
                            </h3>
                        </div>
                    </div>
                </Wraped>
                <Wraped>
                    <Footer />
                </Wraped>
            </section>
        </>
    )
}

export default Projects