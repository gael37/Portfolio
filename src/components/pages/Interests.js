import headshot from '../../assets/headshot.png'
import { useState, useEffect } from 'react'

import { getTheme } from '../helpers/Theme'

function AboutMe() {

  const [BG, setBG] = useState('dark')
  let theme = 'dark'

  const timer = setInterval(() => {
    theme = getTheme()
    setBG(theme)
  }, 50)

  return (
    <>
      <body className={'agrandi4 ' + BG}>

        <section className="sub-section" id="about-me">
          <p className="paragraph3">🏀 Basketball: either playing casual or more serious games, it is a fun way for me to compete
            and connect with people.
          </p>
          <p className="paragraph3">🕹️ Video games: they enable me to evade and to have fun when I have some free time.</p>
          <p className="paragraph3">🛡️ History: I like spending time learning about historical facts, battles and what was at
            stake
            during major conflicts.</p>
          <p className='paragraph3'>⚗️ Science: I’ve always loved physics and astronomy and getting to study the laws that
            describe
            the world around us.</p>
        </section>
      </body>
    </>

  )

}


export default AboutMe


