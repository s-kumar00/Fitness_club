import HeaderImage from '../../images/img1.jpg'
// import StoryImage from '../../images/about3.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'
import Header from '../../components/Header'
const About = () => {
  return (
    <>
    <Header title="ABOUT US" image={HeaderImage}>
    </Header>
    {/* <section className='about__story'>
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt='Story Image' />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>Lorem Ipsum is simply dummy 
            text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when
             an unknown printer took a galley of type and 
             scrambled it to make a type specimen book. 
          </p>
          <p>
          It has survived not only five centuries, 
          but also the leap into electronic typesetting, 
          remaining essentially unchanged
          </p>
          <p>
          It was popularised in the 1960s with the release 
          of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like 
          Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </section> */}

    <section className='about__vision'>
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>Fitness Club provides clients with the most time efficient and productive High Intensity Strength Training, Nutritional Consulting, and Post-Rehabilitation experience possible in a highly consistent professional manner in the most clinically controlled state-of-the art facilities in the industry in the safest means possible.
          </p>
          <p>To place our fitness club as one of the best fitness Club in all over World by providing world class facility in health / fitness & bring in the awareness of healthy lifestyle.</p>
          
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt='Vision Image' />
        </div>
      </div>
    </section>

    <section className='about__mission'>
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt='Mission Image' />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>Fitness Club will profoundly improve the quality of life for thousands of Americans by educating, inspiring and providing the most efficient, effective and safe exercise program and nutrition life-style system ever created. Our employees will be life changers and will have extensive growth opportunities while fulfilling their passion and servicing their clients. 
          </p>
          <p>Our mission is to PROVIDE a welcoming environment for the Austin community to improve their overall health. To EDUCATE our clients that overall health is more than just a fitness goal – it’s about community, variety, refueling, recovering, and challenging your mind and body. We EMPOWER our clients towards a greater quality of life with seasoned professionals, varied programs and disciplines, and conscious living principles all under one roof.</p>
        </div>
      </div>
    </section>

    </>
  )
}

export default About
