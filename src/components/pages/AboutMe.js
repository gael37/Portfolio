import headshot from '../../assets/headshot.png'

function AboutMe() {

  return (
    <>
      <section className="sub-section" id="about-me">
        <h3 className='about-h3-bottom'>At work:</h3>
        {/* <div className='headshot-container'>
          <img className='headshot' src={headshot} alt='headshot'></img>
        </div> */}
        <p>Hello, my name is Gael Duchesne, I am a passionate software engineer who loves learning new things, solving problems and aiming for development and mentorship.</p>
        <p>Coding is appealing to me as it is a complex and evolving tool that is exciting to practise.</p>
        <p>I have good communication and I am curious, positive and perseverant. Team working, expertise, honesty and respect are my core professional values.</p>
        <h3 className='about-h3-bottom'>Outside from work:</h3>
        <p className="paragraph3">Basketball: either playing casual or more serious games, it is a fun way for me to compete
          and connect with people.
        </p>
        <p className="paragraph3">Video games: they enable me to evade and to have fun when I have some free time.</p>
        <p className="paragraph3">History: I like spending time learning about historical facts, battles and what was at
          stake
          during major conflicts.</p>
        <p className='paragraph3'>Science: I’ve always loved physics and astronomy and getting to study the laws that
          describe
          the world around us.</p>
      </section>
    </>
  )

}


export default AboutMe


