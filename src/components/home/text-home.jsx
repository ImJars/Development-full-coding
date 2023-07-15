import React from 'react'
import styled from 'styled-components'

const Texto = styled.span`
    font-size: clamp(1.875rem, 0.3125rem + 6.25vw, 4rem);
`

function TextHome({ text }) {
    return (
        <>
            <div
                className='flex justify-center items-center py-10 text-center'
            >
                <Texto>
                    { text }
                </Texto>
            </div>
        </>
    )
}

export default TextHome