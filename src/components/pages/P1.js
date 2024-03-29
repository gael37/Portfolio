import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4-shot.png'
import { useNavigate } from 'react-router-dom'

import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

import { getTheme } from '../helpers/Theme'

function P1() {

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
      <body className={'agrandi2 agrandi9 ' + BG}>

        <div className={'project-single-flex ' + BG}>
          <div className={'project-single-title project-single-title2 ' + BG}>
            <h3 className={BG}>JUNGLE FROGGER</h3>
            <br></br>
            <h4>Native JavaScript game</h4>
            <h4>HTML5 - CSS3 - JavaScript</h4>
            <div className="project-single-buttons">
              <div className="project-links-flex-container">
                <div className="v1-links">
                  <h5>Initial version<br></br>(Oct - 2022)</h5>
                  <button className={'button3 ' + BG}><a className="project-link"
                    href="https://gael-duchesne-jungle-frogger-v1.netlify.app" target="_blank" rel="noopener noreferrer">View
                    website</a></button>
                  <button className={'button3 ' + BG}><a className="project-link"
                    href="https://github.com/gael37/GA-P1-JungleFrogger" target="_blank" rel="noopener noreferrer">View code</a></button>
                  {/* <p className="subtext project-link2"><a className="project-link"
                  href="https://github.com/gael37/GA-P1-JungleFrogger/blob/main/README.md" target="_blank" rel="noopener noreferrer">View
                  ReadMe</a></p> */}
                </div>
                <div className="v2-links">
                  <h5>Reworked version<br></br>(Feb - 2023)</h5>
                  <button className={'subtext project-link2 ' + BG + ' button3'}><a className="project-link"
                    href="https://gael-duchesne-jungle-frogger-v2.netlify.app" target="_blank" rel="noopener noreferrer">View
                    website</a></button>
                  <button className={'subtext project-link2 ' + BG + ' button3'}><a className="project-link"
                    href="https://github.com/gael37/GA-P1-JungleFrogger-Reworked" target="_blank" rel="noopener noreferrer">View code</a></button>
                  {/* <p className="subtext project-link2">ReadMe (in progress)</p> */}
                </div>


              </div>
            </div>
          </div>


          <div className='project-single-image'>
            <img className="project-image" src={p1} alt="Project One Image" width="600" height="" />
          </div>
          <div className={'project-single-info ' + BG}>
            <p className={'subtext paragraph2 ' + BG}>First project of General Assembly&apos;s software engineering course where we put into
              practice fundamental JavaScript. I had 1 week to build a grid-based game using only native JavaScript,
              HTML
              and
              CSS.
            </p>
          </div>
        </div>
        <button className={'button4 ' + BG} onClick={previousPage}>⬅️</button>
      </body>
    </>
  )

}


export default P1