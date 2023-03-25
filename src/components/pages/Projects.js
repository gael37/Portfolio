import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4-shot.png'

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { getTheme } from '../helpers/Theme'

const Projects = () => {
  const [BG, setBG] = useState('dark')
  let theme = 'dark'

  const timer = setInterval(() => {
    theme = getTheme()
    setBG(theme)
  }, 50)
  // const frontEnd = ['HTML 5', 'CSS 3', 'Sass', 'JavaScript', 'React.js']
  // const backEnd = ['Python', 'Node.js', 'Express.js', 'Mongoose', 'MongoDB', 'PostgreSQL']
  // const others = ['Git', 'GitHub', 'Insomnia', 'TablePlus']
  return (
    <>
      {/* <h2>Projects</h2> */}
      <body className={BG}>

        <section className="sub-section-alternative" id="projects">
          <div className={'project-container ' + BG}>
            <Link to='/p4'>
              <div className="project-card">
                <h3>SPARE SOCK</h3>
                <br></br>
                <h4>Full stack application</h4>
                <h4>React.js - Sass - Django - PostgreSQL</h4>
                <img className="project-image" src={p4} alt="Project One Image" width="800" height="" />

              </div>
            </Link>
            <Link to='/p3'>
              <div className="project-card">
                <h3>SPROUT ANYWHERE</h3>
                <br></br>
                <h4>Full stack application</h4>
                <h4>React.js - Sass - Node.js - Express.js - MongoDB</h4>
                <img className="project-image" src={p3} alt="Project One Image" width="600" height="" />

              </div>
            </Link>
            <Link to='/p2'>

              <div className="project-card">
                <h3>COCKTAIL MIXER</h3>
                <br></br>
                <h4>React application</h4>
                <h4>React.js - Sass - Express.js</h4>
                <img className="project-image" src={p2} alt="Project One Image" width="800" height="" />

              </div>
            </Link>
            <Link to='/p1'>

              <div className="project-card">
                <h3>JUNGLE FROGGER</h3>
                <br></br>
                <h4>Native JavaScript game</h4>
                <h4>HTML5 - CSS3 - JavaScript</h4>
                <img className="project-image" src={p1} alt="Project One Image" width="600" height="" />




              </div>
            </Link>
          </div>
        </section>
      </body>
    </>
  )
}


export default Projects