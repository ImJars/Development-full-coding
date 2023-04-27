import React from 'react'

function FooterLink({ link, classNames, text }) {
    return (
        <>
            <a 
                href={ link }
            >
                <h1
                    className={`${ classNames } font-poppins text-sm mb-2 tracking-wider`}
                >
                    { text }
                </h1>
            </a>
        </>
    )
}

export default FooterLink