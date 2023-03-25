import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4-shot.png'
import { useNavigate } from 'react-router-dom'


import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

import { getTheme } from '../helpers/Theme'

function P2() {

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
      <body className={'agrandi3 ' + BG}>

        <div className={'project-single-flex ' + BG}>
          <div className='project-single-title project-single-title-p2'>
            <h3>COCKTAIL MIXER</h3>
            <br></br>
            <h4>React application</h4>
            <h4>React.js - Sass - Express.js</h4>
            <div className="project-single-buttons">
              <button className={'button3 ' + BG}><a className="project-link"
                href="https://gael-duchesne-cocktail-mixer.netlify.app/" target="_blank" rel="noopener noreferrer">View website </a>
              </button>
              <button className={'button3 ' + BG}><a className="project-link"
                href="https://github.com/gael37/GA-SEI-P2-CocktailMixer" target="_blank" rel="noopener noreferrer">View code </a></button>
              {/* <p className="subtext project-link2"><a className="project-link"
                href="https://github.com/gael37/GA-SEI-P2-CocktailMixer/blob/main/README.md" target="_blank" rel="noopener noreferrer">View ReadMe</a>
              </p> */}
            </div>
          </div>


          <div className='project-single-image'>
            <img className="project-image" src={p2} alt="Project One Image" width="800" height="" />
          </div>
          <div className={'project-single-info ' + BG}>
            <p className={'subtext paragraph2 ' + BG}>Second project of General Assembly&apos;s software engineering course, we worked as a
              pair in order to build a React application that consumes the public API
              CocktailsDB, using
              Express.js and Sass. I worked on the design and on React.js components including home page, cocktail
              description page
              and navigation
              bar.
            </p>
          </div>
        </div>
        <button className={'button4 ' + BG} onClick={previousPage}>⬅️</button>


      </body>
    </>
  )

}


export default P2