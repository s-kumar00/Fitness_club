import {Link} from 'react-router-dom'
import Logo from '../images/logo1.webp'
import {FaLinkedin} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <article>
            <Link to="/" className='logo'>
                <img src={Logo} alt="Footer Logo" />
            </Link>
            
            <div className="footer__socials">
                <a href='https://www.linkedin.com/in/sikandar-kumar-b1a961223/' target='balnk' rel='noreferrer noopener'><FaLinkedin/></a> 
                <a href='https://www.facebook.com/sikandar.raj.986/' target='balnk' rel='noreferrer noopener'><FaFacebook/></a>
                <a href='https://github.com/s-kumar00' target='balnk' rel='noreferrer noopener'><FaGithub /></a>
                <a href='https://instagram.com/sikku_a6?igshid=ZDdkNTZiNTM=' target='blank' rel='noreferrer noopener'><AiFillInstagram /></a>
            </div>
        </article>
        <article>
          <h4>Page Links</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insight</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Student</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/FAQs">FAQs</Link>
        </article>
        <article>
          <h4>Get in Touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>

      {/* <div className="footer__copyright">
        <small>2023 Copyright claim &copy; All Rights Reserved</small>
      </div> */}

    </footer>
  )
}

export default Footer
