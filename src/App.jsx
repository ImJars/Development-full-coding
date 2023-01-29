import React from 'react'
import Header from './components/header'

function App() {
  return (
    <>
      <Header />
      <div
        className='text-4xl text-gray-900 flex
                  items-center justify-center h-screen
                  w-full font-bold bg-slate-400'
      >
        React App
      </div>
      <div
        className='text-4xl text-gray-900 flex
                  items-center justify-center h-screen
                  w-full font-bold bg-slate-400'
      >
        React Section
      </div>
    </>
  )
}

export default App
