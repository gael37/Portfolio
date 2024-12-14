
import p8 from '../../assets/aistorebuilder-shot.png'
import { useNavigate } from 'react-router-dom'


import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

import { getTheme } from '../helpers/Theme'

function P8() {

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
            <h3>AI Store Builder</h3>
            <br></br>
            <h4>Full stack application for creating AI Shopify stores</h4>
            <h4>React.js - Django</h4>
            <div className="project-single-buttons">
              <button className={'button3 ' + BG}><a className="project-link" href="https://www.ecomkingstore.com/"
                target="_blank" rel="noopener noreferrer">View website</a>
              </button>
              {/* <p className="subtext project-link2"><a className="project-link"
          href="https://github.com/gael37/GA-P4-SpareSock/blob/main/README.md" target="_blank" rel="noopener noreferrer">View
          ReadMe</a></p> */}
            </div>
          </div>


          <div className='project-single-image'>
            <img className="project-image" src={p8} alt="Project One Image" width="800" height="" />
          </div>
          <div className={'project-single-info ' + BG}>
            <p className={'subtext paragraph2 ' + BG}>Full stack development using <span>React.js</span> and <span>Django</span> and deployment on <span>AWS</span> of a web application: AI Store Builder. Involved usage of Shopify API, OpenAI API and Cloudinary API in real time, enabling users to dynamically create a tailored Shopify Store using AI in a few minutes, according to their inputs (niche, color scheme, etc).
            </p>
          </div>
        </div>
        <button className={'button4 ' + BG} onClick={previousPage}>⬅️</button>

      </body>

    </>
  )

}


export default P8