import React, {useEffect} from 'react'
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
import Studio from './studio'
import Contact from './contact'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageProject from './components/projects/project_page.jsx'

function App() {
  const { ref: refHome, inView: inViewHome } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  const animateIcon = useAnimation()
  const animateDiagon = useAnimation()

  useEffect(() => {
    if (inViewHome) {
      animateIcon.start({
        background: "#8B5CF6",
        transition: {
          type: "spring",
          duration: 0.1,
        },
      });
      animateDiagon.start({
        color: "#ffffff",
        transition: {
          type: "spring",
          duration: 0.1,
        },
      });
    }
    if (!inViewHome) {
      animateIcon.start({
        background: '#0F172A',
      });
      animateDiagon.start({
        color: "#8B5CF6",
      });
    }
  }, [inViewHome])
  
  return (
    <>
      <BrowserRouter>
        <Header 
          animateIcon={animateIcon}
          animateDiagon={animateDiagon}
        />
        <Routes>
          <Route exact path='/' element={ <Home refHome={refHome}/> } />
          <Route path='/projects' element={ <Projects /> } />
          <Route path='/blog' element={ <Blog /> } />
          <Route path='/til' element={ <Til /> } />
          <Route path='/skills' element={ <Skills /> } />
          <Route path='/experience' element={ <Experience /> } />
          <Route path='/studio' element={ <Studio /> } />
          <Route path='/contact' element={ <Contact /> } />

          {/* Links to the projects: */}
          <Route path='/project_page' element={ <PageProject/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
