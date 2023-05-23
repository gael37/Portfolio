import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4-shot.png'
import emp from '../../assets/emp-pic.png'
import { useNavigate } from 'react-router-dom'


import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

import { getTheme } from '../helpers/Theme'

function P4() {

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
            <h3>EMPORIUM</h3>
            <br></br>
            <h4>Full stack application</h4>
            <h4>React.js - Sass - Django - PostgreSQL - Stripe</h4>
            <h5>Note: this project is hosted via Heroku, therefore it can take up to a minute to load ⏳,<br></br> thanks for your patience 🙂</h5>
            <div className="project-single-buttons">
              <button className={'button3 ' + BG}><a className="project-link" href="https://emporium.herokuapp.com/"
                target="_blank" rel="noopener noreferrer">View website</a>
              </button>
              <button className={'button3 ' + BG}><a className="project-link" href="https://github.com/gael37/Emporium"
                target="_blank" rel="noopener noreferrer">View code </a></button>
              {/* <p className="subtext project-link2"><a className="project-link"
          href="https://github.com/gael37/GA-P4-SpareSock/blob/main/README.md" target="_blank" rel="noopener noreferrer">View
          ReadMe</a></p> */}
            </div>
          </div>


          <div className='project-single-image'>
            <img className="project-image" src={emp} alt="Project One Image" width="800" height="" />
          </div>
          <div className={'project-single-info ' + BG}>
            <p className={'subtext paragraph2 ' + BG}>My first personal project post-bootcamp, a humble mini-version of Amazon. It uses a <span>React</span> frontend with a <span>Django</span> backend and a <span>PostgreSQL</span> database.
              The user can buy and sell products, change their delivery adress, add products to their wishlist as well as post product reviews.
              They can also proceed to payments using <span>Stripe</span>.
            </p>
          </div>
        </div>
        <button className={'button4 ' + BG} onClick={previousPage}>⬅️</button>

      </body>

    </>
  )

}


export default P4