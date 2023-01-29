import React from 'react'
import { BsTwitter, BsGithub } from 'react-icons/bs'

function Header() {
    return (
        <>
            <div
                className='fixed w-full h-14 bg-slate-500'
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
                        <h7>
                            Contact
                        </h7>
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
            </div>
        </>
    )
}

export default Header