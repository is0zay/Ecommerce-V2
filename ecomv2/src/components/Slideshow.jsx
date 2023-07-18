import React, { useState, useEffect } from "react";
import './Slideshow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

 


function Slideshow() {
	// State to keep track of the current index of the slideshow
    const [currentIndex, setCurrentIndex] = useState(0);

	  
	// Function to handle click on the left arrow
  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? 5 : prevIndex - 1);
  };

    // Function to handle click on the right arrow
  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) => prevIndex === 5 ? 0 : prevIndex + 1);
  };

    // Effect hook to auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex === 2 ? 0 : prevIndex + 1);
    }, 2000);

	    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
	<div className="wrapper">
	<FontAwesomeIcon icon={faCircleChevronLeft} id="left-arrow" onClick={() => handleLeftArrowClick("left-arrow")} />
      <div className="section3-carousel">
          <img src="/images/slide1.webp" alt="img" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }} />
          <img src="/images/slide2.webp" alt="img" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }} />
          <img src="/images/slide3.webp" alt="img" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }} />
          <img src="/images/slide4.webp" alt="img" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }} />
          <img src="/images/slide5.webp" alt="img" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }} />
          <img src="/images/slide6.webp" alt="img" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }} />
      </div>
	  <FontAwesomeIcon icon={faCircleChevronRight} id="right-arrow" onClick={() => handleRightArrowClick("right-arrow")} />

    </div>
  );
}

export default Slideshow;