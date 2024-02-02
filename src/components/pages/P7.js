import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4-shot.png'
import emp from '../../assets/emp-pic.png'
import p6 from '../../assets/sc-shot-issue-t.png'
import videoTest from '../../assets/emp-test2.mp4'
import gameHub from '../../assets/game-hub.png'
import { useNavigate } from 'react-router-dom'


import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

import { getTheme } from '../helpers/Theme'

function P7() {

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
            <h3>GAME HUB</h3>
            <br></br>
            <h4>Front-end React.js application</h4>
            <h4>React.js - TypeScript - ChakraUI</h4>
            <div className="project-single-buttons">
              <button className={'button3 ' + BG}><a className="project-link" href="https://video-game-hub-gaels-projects-02e85a54.vercel.app/"
                target="_blank" rel="noopener noreferrer">View website</a>
              </button>
              <button className={'button3 ' + BG}><a className="project-link" href="https://github.com/gael37/game-hub"
                target="_blank" rel="noopener noreferrer">View code </a></button>
              {/* <p className="subtext project-link2"><a className="project-link"
          href="https://github.com/gael37/GA-P4-SpareSock/blob/main/README.md" target="_blank" rel="noopener noreferrer">View
          ReadMe</a></p> */}
            </div>
          </div>


          <div className='project-single-image'>
            <img className="project-image" src={gameHub} alt="Project One Image" width="800" height="" />
          </div>
          <div className={'project-single-info ' + BG}>
            <p className={'subtext paragraph2 ' + BG}>I built a web app called Game Hub using <span>React.js with TypeScript and ChakraUI</span>, deployed on Vercel.
              This app consumes Rawg API for displaying video games, with a few filters. When clicking on the game cards, the user has access to a more detailed description of the video game with a video trailer, if available.
              During this project, I emphasized my work on writing clean code and reusable components, applying software design principles such as single responsibility and dependency inversion.
            </p>
          </div>
        </div>
        <button className={'button4 ' + BG} onClick={previousPage}>⬅️</button>

      </body>

    </>
  )

}


export default P7