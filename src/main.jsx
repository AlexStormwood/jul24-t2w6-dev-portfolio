import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import { BasePageLayout } from './pages/layouts/BasePageLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectsPage } from './pages/ProjectsPage';
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
                <Route path='about' element={<AboutPage />} />

                {/* localhost:5173/contact */}
                <Route path='contact' element={<ContactPage />} />

                {/* localhost:5173/projects */}
                <Route path='projects' element={<ProjectsPage />} />
              </Route>


              

            </Routes>

    </BrowserRouter>
  </StrictMode>,
)
