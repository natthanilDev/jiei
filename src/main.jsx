import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Index from './Index/Index'
import './main.css'
const router = createBrowserRouter([
  {
    path:'/',
    element : <Index />
  },
  {
    path:'/about',
    element : <Index />
  },
  {
    path:'/news',
    element : <Index />
  },
  {
    path:'/contact',
    element : <Index />
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
