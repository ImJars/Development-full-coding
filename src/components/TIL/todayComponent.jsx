import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'

function TodayComponent({ title, tag_1, tag_2, tag_3, description, link_1, link_2 }) {
  return (
    <>
        <div
          className='py-10'
        >
            <h1
              className='text-text-white-gray text-4xl font-bold tracking-wide mb-2'
            >
                { title }
            </h1>
            <div
              className='flex space-x-2'
            >
                <h1
                  className='text-text-purple bg-text-purple bg-opacity-10 px-2 rounded-full
                            font-light'
                >  
                  { tag_1 }
                </h1>
                <h2
                  className='text-text-purple bg-text-purple bg-opacity-10 px-2 rounded-full
                  font-light'
                >
                  { tag_2 }
                </h2>
                <h3
                  className='text-text-purple bg-text-purple bg-opacity-10 px-2 rounded-full
                  font-light'
                >
                  { tag_3 }
                </h3>
            </div>
            <h2
              className='text-text-general text-base tracking-wide mt-4'
            >
              { description }
            </h2>
            <div
              className='flex space-x-2 mt-4 items-center'
            >
              <a
                className='text-text-purple  flex space-x-1 items-center hover:text-text-white-gray hover:text-opacity-95
                          transition duration-200 ease-in-out' 
                href="#"
              >
                <h1
                  className='text-lg font-light'
                >
                  { link_1 }
                </h1>
                <div>
                  <BiLinkExternal 
                    className='text-xs'
                  />
                </div>
              </a>
              <h1
                className='text-text-general cursor-default'
              >
                —
              </h1>
              <a
                className='text-text-purple  flex space-x-1 items-center hover:text-text-white-gray hover:text-opacity-95
                          transition duration-200 ease-in-out' 
                href="#"
              >
                <h1
                  className='text-lg font-light'
                >
                  { link_2 }
                </h1>
                <div>
                  <BiLinkExternal 
                    className='text-xs'
                  />
                </div>
              </a>
            </div>
        </div>
    </>
  )
}

export default TodayComponent