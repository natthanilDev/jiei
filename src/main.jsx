import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Index from './Index/Index'
import About from './About/About'
import NotFound from './NotFound/NotFound'
import News from './News/News'
import Contact from './Contact/Contact'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/news' element={<News />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </HashRouter>

  </StrictMode>,
)
