import React, { useState } from 'react'
import styled from 'styled-components'
import { BsTwitter, BsGithub } from 'react-icons/bs'
import HeaderLink from './header-link'

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
                    'navbar active bg-secondary/95 backdrop-blur-xs border-b border-text-general border-opacity-10' 
                    : 
                    'navbar border-0 border-opacity-0 border-text-general'
                }
            >
                <div
                    className='flex justify-between items-center w-full h-full px-4'
                >
                    <div
                        className='flex space-x-4 items-center'
                    >

                        <HeaderLink
                            classNames={'text-text-purple hover:text-purple-300'}
                            link={'/'}
                            linkText={'Projects'}
                        />
                        <HeaderLink
                            classNames={'text-text-purple hover:text-purple-300'}
                            link={'/blog'}
                            linkText={'Blog'}
                        />
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
                        <BsTwitter />
                        <BsGithub />
                        <h1>
                            Access
                        </h1>
                    </div>
                </div>
            </Navbar>
        </>
    )
}

export default Header