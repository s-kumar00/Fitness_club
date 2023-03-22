
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import { imge } from "../data"
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import {values} from '../data'
import Card from '../UI/Card'
// import { useState } from "react"
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";


const Values = () => {
  // const [index, setIndex] = useState(0)
  //   const {avatar} =imge[index];

  //   const prevTestHandler =() => {
  //     setIndex(prev => prev -1);
  //     if(index <= 0){
  //       setIndex(imge.length -1);
  //     }
  //   }

  //   const nextTestHandler =() => {
  //     setIndex(prev => prev + 1);
  //     if( index >= imge.length - 1){
  //       setIndex(0);
  //     }
  //   }


  return (
    <section className='values'>
      <div className="container values__container">
        <div className="values__left">
          {/* <Card className="value">
              <div className="val__img">
                  <img src={avatar} />
              </div>
          </Card>
          <div className="value__btn-container">
              <button className="value__btn" onClick={prevTestHandler}><KeyboardArrowLeftIcon /></button>
              <button className="value__btn" onClick={nextTestHandler}><KeyboardArrowRightIcon /></button>
          </div> */}
      <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
      </Swiper>




        </div>

        <div className="values__right">
            <SectionHead icon={<GiCutDiamond />} title="values" />
            <p>
            For 20 years helping customers reach their fitness goals has been at the heart of what we do and why we do it! 
            </p>
            <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc}) => {
                            return <Card key={id} className="values__value">
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
              </div>
        </div>


      </div>

    </section>
  )
}

export default Values
