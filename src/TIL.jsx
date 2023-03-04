import React from 'react'
import TodayComponent from './components/TIL/todayComponent'
import Wraped from './components/wraped'
import Footer from './footer'

function Til() {
    return (
        <>
            <section
                className='bg-primary w-full h-full text-white'
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
                        className='flex w-full'
                    >
                        <div
                            className='w-1/3'
                        >

                        </div>
                        <div
                            className='w-2/3'
                        >
                            <TodayComponent 
                                title='React Hooks is a new addition in React'
                                tag_1='#React'
                                tag_2='#Hooks'
                                tag_3='#JavaScript'
                                description='React Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.'
                                link_1='issue'
                                link_2='Official Docs'
                            />
                            <TodayComponent 
                                title='Tailwind CSS is a utility-first CSS framework'
                                tag_1='#Tailwind'
                                tag_2='#CSS'
                                tag_3='#JavaScript'
                                description='Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.'
                                link_1='Credits'
                                link_2='Official Docs'
                            />
                        </div>
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