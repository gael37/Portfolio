import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4-shot.png'
import { useNavigate } from 'react-router-dom'


import { Button } from 'react-bootstrap'

function P4() {

  const navigate = useNavigate()

  const previousPage = () => {
    navigate('/projects')
  }

  return (
    <>
      <div className="project-single-flex">
        <div className='project-single-title'>
          <h3>SPARE SOCK</h3>
          <br></br>
          <h4>Full stack application</h4>
          <h4>React.js - Sass - Django - PostgreSQL</h4>
          <div className="project-single-buttons">
            <button className="button3"><a className="project-link" href="https://gd-spare-sock.herokuapp.com/"
              target="_blank" rel="noopener noreferrer">View website</a>
            </button>
            <button className="button3"><a className="project-link" href="https://github.com/gael37/GA-P4-SpareSock"
              target="_blank" rel="noopener noreferrer">View code </a></button>
            {/* <p className="subtext project-link2"><a className="project-link"
          href="https://github.com/gael37/GA-P4-SpareSock/blob/main/README.md" target="_blank" rel="noopener noreferrer">View
          ReadMe</a></p> */}
          </div>
        </div>


        <div className='project-single-image'>
          <img className="project-image" src={p4} alt="Project One Image" width="800" height="" />
        </div>
        <div className='project-single-info'>
          <p className="subtext paragraph2">Final project of my software engineering course at General Assembly
            where I had one week to create a full stack application, individually, using React.js for the front
            end, Django
            for the back-end and a PostgreSQL database.It is a
            Gumtree-like ad
            hosting platform with an authentication system and CRUD functionalities, where customers can post ads and
            message each other.
          </p>
        </div>
      </div>
      <button className='button4' onClick={previousPage}>⬅️</button>



    </>
  )

}


export default P4