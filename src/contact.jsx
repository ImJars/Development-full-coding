import React from 'react'
import Wraped from './components/wraped'
import Footer from './footer'

function Contact() {
  return (
    <>
        <section
            className='bg-update_primary w-full h-screen text-text-white-gray'
        >
            <Wraped>
                <div
                    className='pb-20'
                >
                    <h1
                        className='text-update_secondary text-2xl tracking-wide pt-40 font-bold'
                    >
                        Work
                    </h1>
                    <h2
                        className='text-text-white-gray text-7xl font-bold tracking-wide'
                    >
                        Contact
                    </h2>
                    <h3
                        className='text-text-general text-2xl tracking-wide mt-8'
                    >
                        Get in touch with me anytime, through social media, e-mail, or phone number.
                    </h3>
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

export default Contact