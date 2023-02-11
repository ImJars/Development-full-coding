import React from 'react'
import styled from 'styled-components'

const ContentWraped = styled.section`
    margin-left: auto;
    margin-right: auto;
    max-width: 75rem;
    padding-left: 4rem;
    padding-right: 4rem;

`

function Wraped({ children }) {
    return (
        <>
            <ContentWraped>
                { children }
            </ContentWraped>
        </>
    )
}

export default Wraped