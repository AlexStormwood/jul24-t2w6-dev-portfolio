import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import { BasePageLayout } from './pages/layouts/BasePageLayout';
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <BrowserRouter>
    
            <h1>Cool global content</h1>
            <Routes>

              <Route path='/' element={<BasePageLayout />} >

                {/* localhost:5173/ */}
                <Route index element={<HomePage />} />
              
                {/* localhost:5173/about */}
                <Route path='about' element={<h1>About Page route content</h1>} />

                {/* localhost:5173/contact */}
                <Route path='contact' element={<h1>Contact Page route content</h1>} />

                {/* localhost:5173/projects */}
                <Route path='projects' element={<h1>Project Page route content</h1>} />
              </Route>


              

            </Routes>

    </BrowserRouter>
  </StrictMode>,
)
