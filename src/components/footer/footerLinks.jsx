import React from 'react'

function FooterLink({ link, classNames, text }) {
    return (
        <>
            <a 
                href={ link }
                className='flex justify-end items-center'
            >
                <h1
                    className={`${ classNames } font-poppins text-xs sm:text-sm mb-2`}
                >
                    { text }
                </h1>
            </a>
        </>
    )
}

export default FooterLink