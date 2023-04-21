import React from 'react'
import {
    Link 
} from 'react-router-dom'

function HeaderLink({ classNames, link, linkText }) {
    return (
        <>
                <Link
                    to={ link }
                    className={`${ classNames } font-poppins text-sm tracking-wider font`}
                >
                    { linkText }
                </Link>
        </>
    )
}

export default HeaderLink