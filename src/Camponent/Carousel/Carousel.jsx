import React, { useState, useEffect, useRef } from "react";
import "./carousel.scss"; // Import your CSS file for styling

const Carousel = ({ slides, slideWidth }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const lastIndex = slides.length - 1;
    const interval = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex > lastIndex) {
        nextIndex = 0;
      }
      setCurrentIndex(nextIndex);
      setCurrentTranslate(-slideWidth * nextIndex);

      // Reset transition after a short delay to create a continuous loop
      setTimeout(() => {
        setCurrentTranslate(-slideWidth * nextIndex);
      }, 50);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, slideWidth, slides]);

  const handleDragStart = (index, clientX) => {
    setIsDragging(true);
    setStartPosition(clientX);
    setCurrentIndex(index);
  };

  const handleDragEnd = (index, clientX) => {
    setIsDragging(false);
    const endPosition = clientX;
    const difference = startPosition - endPosition;

    if (difference > 50) {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= slides.length) {
        nextIndex = 0;
      }
      setCurrentIndex(nextIndex);
      setCurrentTranslate(-slideWidth * nextIndex);
    } else if (difference < -50) {
      let nextIndex = currentIndex - 1;
      if (nextIndex < 0) {
        nextIndex = slides.length - 1;
      }
      setCurrentIndex(nextIndex);
      setCurrentTranslate(-slideWidth * nextIndex);
    } else {
      setCurrentTranslate(-slideWidth * currentIndex);
    }
  };

  const handleDrag = (e) => {
    if (isDragging) {
      const currentPosition = e.touches ? e.touches[0].clientX : e.clientX;
      const difference = currentPosition - startPosition;
      setCurrentTranslate(-slideWidth * currentIndex + difference);
    }
  };

  return (
    <div
      className="carousel"
      ref={carouselRef}
      onMouseDown={(e) => handleDragStart(currentIndex, e.clientX)}
      onMouseUp={(e) => handleDragEnd(currentIndex, e.clientX)}
      onMouseMove={(e) => handleDrag(e)}
      onTouchStart={(e) => handleDragStart(currentIndex, e.touches[0].clientX)}
      onTouchEnd={(e) =>
        handleDragEnd(currentIndex, e.changedTouches[0].clientX)
      }
      onTouchMove={(e) => handleDrag(e.touches[0])}
    >
      <div
        className="carousel-inner"
        style={{
          transform: `translateX(${currentTranslate}px)`,
          transition: isDragging ? "none" : "transform 3s ease",
          width: `${slideWidth / 4}px`,
        }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-item" key={index}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
