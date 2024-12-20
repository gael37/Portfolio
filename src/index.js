import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'
import { RouterProvider } from 'react-router-dom'

import { useState } from 'react'
import React from 'react'

import { BrowserRouter, Routes, Route, Outlet, createBrowserRouter } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import NotFound from './components/pages/NotFound'
import Skills from './components/pages/Skills'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import Navbar from './components/navbar/Navbar'
import AboutMe from './components/pages/AboutMe'
import SignIn from './components/pages/Sign In'
import P9 from './components/pages/P9'
import P8 from './components/pages/P8'
import P7 from './components/pages/P7'
import P6 from './components/pages/P6'
import P5 from './components/pages/P5'
import P4 from './components/pages/P4'
import P3 from './components/pages/P3'
import P2 from './components/pages/P2'
import P1 from './components/pages/P1'
import Interests from './components/pages/Interests'

const AppLayout = () => {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about-me',
        element: <AboutMe />
      },
      {
        path: '/skills',
        element: <Skills />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/interests',
        element: <Interests />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/p9',
        element: <P9 />
      },
      {
        path: '/p8',
        element: <P8 />
      },
      {
        path: '/p7',
        element: <P7 />
      },
      {
        path: '/p6',
        element: <P6 />
      },
      {
        path: '/p5',
        element: <P5 />
      },
      {
        path: '/p4',
        element: <P4 />
      },
      {
        path: '/p3',
        element: <P3 />
      },
      {
        path: '/p2',
        element: <P2 />
      },
      {
        path: '/p1',
        element: <P1 />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)