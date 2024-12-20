import aws from '../../assets/aws-logo.png'
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

import { useState, useEffect } from 'react'

import { getTheme } from '../helpers/Theme'

function Skills() {
  const [BG, setBG] = useState('dark')
  let theme = 'dark'

  const timer = setInterval(() => {
    theme = getTheme()
    setBG(theme)
  }, 50)

  return (
    <>
      {/* <h2>Skills</h2> */}
      <body className={'agrandi ' + BG}>
        <section className="skills" id="skills">

          <h2 className={'h2-top ' + BG}>Frameworks</h2>
          <ul id="flex-wrap-logos">
            <li className='flex-skill-li'><img src={next} alt="Next.js" width="100" height="100" />
              <p>Next.js</p>
            </li>
            <li className='flex-skill-li'><img src={react} alt="React logo" width="100" height="100" />
              <p>React.js</p>
            </li>
            <li className='flex-skill-li'><img src={node} alt="Node logo" width="100" height="100" />
              <p>Node.js + Express</p>
            </li>
            <li className='flex-skill-li'><img src={django} alt="Django logo" width="100" height="100" />
              <p>Django</p>
            </li>
          </ul>

          <h2 className={'h2-top ' + BG}>Programming Languages</h2>
          <ul id="flex-wrap-logos">
            <li className='flex-skill-li'><img src={html} alt="HTML5 logo" width="100" height="100" />
              <p>HTML 5</p>
            </li>
            <li className='flex-skill-li'><img src={css} alt="CSS logo" width="100" height="100" />
              <p>CSS 3</p>
            </li>
            <li className='flex-skill-li'><img src={js} alt="JavaScript logo" width="100" height="100" />
              <p>JavaScript</p>
            </li>
            <li className='flex-skill-li'><img src={typescript} alt="TypeScript logo" width="100" height="100" />
              <p>TypeScript</p>
            </li>
            <li className='flex-skill-li'><img src={python} alt="Python logo" width="100" height="100" />
              <p>Python</p>
            </li>
          </ul>

          <h2 className={'h2-top ' + BG}>Database Engines / ORMs</h2>
          <ul id="flex-wrap-logos">
            {/* <li className='flex-skill-li'><img src={express} alt="Express.js logo" width="100" height="100" />
              <p>Express.js</p>
            </li> */}
            <li className='flex-skill-li'><img src={mongo} alt="MongoDB logo" width="100" height="100" />
              <p>MongoDB</p>
            </li>
            <li className='flex-skill-li'><img src={mongoose} alt="Mongoose logo" height="100" width='98' />
              <p>Mongoose</p>
            </li>
            <li className='flex-skill-li'><img src={sql} alt="PostgreSQL logo" width="100" height="100" />
              <p>PostgreSQL</p>
            </li>
            <li className='flex-skill-li'><img src={mysql} alt="MySQL logo" width="100" height="100" />
              <p>MySQL</p>
            </li>
            <li className='flex-skill-li'><img src={prisma} alt="Prisma logo" width="100" height="100" />
              <p>Prisma</p>
            </li>

          </ul>

          <h2 className={'h2-top ' + BG}>Others</h2>
          <ul id="flex-wrap-logos">
            <li className='flex-skill-li'><img src={aws} alt="AWS logo" width="100" height="100" />
              <p>AWS</p>
            </li>
            <li className='flex-skill-li'><img src={git} alt="Git logo" width="100" height="100" />
              <p>Git</p>
            </li>
            <li className='flex-skill-li'><img src={github} alt="Github logo" width="100" height="100" />
              <p>GitHub</p>
            </li>
            <li className='flex-skill-li'><img src={sass} alt="Sass logo" width="100" height="100" />
              <p>Sass</p>
            </li>
            <li className='flex-skill-li'><img src={tailwind} alt="Tailwind" width="100" height="100" />
              <p>Tailwind</p>
            </li>
            <li className='flex-skill-li'><img src={radix} alt="Radix UI" width="100" height="100" />
              <p>Radix UI</p>
            </li>
            <li className='flex-skill-li'><img src={bootstrap} alt="Bootstrap" width="100" height="100" />
              <p>Bootstrap</p>
            </li>

            {/* <li className='flex-skill-li'><img src={insomnia} alt="Insomnia logo" width="100" height="100" />
              <p>Insomnia</p>
            </li>
            <li className='flex-skill-li'><img src={tableplus} alt="TablePlus logo" width="100" height="100" />
              <p>TablePlus</p>
            </li> */}
          </ul>
        </section>
      </body>
    </>
  )

}


export default Skills