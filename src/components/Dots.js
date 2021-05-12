import React from 'react'
import sliderImage from './sliderImage';

function Dots(props) {
  return (
    <div className="all-dots">{sliderImage.map((slide, index) => (
      <span 
        key={index} 
        className={`${props.activeIndex === index ? "dot active-dot" : "dot"}`}
        onClick={event => props.onClick(event.target.value = index)}
      />
    ))}
    </div>
  )
}

export default Dots
