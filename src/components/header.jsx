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
    }
    &.active{
        background-color: #02358c;
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
                        className='flex space-x-4'
                    >
                        <h1>
                            logo
                        </h1>
                        <HeaderLink
                            classNames={'text-purple-400 hover:text-purple-300'}
                            link={'#'}
                            linkText={'Projects'}
                        />
                        <HeaderLink
                            classNames={'text-purple-400 hover:text-purple-300'}
                            link={'#'}
                            linkText={'Blog'}
                        />
                        <HeaderLink
                            classNames={'text-blue-400 hover:text-blue-300'}
                            link={'#'}
                            linkText={'Skills & Tools'}
                        />
                        <HeaderLink
                            classNames={'text-blue-400 hover:text-blue-300'}
                            link={'#'}
                            linkText={'Experience'}
                        />
                        <HeaderLink
                            classNames={'text-blue-400 hover:text-blue-300'}
                            link={'#'}
                            linkText={'Studio'}
                        />
                        <HeaderLink
                            classNames={'text-blue-400 hover:text-blue-300'}
                            link={'#'}
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