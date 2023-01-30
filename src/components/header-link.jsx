import React from 'react'
import {
    Link 
} from 'react-router-dom'

function HeaderLink({ classNames, link, linkText }) {
    return (
        <>
                <Link
                    to={ link }
                    className={`${ classNames } text-md font-semibold tracking-wide`}
                >
                    { linkText }
                </Link>
        </>
    )
}

export default HeaderLink