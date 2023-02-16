import React from 'react'
import Wraped from './components/wraped'

function Blog() {
    return (
        <>
            <section
                className='bg-primary w-full h-screen text-white'
            >
                <Wraped>
                    <div>
                        <h1
                            className='text-7xl font-bold tracking-wide pt-40'
                        >
                            Personal Blog
                        </h1>
                        <h2
                            className='text-text-general text-2xl tracking-wide mt-8'
                        >
                            Web development thoughts and stories.
                        </h2>
                    </div>
                    <div>
                        
                    </div>
                </Wraped>
            </section>
        </>
    )
}

export default Blog