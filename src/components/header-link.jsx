import React from 'react'

function HeaderLink({ classNames, link, linkText }) {
    return (
        <>
            <a 
                className={`${ classNames } text-md font-semibold tracking-wide`}
                href={ link }
            >
                { linkText }
            </a>
        </>
    )
}

export default HeaderLink