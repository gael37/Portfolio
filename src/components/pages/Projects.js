import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4-shot.png'
import p6 from '../../assets/sc-shot-issue-t.png'
import soon from '../../assets/coming-soon.png'
import emp from '../../assets/emp-pic.png'

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
            <Link to='/p6'>
              <div className="project-card">
                <h3>Issue Tracker</h3>
                <br></br>
                <h4>Full stack application for issue handling</h4>
                <h4>Next.js - TypeScript - Prisma - MySQL - Tailwind - Radix UI</h4>
                <img className="project-image" src={p6} alt="Issue Tracker" width="800" height="" />
                <p>Individual project</p>
                <p>01 Dec 2023</p>
              </div>
            </Link>
            <Link to='/p5'>
              <div className="project-card">
                <h3>Emporium</h3>
                <br></br>
                <h4>Full stack application: e-commerce</h4>
                <h4>React.js - Sass - Bootstrap - Django - PostgreSQL - Stripe</h4>
                <img className="project-image" src={emp} alt="Emporium" width="800" height="" />
                <p>Individual project</p>
                <p>23 May 2023</p>
              </div>
            </Link>
            <Link to='/p4'>
              <div className="project-card">
                <h3>SPARE SOCK</h3>
                {/* <p>(16 Dec 2022)</p> */}
                <br></br>
                <h4>Full stack application: ads platform/messaging</h4>
                <h4>React.js - Sass - Django - PostgreSQL</h4>
                <img className="project-image" src={p4} alt="Project One Image" width="800" height="" />
                <p>Individual project</p>
                <p>16 Dec 2022</p>
              </div>
            </Link>
            <Link to='/p3'>
              <div className="project-card">
                <h3>SPROUT ANYWHERE</h3>
                <br></br>
                <h4>Full stack application: e-commerce/blog</h4>
                <h4>React.js - Sass - Node.js - Express.js - MongoDB</h4>
                <img className="project-image" src={p3} alt="Project One Image" width="600" height="" />
                <p>Group project</p>
                <p>25 Nov 2022</p>
              </div>
            </Link>
            <Link to='/p2'>
              <div className="project-card">
                <h3>COCKTAIL MIXER</h3>
                <br></br>
                <h4>React application: Cocktail generator from public API</h4>
                <h4>React.js - Sass - Express.js</h4>
                <img className="project-image" src={p2} alt="Project One Image" width="800" height="" />
                <p>Pair project</p>
                <p>4 Nov 2022</p>


              </div>
            </Link>
            <Link to='/p1'>

              <div className="project-card">
                <h3>JUNGLE FROGGER</h3>
                <br></br>
                <h4>Native JavaScript game</h4>
                <h4>HTML5 - CSS3 - JavaScript</h4>
                <img className="project-image" src={p1} alt="Project One Image" width="600" height="" />
                <p>Individual project</p>
                <p>21 Oct 2022</p>





              </div>
            </Link>
          </div>
        </section>
      </body>
    </>
  )
}


export default Projects