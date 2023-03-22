import SectionHead from "./SectionHead"
import Card from "../UI/Card"
import {ImQuotesLeft} from 'react-icons/im'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { testimonials } from "../data"
import { useState } from "react"
import React from "react";



const Testimonials = () => {
    const [index, setIndex] = useState(0)
    const {name, quote, job, avatar} =testimonials[index];

    const prevTestHandler =() => {
      setIndex(prev => prev - 1);
      if(index <= 0){
        setIndex(testimonials.length -1);
      }
    }

    const nextTestHandler =() => {
      setIndex(prev => prev + 1);
      if( index >= testimonials.length - 1){
        setIndex(0);
      }
    }

  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHead icon={<ImQuotesLeft/> } title='testimonials' className="testimonials__head"/>
        <Card className="testimonial">
            <div className="testimonial__avatar">
                <img src={avatar} alt={name} />
            </div>
            <p className="testimonial__quote">{`${quote}`}</p>
            <h5>{name}</h5>
            <small className="testinomial__title">{job}</small>
        </Card>
        <div className="testimonials__btn-container">
            <button className="testimonials__btn" onClick={prevTestHandler}><ArrowCircleLeftIcon /></button>
            <button className="testimonials__btn" onClick={nextTestHandler}><ArrowCircleRightIcon /></button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
