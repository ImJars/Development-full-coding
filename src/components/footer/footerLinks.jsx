import React from 'react'

function FooterLink({ link, classNames, text }) {
    return (
        <>
            <a 
                href={ link }
                className='flex justify-center sm:justify-end sm:items-center mt-1 sm:mt-0'
            >
                <h1
                    className={`${ classNames } font-poppins text-sm sm:text-sm mb-2`}
                >
                    { text }
                </h1>
            </a>
        </>
    )
}

export default FooterLink