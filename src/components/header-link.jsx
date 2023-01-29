import React from 'react'

function HeaderLink({ classNames, link, linkText }) {
    return (
        <>
            <a 
                className={`${ classNames } text-sm tracking-wide`}
                href={ link }
            >
                { linkText }
            </a>
        </>
    )
}

export default HeaderLink