import { useRef, useEffect, useState } from 'react';
import './Hero.css';
import image_1 from '../../assets/hero_ai_1.jpeg';
import image_2 from '../../assets/hero_ai_2.jpeg';

export default function Hero() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  // Function to handle slide transitions
  const goToSlide = (index) => {
    if (sliderRef.current) {
      const newPosition = -100 * index;
      sliderRef.current.style.transform = `translateX(${newPosition}%)`;
      setCurrentSlide(index);
    }
  };

  // Function to handle next slide
  const slideForward = () => {
    const newIndex = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
    goToSlide(newIndex);
  };

  // Function to handle previous slide
  const slideBackward = () => {
    const newIndex = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    goToSlide(newIndex);
  };

  // Auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      slideForward();
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <section className="hero">
      <div className="hero-container">
        <div ref={sliderRef} className="slider">
          <div className="slide">
            <img src={image_1} alt="Automation Solutions" />
            <div className="slide-content">
              <h1>Where Innovation Meets Automation</h1>
              <p>Leading the industry with cutting-edge automation solutions</p>
              <a href="#products" className="btn">Explore Products</a>
            </div>
          </div>
          <div className="slide">
            <img src={image_2} alt="Industrial Technology" />
            <div className="slide-content">
              <h1>Smart Solutions for Modern Industry</h1>
              <p>Enhancing productivity with intelligent automation systems</p>
              <a href="#products" className="btn">View Solutions</a>
            </div>
          </div>
        </div>

        {/* Navigation buttons with fallback */}
        {/* <button className="slider-btn prev" onClick={slideBackward} aria-label="Previous slide">
          <img src={back_icon} alt="Previous" />
        </button>
        <button className="slider-btn next" onClick={slideForward} aria-label="Next slide">
          <img src={next_icon} alt="Next" />
        </button> */}

        <div className="slider-indicators">
          {[...Array(totalSlides)].map((_, index) => (
            <span
              key={index}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}