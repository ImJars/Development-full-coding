import React from 'react'

function FooterLink({ link, classNames, text }) {
    return (
        <>
            <a 
                href={ link }
            >
                <h1
                    className={`${ classNames } font-medium mb-2`}
                >
                    { text }
                </h1>
            </a>
        </>
    )
}

export default FooterLink