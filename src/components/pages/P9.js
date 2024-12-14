
import p9 from '../../assets/peeksta-shot.png'
import { useNavigate } from 'react-router-dom'


import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

import { getTheme } from '../helpers/Theme'

function P9() {

  const navigate = useNavigate()

  const previousPage = () => {
    navigate('/projects')
  }

  const [BG, setBG] = useState('dark')
  let theme = 'dark'

  const timer = setInterval(() => {
    theme = getTheme()
    setBG(theme)
  }, 50)

  return (
    <>
      <body className={'agrandi agrandi7 ' + BG}>

        <div className={'project-single-flex ' + BG}>
          <div className='project-single-title'>
            <h3>Peeksta</h3>
            <br></br>
            <h4>Full stack application for tracking ads</h4>
            <h4>Next.js - Django - PostgreSQL</h4>
            <div className="project-single-buttons">
              <button className={'button3 ' + BG}><a className="project-link" href="https://app.peeksta.com/dashboard"
                target="_blank" rel="noopener noreferrer">View website</a>
              </button>
              {/* <p className="subtext project-link2"><a className="project-link"
          href="https://github.com/gael37/GA-P4-SpareSock/blob/main/README.md" target="_blank" rel="noopener noreferrer">View
          ReadMe</a></p> */}
            </div>
          </div>


          <div className='project-single-image'>
            <img className="project-image" src={p9} alt="Project One Image" width="800" height="" />
          </div>
          <div className={'project-single-info ' + BG}>
            <p className={'subtext paragraph2 ' + BG}>Full stack development using <span>Next.js, Django</span> and <span>PostgreSQL</span> and deployment on AWS of a web application: peeksta. Multi- feature app for dropshippers enabling them to view, sort, save, track and analyse Facebook ads over time.
            </p>
          </div>
        </div>
        <button className={'button4 ' + BG} onClick={previousPage}>⬅️</button>

      </body>

    </>
  )

}


export default P9