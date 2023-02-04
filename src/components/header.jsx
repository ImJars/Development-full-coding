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
        transition: all 0.3s ease;
        z-index: 100;
    }
    &.active{
        background-color: #0F172A;
        
        transition: all 0.3s ease;
    }
`

function Header() {
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <>
            <Navbar
                className={navbar ? 'navbar active' : 'navbar'}
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