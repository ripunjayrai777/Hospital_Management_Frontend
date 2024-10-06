import React from 'react'

const Hero = ({title, imageUrl}) => {
  return (
    <div className='hero container'>
      <div className="banner">
        <h1>{title}</h1>
        <p>DDU Medical Institute  is a state- of-the-art facility dedicated to providing comprehensive healthcare service with compassion and expertise. Our team of skilled professionals is committed to delivering personalized care tailored to each patient's needs. At DDU Medical Institute, We priorities your well-being, ensuring a harmonious journey towards optimal health and wellness.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non nihil pariatur, molestiae illo tenetur quidem reprehenderit optio sunt exercitationem excepturi quas nisi quaerat hic voluptates.</p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image"/>
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  )
}

export default Hero
