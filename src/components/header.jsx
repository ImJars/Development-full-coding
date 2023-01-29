import React, { useState } from 'react'
import styled from 'styled-components'
import { BsTwitter, BsGithub } from 'react-icons/bs'

const Navbar = styled.header`
    &.navbar{
        background-color: #2d3748;
        height: 3.5rem;
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
                        <h2>
                            projects
                        </h2>
                        <h3>
                            blog
                        </h3>
                        <h4>
                            Skills & Tools 
                        </h4>
                        <h5>
                            Experience
                        </h5>
                        <h6>
                            Studio
                        </h6>
                        <h6>
                            Contact
                        </h6>
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