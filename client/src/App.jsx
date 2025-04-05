import React from 'react'
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import './App.css'
import HomePage from './Components/HomePage'
import NotFoundPage from './Components/NotFoundPage'
import AboutPage from './Components/AboutPage'
import ProjectsPage from './Components/ProjectsPage'
import ContactPage from './Components/ContactPage'
import ExperiencePage from './Components/ExperiencePage.jsx'
import Navigation from './Components/Navigation.jsx'

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route element={<Navigation />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/projects' element={<ProjectsPage />} />
              <Route path='/experience' element={<ExperiencePage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Router>
      </div>
      <Analytics />
    </>
  )
}

export default App
