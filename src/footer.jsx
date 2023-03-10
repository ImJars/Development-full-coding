import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import FooterLink from './components/footer/footerLinks'

function Footer() {
    return (
        <>
            <div
                className='flex flex-col'
            >
                <div
                    className='flex justify-between'
                >
                    <div
                        className='w-1/2 '
                    >
                        <h1
                            className='text-text-general font-semibold mb-4'
                        >
                            About me
                        </h1>
                        <h2
                            className='text-text-general mb-4 text-sm'
                        >
                            I'm a full-stack web developer
                            who loves to build things.
                        </h2>
                        <div
                            className='flex space-x-4 text-xl'
                        >
                            <FaTwitter />
                            <FaGithub />
                            <FaLinkedin />
                        </div>
                    </div>
                    <div
                        className='w-1/2 flex justify-between'
                    >
                        <div>
                            <h1
                                className='text-text-general font-semibold mb-4'
                            >
                                Work
                            </h1>
                            <FooterLink 
                                link={'#'}
                                text={'Contact'}
                            />
                            <FooterLink
                                link={'#'}
                                text={'Experience'}
                            />
                            <FooterLink
                                link={'#'}
                                classNames={'text-text-general'}
                                text={'Services'}
                            />
                            <FooterLink
                                link={'#'}
                                text={'Skills and Tools'}
                            />
                            <FooterLink
                                link={'#'}
                                text={'Studio'}
                            />
                        </div>
                        <div>
                            <h1
                                className='text-text-general font-semibold mb-4'
                            >
                                Learn
                            </h1>
                            <FooterLink 
                                link={'#'}
                                text={'Docs'}
                            />
                            <FooterLink
                                link={'#'}
                                text={'Personal Blog'}
                            />
                            <FooterLink
                                link={'#'}
                                text={'T.I.L'}
                            />
                        </div>
                        <div>
                            <h1
                                className='text-text-general font-semibold mb-4'
                            >
                                This Site
                            </h1>
                            <FooterLink 
                                link={'#'}
                                text={'Design Concept'}
                            />
                            <FooterLink
                                link={'#'}
                                text={'Source Code'}
                            />
                            <FooterLink
                                link={'#'}
                                text={'Credits'}
                            />
                        </div>
                    </div>
                </div>
                <div
                    className='border-t border-text-general border-opacity-20 mt-8'
                >
                    <div
                        className='flex justify-between mt-5'
                    >
                        <h1
                            className='text-text-general font-semibold text-xs'
                        >
                            ??2021, Angel Ramirez
                        </h1>
                        <h2
                            className='text-text-general font-semibold text-xs'
                        >
                            see the recent update on GitHub
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer