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