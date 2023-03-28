import lkn from '../../assets/linkedin-tile.svg'
import github from '../../assets/github.svg'
import { useState, useEffect } from 'react'

import { getTheme } from '../helpers/Theme'
function Contact() {

  const [BG, setBG] = useState('dark')
  let theme = 'dark'

  const timer = setInterval(() => {
    theme = getTheme()
    setBG(theme)
  }, 50)

  return (
    <>
      <body className={'agrandi5 ' + BG}>
        {/* <h2>Contact me</h2> */}
        <div className='contact-flex'>
          <a href="https://github.com/gael37" target="_blank" className="social" rel='noopener noreferrer'>
            <img src={github} width="40" />
          </a>
          <br />
          <a href="https://www.linkedin.com/in/gael-duchesne/" target="_blank" className="social" rel='noopener noreferrer'>
            <img src={lkn} width="40" />
          </a>
          <br />
          <p>gx.duchesne@gmail.com</p>
        </div>
      </body>


    </>
  )

}


export default Contact