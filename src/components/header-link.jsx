import React from 'react'
import {
    Link 
} from 'react-router-dom'

function HeaderLink({ classNames, link, linkText }) {
    return (
        <>
                <Link
                    to={ link }
                    className={`${ classNames } text-sm font-semibold`}
                >
                    { linkText }
                </Link>
        </>
    )
}

export default HeaderLink