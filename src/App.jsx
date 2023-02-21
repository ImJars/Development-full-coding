import React from 'react'
import Header from './components/header'
import Home from './home'
import Blog from './blog'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Projects from './projects'
import Til from './TIL'
import Skills from './skills'
import Experience from './experience'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route path='/projects' element={ <Projects /> } />
          <Route path='/blog' element={ <Blog /> } />
          <Route path='/til' element={ <Til /> } />
          <Route path='/skills' element={ <Skills /> } />
          <Route path='/experience' element={ <Experience /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
