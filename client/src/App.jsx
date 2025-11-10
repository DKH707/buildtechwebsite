import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import { LoadingProvider } from './helpers/LoadingProvider.jsx'
import './App.css'
import HomePage from './Components/HomePage'
import NotFoundPage from './Components/NotFoundPage'
import AboutPage from './Components/AboutPage'
import ServicesPage from './Components/ServicesPage'
import ProjectsPage from './Components/ProjectsPage'
import ContactPage from './Components/ContactPage'
import Navigation from './Components/Navigation.jsx'

function App() {
  return (
    <>
      <div>
        <LoadingProvider>
          <Router>
            <Routes>
              <Route element={<Navigation />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/services' element={<ServicesPage />} />
                <Route path='/projects' element={<ProjectsPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Router>
        </LoadingProvider>
      </div>
      <Analytics />
    </>
  )
}

export default App
