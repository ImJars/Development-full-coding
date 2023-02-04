import React from 'react'

function CardAbout({ icon, description }) {
    return (
        <>
            <div>
                <div>
                    { icon }
                    { description }
                </div>
            </div>
        </>
    )
}

export default CardAbout