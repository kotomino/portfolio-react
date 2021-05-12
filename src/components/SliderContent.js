import React from 'react'
import sliderImage from './sliderImage';
import placeholder from '../assets/placeholder.jpeg';

function SliderContent(props) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div 
          key={index}
          className={index === props.activeIndex ? 'slides active' : 'inactive' }
        >
          <img className="slide-image" src={slide.url} alt='' />
        </div>
      ))}
    </section>
  )
}

export default SliderContent