import './Hero.css'
import image_1 from '../../assets/image1.jpeg'
import image_2 from '../../assets/image2.jpeg'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import { useRef } from 'react'
import { useEffect } from 'react'

export default function Hero() {
  
  const slider = useRef();
  
  let tx = 0;
  function slideForward() {
    if (tx > -100) {
      tx -= 100;
    } else {
      tx = 0;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  
  function slideBackward() {
    if (tx < 0) {
      tx += 100;
    } else {
      tx = -100;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  
  useEffect(() => {
    const slideInterval = setInterval(() => {
      slideForward();
    }, 3000);
    
    return () => clearInterval(slideInterval)
  })
  
  return (
    <div className='hero'> 
      <div ref={slider} className='slider'>
        <div className='slide'>
          <img src={ image_1} alt="Image-1" />
        </div>
        <div className='slide'>
          <img src={ image_2} alt="Image-1" />
        </div>
      </div>
      <img src={next_icon} className='next' onClick={slideForward}/>
      <img src={back_icon} className='prev' onClick={slideBackward}/>
    </div>
  )
}