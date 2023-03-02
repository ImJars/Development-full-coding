import React, { useState } from 'react'
import styled from 'styled-components'
import { BsTwitter, BsGithub, BsGrid1X2Fill } from 'react-icons/bs'
import HeaderLink from './header-link'
import {
    Link 
} from 'react-router-dom'


const Navbar = styled.header`
    &.navbar{
        height: 4rem;
        width: 100%;
        position: fixed;
        color: rgb(255, 255, 255);
        transition: all 0.2s ease-in-out;
        z-index: 100;
    }
    &.active{
        transition: all 0.2s ease-in-out;
    }
`

function Header() {
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 5) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <>
            <Navbar
                className={
                    navbar 
                    ? 
                    'navbar active bg-secondary/90 backdrop-blur-xs border-b border-text-general border-opacity-10' 
                    : 
                    'navbar border-0 border-opacity-0 border-text-general'
                }
            >
                <div
                    className='flex justify-between items-center w-full h-full px-4'
                >
                    <div
                        className='flex space-x-6 items-center'
                    >
                        <div
                            className='mr-4 flex justify-center items-center space-x-2'
                        >
                            <Link
                                className='flex justify-center items-center space-x-2'
                                to='/'
                            >
                                <div
                                    className='border-2 border-text-purple rounded-lg px-2 py-2.5px
                                                grid justify-center items-center bg-text-purple'
                                >
                                    <h1
                                        className='text-white font-bold text-xs'
                                    >
                                        &#47;
                                    </h1>
                                </div>
                                <div
                                    className='flex text-xl font-bold tracking-wide'
                                >
                                    <h1>
                                        jars
                                    </h1>
                                    <h2
                                        className='text-text-purple'
                                    >
                                        dev
                                    </h2>
                                </div>
                            </Link>
                        </div>
                        <HeaderLink
                            classNames={'text-text-purple hover:text-purple-300'}
                            link={'/projects'}
                            linkText={'Projects'}
                        />
                        <HeaderLink
                            classNames={'text-text-purple hover:text-purple-300'}
                            link={'/blog'}
                            linkText={'Blog'}
                        />
                        <HeaderLink
                            classNames={'text-text-purple hover:text-purple-300'}
                            link={'/til'}
                            linkText={'T.I.L'}
                        />
                        <div
                            className='text-text-blue flex items-center space-x-1 bg-text-blue bg-opacity-20
                                        py-2 px-4 rounded-full cursor-default'
                        >
                            <h1
                                className='text-sm font-semibold'
                            >
                                Work
                            </h1>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3"><path d="M14.5 7.40192C16.5 8.55662 16.5 11.4434 14.5 12.5981L8.5 16.0622C6.5 17.2169 4 15.7735 4 13.4641L4 6.5359C4 4.2265 6.5 2.78312 8.5 3.93782L14.5 7.40192Z"></path></svg>
                        </div>
                        <HeaderLink
                            classNames={'text-text-blue hover:text-blue-300'}
                            link={'/skills'}
                            linkText={'Skills & Tools'}
                        />
                        <HeaderLink
                            classNames={'text-text-blue hover:text-blue-300'}
                            link={'/experience'}
                            linkText={'Experience'}
                        />
                        <HeaderLink
                            classNames={'text-text-blue hover:text-blue-300'}
                            link={'/studio'}
                            linkText={'Studio'}
                        />
                        <HeaderLink
                            classNames={'text-text-blue hover:text-blue-300'}
                            link={'/contact'}
                            linkText={'Contact'}
                        />
                    </div>
                    <div
                        className='flex space-x-4 items-center'
                    >
                        <div
                            className='flex items-center'
                        >
                            <a
                                href='#'
                                className='text-lg hover:bg-card hover:bg-opacity-50 rounded-xl p-2'
                            >
                                <BsTwitter />
                            </a>
                            <a
                                href='#'
                                className='text-lg hover:bg-card hover:bg-opacity-50 rounded-xl p-2'
                            >
                                <BsGithub />
                            </a>
                        </div>
                        <button
                            className='bg-card bg-opacity-50 py-2 px-3 rounded-xl flex space-x-2 items-center
                                        hover:bg-opacity-100 transition-all duration-200 ease-in-out'
                        >   <div>
                                <BsGrid1X2Fill />
                            </div>
                            <h1
                                className='text-sm'
                            >
                                Main Access
                            </h1>
                        </button>
                    </div>
                </div>
            </Navbar>
        </>
    )
}

export default Header