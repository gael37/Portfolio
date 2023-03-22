import lkn from '../../assets/linkedin-tile.svg'
function Contact() {

  return (
    <>
      <body>
        {/* <h2>Contact me</h2> */}
        <div className='contact-flex'>
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