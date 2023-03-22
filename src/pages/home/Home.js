import './home.css'
import MainHeader from '../../components/header/MainHeader'
import Program from '../../components/Program'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'
import Testimonials from '../../components/Testimonials'
// import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
      <MainHeader />
      <Program />
      <Values />
      <FAQs />
      <Testimonials />
      {/* <Footer /> */}
    </div>
  )
}
export default Home
