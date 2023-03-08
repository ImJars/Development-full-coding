import React from 'react'
import Wraped from './components/wraped'
import Footer from './footer'

function Skills() {
  return (
    <>
        <section
            className='bg-primary w-full h-full text-white'
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
                        className='w-2/3 text-text-general text-2xl tracking-wide mt-8'
                    >
                        A look at all the programming languages, libraries, and tools I've worked with.
                    </h2>
                </div>
                <div
                    className='flex justify-between'
                >
                    <div
                        className='w-2/3'
                    >
                        <div
                            className='border-l pl-24 border-text-general border-opacity-20 pb-96'
                        >
                            <div
                                className='border-b pb-14 border-text-general border-opacity-20
                                        text-text-general text-base tracking-wide space-y-6'
                            >
                                <h1>
                                    I started my career as a web developer about 7 years ago. 
                                    I've tried some programming languages and tech stack, 
                                    both Back-End, and Front-End.
                                </h1>
                                <h2>
                                    Even though the scope of web development is broad, 
                                    I was very interested and focused on Front-End Development 
                                    and UI/UX Design.
                                </h2>
                            </div>
                            <div
                                className='mt-10'
                            >
                                <h1
                                    className='text-text-white-gray text-3xl font-bold tracking-wide'
                                >
                                    Front-End Developer
                                </h1>
                                <h2
                                    className='text-text-general text-base tracking-wide mt-5'
                                >
                                    I love creating something that is clean and minimalistic, 
                                    attractive and has value, and of course, easy to use.
                                </h2>
                                <div
                                    className='mt-5 text-text-general text-base tracking-wide'
                                >
                                    <h1
                                        className='mb-5'
                                    >
                                        I really enjoy creating websites with rich UI components, including:
                                    </h1>
                                    <ul
                                        className='list-disc ml-5 space-y-2'
                                    >
                                        <li>
                                            Web application,
                                        </li>
                                        <li>
                                            Documentation pages,
                                        </li>
                                        <li>
                                            CMS contents layout
                                        </li>
                                        <li>
                                            Dashboard layout,
                                        </li>
                                        <li>
                                            and others.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className='-mt-48 hidden lg:block'
                    >
                        <div
                            className='sticky top-24 z-[901] w-64 xl:w-[272px]'
                        >
                            <nav
                                className='bg-table-color border border-text-general border-opacity-10 
                                        rounded-xl'
                            >
                                <div
                                    className='py-3 px-5 border-b border-text-general border-opacity-10'
                                >
                                    <h1
                                        className='text-text-white-gray text-sm font-bold tracking-wide'
                                    >
                                        Table of Contents
                                    </h1>
                                </div>
                                <div
                                    className='p-3 py-4'
                                >
                                    <ol
                                        className='flex flex-col gap-2 text-text-general text-sm'
                                    >
                                        <li
                                            className='px-2 text-text-white-gray font-semibold'
                                        >
                                            Front-End Developer
                                        </li>
                                        <li
                                            className='px-5'
                                        >
                                            TypeScript
                                        </li>
                                        <li
                                            className='px-5'
                                        >
                                            React
                                        </li>
                                        <li
                                            className='px-5'
                                        >
                                            Tailwind CSS
                                        </li>
                                        <li
                                            className='px-5'
                                        >
                                            Framer Motion
                                        </li>
                                        <li
                                            className='px-5'
                                        >
                                            Next.js
                                        </li>
                                        <li
                                            className='px-2 text-text-white-gray font-semibold'
                                        >
                                            UI/UX Designer
                                        </li>
                                        <li
                                            className='px-2 text-text-white-gray font-semibold'
                                        >
                                            Detail and Summary
                                        </li>
                                        <li
                                            className='px-5'
                                        >
                                            Programming Languages
                                        </li>
                                        <li
                                            className='px-5'
                                        >
                                            Technologies
                                        </li>
                                        <li
                                            className='px-5'
                                        >
                                            Softwares and Tools
                                        </li>
                                    </ol>
                                </div>
                            </nav>
                        </div>
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

export default Skills