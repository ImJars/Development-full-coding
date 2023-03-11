import React from 'react'
import Languajes from './components/skills/languajes'
import MainSkill from './components/skills/mainSkill'
import Skill from './components/skills/skill'
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
                            <div
                                className='text-text-general text-base tracking-wide mt-5'
                            >
                                <p>
                                    But I still like to make simple website pages like landing pages. 
                                    So, what tools did I feel comfortable using during the website creation?
                                </p>
                            </div>
                            <div>
                                <Skill 
                                    title={ 'TypeScript' }
                                    description_1={ 'First of all, the programming language. I\'m very used to using TypeScript, although website creation can be done using PHP, Python, etc.' }
                                    description_2={ 'The JavaScript superset—TypeScript—has accompanied me for about 5 years.' }
                                />
                                <Skill 
                                    title={ 'React' }
                                    description_1={ 'I really enjoy building single page application websites and React is my go-to library.' }
                                    description_2={ `I've been using it since 2018 (5 years) and have become quite proficient with it.` }
                                />
                                <Skill 
                                    title={ 'Tailwind CSS' }
                                    description_1={ `For now, I love using Tailwind CSS for styling, even though I've been using SCSS for a longer time (4 years).` }
                                    description_2={ `I'm still new to Tailwind CSS, but I'm really comfortable using it and I think it's a great tool.` }
                                />
                                <Skill 
                                    title={ 'Framer Motion' }
                                    description_1={ `For animations, I am more comfortable using Framer Motion. Creating animations using JavaScript has never been as easy as using Framer Motion.` }
                                />
                                <Skill 
                                    title={ 'Next.js' }
                                    description_1={ `I've been using CRA for a few years, but since discovering Next.js, I don't think I would want to use any other web framework. It's just that good!.` }
                                />
                            </div>
                            <div
                                className='mt-10'
                            >
                                <MainSkill 
                                    title={'UI/UX Designer'}
                                    description_1={`Designing user interfaces is something I'm really good at and I've been a UI/UX designer from 2018 to 2021 (3 years).`}
                                    description_2={`I'm always thinking about how to create the best possible user experience, in addition to creating visually appealing user interfaces.`}
                                    description_3={`The biggest challenge is finding the balance between creating a great user interface and an amazing user experience.`}
                                />
                            </div>
                            <div>
                                <h1
                                    className='text-text-white-gray text-2xl font-bold tracking-wide mt-10'
                                >
                                    Programming Languages
                                </h1>
                                <div
                                    className='flex flex-wrap gap-4 mt-5'
                                >
                                    <Languajes 
                                        title={ 'TypeScript' }
                                    />
                                    <Languajes 
                                        title={ 'JavaScript' }
                                    />
                                    <Languajes 
                                        title={ 'React' }
                                    />
                                    <Languajes 
                                        title={ 'HTML' }
                                    />
                                    <Languajes 
                                        title={ 'Tailwind CSS' }
                                    />
                                    <Languajes 
                                        title={ 'NodeJS' }
                                    />
                                    <Languajes 
                                        title={ 'Solidity' }
                                    />
                                </div>
                                <div>
                                    <h1
                                        className='text-text-white-gray text-2xl font-bold tracking-wide mt-10'
                                    >
                                        Technologies
                                    </h1>
                                    <div>
                                        
                                    </div>
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