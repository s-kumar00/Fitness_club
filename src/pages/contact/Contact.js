import './contact.css'

import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'


const Contact = () => {
  return (
    <>
      <Header title="GET IN TOUCH" image={HeaderImage}>
       
      </Header>
      <section className='contact'>
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href='mailto:sikandarsahilkumar@gmail.com' target="_blank" rel="noreferrer nooper"><MdEmail/></a>
            <a href='http://m.me/sikandar.raj.986/' target='_blank' rel="noreferrer nooper"><BsMessenger/></a>
            <a href='https://wa.me/+918406807131' target="_blank" rel="noreferrer nooper"><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  )
}
export default Contact
