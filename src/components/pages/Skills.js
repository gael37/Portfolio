import html from '../../assets/html5.png'
import css from '../../assets/css-3.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import django from '../../assets/django.png'
import node from '../../assets/node-2.png'
import express from '../../assets/express.png'
import mongo from '../../assets/mongo-db.png'
import sql from '../../assets/sql.png'
import insomnia from '../../assets/insomnia.png'
import git from '../../assets/git.png'
import github from '../../assets/github.png'
import python from '../../assets/python.png'
import tableplus from '../../assets/tableplus.png'
import sass from '../../assets/sass.png'
import boot from '../../assets/bootstrap.png'
import mongoose from '../../assets/mongoose.png'

function Skills() {

  return (
    <>
      {/* <h2>Skills</h2> */}
      <body>
        <section className="skills" id="skills">
          <h2 className='h2-top'>Front-end</h2>

          <ul id="flex-wrap-logos">
            <li><img src={html} alt="HTML5 logo" width="100" />
              <p>HTML 5</p>
            </li>
            <li><img src={css} alt="CSS logo" width="100" />
              <p>CSS 3</p>
            </li>
            <li><img src={sass} alt="Sass logo" width="100" height />
              <p>Sass</p>
            </li>
            <li><img src={js} alt="JavaScript logo" width="100" />
              <p>JavaScript</p>
            </li>
            <li><img src={react} alt="React logo" width="100" />
              <p>React.js</p>
            </li>
          </ul>

          <h2>Back-end</h2>
          <ul id="flex-wrap-logos">
            <li><img src={python} alt="Python logo" width="100" />
              <p>Python</p>
            </li>
            <li><img src={django} alt="Django logo" width="100" />
              <p>Django</p>
            </li>

            <li><img src={express} alt="Express.js logo" width="100" />
              <p>Express.js</p>
            </li>

            <li><img src={mongoose} alt="Mongoose logo" height="100" width='98' />
              <p>Mongoose</p>
            </li>
            <li><img src={node} alt="Node logo" width="100" />
              <p>Node.js</p>
            </li>
            <li><img src={mongo} alt="MongoDB logo" width="100" />
              <p>MongoDB</p>
            </li>
            <li><img src={sql} alt="PostgreSQL logo" width="100" />
              <p>PostgreSQL</p>
            </li>
          </ul>

          <h2>Others</h2>
          <ul id="flex-wrap-logos">
            <li><img src={git} alt="Git logo" width="100" />
              <p>Git</p>
            </li>
            <li><img src={github} alt="Github logo" width="100" />
              <p>GitHub</p>
            </li>
            <li><img src={insomnia} alt="Insomnia logo" width="100" />
              <p>Insomnia</p>
            </li>
            <li><img src={tableplus} alt="TablePlus logo" width="100" />
              <p>TablePlus</p>
            </li>
          </ul>
        </section>
      </body>
    </>
  )

}


export default Skills