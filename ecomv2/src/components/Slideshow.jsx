import { React, useState, useRef} from "react";
import './Slideshow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

function Slideshow() {
	const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const move = (direction) => {
    const carousel = carouselRef.current;
    const firstSlide = carousel.querySelector("img");
    const firstSlideWidth = firstSlide.clientWidth + 4;

    if (direction === "left") {
      setScrollPosition((prevPosition) => prevPosition - firstSlideWidth);
    } else {
      setScrollPosition((prevPosition) => prevPosition + firstSlideWidth);
    }
  };

  return (
    <div className="wrapper">
	  <FontAwesomeIcon icon={faCircleChevronLeft} id="left-arrow" onClick={() => move("left")} />
      <div
        className="section3-carousel"
        ref={carouselRef}
        style={{ scrollLeft: scrollPosition }}
      >
        <img src="/images/slide1.webp" alt="img" />
        <img src="/images/slide2.webp" alt="img" />
        <img src="/images/slide3.webp" alt="img" />
        <img src="/images/slide4.webp" alt="img" />
        <img src="/images/slide5.webp" alt="img" />
        <img src="/images/slide6.webp" alt="img" />
        <img src="/images/slide7.webp" alt="img" />
        <img src="/images/slide8.webp" alt="img" />
        <img src="/images/slide9.webp" alt="img" />
      </div>
	  <FontAwesomeIcon icon={faCircleChevronRight} id="right-arrow" onClick={() => move("right")} />

    </div>
  );
}

export default Slideshow;