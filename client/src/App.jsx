import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import Navigation from './Components/Navigation'
import HomePage from './Components/HomePage'
import NotFoundPage from './Components/NotFoundPage'

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
                </Route>
            </Routes>
          </Router>
      </div>
    </>
  )
}

export default App
