import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Layout } from './components/layout'
import "./index.css"
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QrScanned } from './components/QrScanned/QrScanned'
import { QrCodeGenerate } from './components/QrGenerate/QrGenerate'
import { Layout } from "./components/Layout/Layout.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />
  },
  {
    path: "/scaner",
    element: <QrScanned />
  },
  {
    path: "/generate",
    element: <QrCodeGenerate />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Layout /> */}
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </StrictMode>,
)
