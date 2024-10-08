import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout'
import Index from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
         index: true,
         element: <Index/>
      },
      {
        // path: '/miinfo',
        // element: <MiInfo/>
      }
    ]
  },
  {
    
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
