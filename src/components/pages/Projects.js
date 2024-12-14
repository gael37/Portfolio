import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4-shot.png'
import p6 from '../../assets/sc-shot-issue-t.png'
import p8 from '../../assets/aistorebuilder-shot.png'
import p9 from '../../assets/peeksta-shot.png'
import soon from '../../assets/coming-soon.png'
import emp from '../../assets/emp-pic.png'
import gameHub from '../../assets/game-hub.png'

import html from '../../assets/html5.png'
import css from '../../assets/css-3.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import django from '../../assets/django.png'
import node from '../../assets/node-2.png'
import express from '../../assets/express.png'
import mongo from '../../assets/mongo-db.png'
import sql from '../../assets/sql.png'
import insomnia from '../../assets/insomnia.png'
import git from '../../assets/git.png'
import github from '../../assets/github.png'
import python from '../../assets/python.png'
import tableplus from '../../assets/tableplus.png'
import sass from '../../assets/logo-sass.jpeg'
import boot from '../../assets/bootstrap.png'
import mongoose from '../../assets/mongoose.png'
import radix from '../../assets/logo-radix.png'
import next from '../../assets/logo-next-js.png'
import prisma from '../../assets/logo-prisma.jpeg'
import tailwind from '../../assets/logo-tailwind.png'
import bootstrap from '../../assets/logo-bootstrap.png'
import mysql from '../../assets/logo-mysql.png'
import typescript from '../../assets/logo-ts.png'

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { getTheme } from '../helpers/Theme'

const Projects = () => {
  const [BG, setBG] = useState('dark')
  let theme = 'dark'

  const timer = setInterval(() => {
    theme = getTheme()
    setBG(theme)
  }, 50)
  // const frontEnd = ['HTML 5', 'CSS 3', 'Sass', 'JavaScript', 'React.js']
  // const backEnd = ['Python', 'Node.js', 'Express.js', 'Mongoose', 'MongoDB', 'PostgreSQL']
  // const others = ['Git', 'GitHub', 'Insomnia', 'TablePlus']
  return (
    <>
      {/* <h2>Projects</h2> */}
      <body className={BG}>
        <section className="sub-section-alternative" id="projects">
          <div className={'project-container ' + BG}>
            <Link to='/p9'>
              <div className="project-card">
                <h3>Peeksta</h3>
                <br></br>
                <h4><strong>Full stack application for tracking ads</strong></h4>
                <span>Next.js - Django - PostgreSQL</span>
                <img className="project-image" src={p9} alt="peeksta" width="800" height="" />
                <p>Professional team project</p>
                <p>26 September 2024</p>
              </div>
            </Link>
            <Link to='/p8'>
              <div className="project-card">
                <h3>AI Store Builder</h3>
                <br></br>
                <h4><strong>Full stack application for creating AI Shopify stores</strong></h4>
                <span>React.js - Django</span>
                <img className="project-image" src={p8} alt="AI Store Builder" width="800" height="" />
                <p>Professional team project</p>
                <p>01 July 2024</p>
              </div>
            </Link>
            <Link to='/p7'>
              <div className="project-card">
                <h3>Game Hub</h3>
                <br></br>
                <h4><strong>Front-end React.js application</strong></h4>
                <span>React.js - TypeScript - RadixUI</span>
                <img className="project-image" src={gameHub} alt="Game Hub" width="800" height="" />
                <p>Individual project</p>
                <p>01 Feb 2024</p>
              </div>
            </Link>
            <Link to='/p6'>
              <div className="project-card">
                <h3>Issue Tracker</h3>
                <br></br>
                <h4><strong>Full stack application for issue handling</strong></h4>
                <span>Next.js - TypeScript - Prisma - MySQL</span>
                <img className="project-image" src={p6} alt="Issue Tracker" width="800" height="" />
                <p>Individual project</p>
                <p>01 Dec 2023</p>
              </div>
            </Link>
            <Link to='/p5'>
              <div className="project-card">
                <h3>Emporium</h3>
                <br></br>
                <h4><strong>Full stack application: e-commerce</strong></h4>
                <span>React.js - Django - PostgreSQL</span>
                <img className="project-image" src={emp} alt="Emporium" width="800" height="" />
                <p>Individual project</p>
                <p>23 May 2023</p>
              </div>
            </Link>
            <Link to='/p4'>
              <div className="project-card">
                <h3>SPARE SOCK</h3>
                {/* <p>(16 Dec 2022)</p> */}
                <br></br>
                <h4><strong>Full stack application: ads platform/messaging</strong></h4>
                <span>React.js - Django - PostgreSQL</span>
                <img className="project-image" src={p4} alt="Project One Image" width="800" height="" />
                <p>Individual project</p>
                <p>16 Dec 2022</p>
              </div>
            </Link>
            <Link to='/p3'>
              <div className="project-card">
                <h3>SPROUT ANYWHERE</h3>
                <br></br>
                <h4><strong>Full stack application: e-commerce/blog</strong></h4>
                <span>React.js - Node.js + Express.js - MongoDB</span>
                <img className="project-image" src={p3} alt="Project One Image" width="600" height="" />
                <p>Group project</p>
                <p>25 Nov 2022</p>
              </div>
            </Link>
            <Link to='/p2'>
              <div className="project-card">
                <h3>COCKTAIL MIXER</h3>
                <br></br>
                <h4><strong>React application: Cocktail generator from public API</strong></h4>
                <span>React.js - Express.js</span>
                <img className="project-image" src={p2} alt="Project One Image" width="800" height="" />
                <p>Pair project</p>
                <p>4 Nov 2022</p>


              </div>
            </Link>
            <Link to='/p1'>

              <div className="project-card">
                <h3>JUNGLE FROGGER</h3>
                <br></br>
                <h4><strong>Native JavaScript game</strong></h4>
                <span>HTML5 - CSS3 - JavaScript</span>
                <img className="project-image" src={p1} alt="Project One Image" width="600" height="" />
                <p>Individual project</p>
                <p>21 Oct 2022</p>





              </div>
            </Link>
          </div>
        </section >
      </body >
    </>
  )
}


export default Projects