import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import './App.css'
import Navigation from './Components/Navigation'
import HomePage from './Components/HomePage'
import NotFoundPage from './Components/NotFoundPage'
import AboutPage from './Components/AboutPage'
import ProjectsPage from './Components/ProjectsPage'
import ContactPage from './Components/ContactPage'

const Layout = () => {
  return(
    <>
    <div>
      <Navigation/>
      <div className="content">
      </div>
    </div>
  </>
  )
  
}

function App() {
  return (
    <>
    <div>
          <Router>
          {/* <Navigation/> */}
            <Routes>
              <Route element={<Layout/>}>
                <Route path="*" element={<NotFoundPage/>}/>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/projects' element={<ProjectsPage/>}/>
                <Route path='/contact' element={<ContactPage/>}/>
                </Route>
            </Routes>
          </Router>
      </div>
      <Analytics/>
    </>
  )
}

export default App
