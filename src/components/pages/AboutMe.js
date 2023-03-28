import headshot from '../../assets/headshot3.png'
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
          <div className="about-p">
            <p>Hello, my name is Gael Duchesne, I am a passionate software engineer who loves learning new things, solving problems and aiming for development and mentorship.</p><br></br>
            <p>Coding is appealing to me as it is a complex and evolving tool that is exciting to practise.</p>
            <p>I have good communication and I am curious, positive and perseverant. Team working, expertise, honesty and respect are my core professional values.</p>
          </div>
          <div className='headshot-container'>
            <img className='headshot' src={headshot} alt='headshot'></img>
          </div>
        </section>
      </body>
    </>
  )

}


export default AboutMe


