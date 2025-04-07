import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import { LoadingProvider } from './helpers/LoadingProvider.jsx'
import './App.css'
import HomePage from './Components/HomePage'
import NotFoundPage from './Components/NotFoundPage'
import AboutPage from './Components/AboutPage'
import ProjectsPage from './Components/ProjectsPage'
import ContactPage from './Components/ContactPage'
import ExperiencePage from './Components/ExperiencePage.jsx'
import Navigation from './Components/Navigation.jsx'
import CoffeePage from './Components/CoffeePage.jsx'

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
                <Route path='/projects' element={<ProjectsPage />} />
                <Route path='/experience' element={<ExperiencePage />} />
                <Route path='/coffee' element={<CoffeePage />} />
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
