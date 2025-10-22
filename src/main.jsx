import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from '../Router/Router'
import { RouterProvider } from 'react-router'
import TreeProvider from '../Contexts/TreeProvider'


createRoot(document.getElementById('root')).render(
  <TreeProvider>
    <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  </TreeProvider>
)
