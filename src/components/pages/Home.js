import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import robot from '../../assets/coding-boy.gif'
import dev from '../../assets/dev-img.png'

import { useState, useEffect } from 'react'

import { getTheme } from '../helpers/Theme'

function Home() {

  const [BG, setBG] = useState('dark')
  let theme = 'dark'

  const timer = setInterval(() => {
    theme = getTheme()
    setBG(theme)
  }, 50)

  return (
    <>
      <body className={BG === 'dark' ? 'bg1' : 'bg2'}>
        <div className="flex-page">
          <section className={'sub-section ' + BG} id="home">
            {/* <p>Hi!</p> */}
            <h1 className={BG}>Gael Duchesne</h1>
            <h3>Full Stack Software Developer</h3>
            <h4>Welcome on my portfolio!</h4>
          </section>
        </div>
      </body>
    </>
  )

}


export default Home


