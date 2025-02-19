import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router';
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <BrowserRouter>
    
            <h1>Cool global content</h1>
            <Routes>

              <Route path='/' element={<h1>Homepage route content</h1>} />
              <Route path='/about' element={<h1>About Page route content</h1>} />
              <Route path='/contact' element={<h1>Contact Page route content</h1>} />
              <Route path='/projects' element={<h1>Project Page route content</h1>} />

            </Routes>

    </BrowserRouter>
  </StrictMode>,
)
