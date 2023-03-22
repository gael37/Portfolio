import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import robot from '../../assets/coding-boy.gif'

function AboutMe() {

  return (
    <>
      <body>
        <div className="flex-page">
          <section className="sub-section" id="home">
            <div className='headshot-container'>
              <img className='developer' src={robot} alt='headshot' width='800px'></img>
            </div>
            <div className="information">
              <p>Hi! I&apos;m <span>Gael</span>, a <span>junior developer</span>!</p>
              <br></br>
              <br></br>
              <p>I hope you&apos;re having an amazing day</p>
              <br />
              <br></br>
              <p>Make yourself at ease while browsing through my portfolio!</p>
            </div>
            {/* <Link to='/projects' className='navbar-logo button'>Projects</button> */}
          </section>
        </div>
      </body>
    </>
  )

}


export default AboutMe


