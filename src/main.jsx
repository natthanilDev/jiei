import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Index from './Index/Index'
import NotFound from './NotFound/NotFound'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} errorElement={<Index />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </HashRouter>

  </StrictMode>,
)
