import React, { useState, useEffect, useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Importing arrow icons

const Carousel = ({
  images = [],
  autoPlayInterval = 3000,
  pauseOnHover = true,
  visibleImagesCount = 3, // Number of images visible at once
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalImages = images.length;
  const halfVisible = Math.floor(visibleImagesCount / 2);

  // Calculate the indices of images to display
  const getDisplayedImages = () => {
    const extendedImages = [...images, ...images, ...images];
    const start = totalImages + currentIndex - halfVisible;
    return extendedImages.slice(start, start + visibleImagesCount);
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  }, [totalImages]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  }, [totalImages]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  useEffect(() => {
    if (!autoPlayInterval || totalImages <= 1 || isPaused) return;

    const interval = setInterval(handleNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlayInterval, handleNext, totalImages, isPaused]);

  if (!images.length) {
    return <div className="text-center p-4">No images to display</div>;
  }

  return (
    <div
      className="relative w-full h-[400px] flex justify-center items-center overflow-hidden"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      role="region"
      aria-label="Image carousel"
    >
      {/* Navigation Buttons */}
    {images.length > 1 && (
    <>
        <button
        onClick={handlePrev}
        className="absolute left-4 z-20 bg-red-600 text-white rounded-full p-4 shadow-md hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Previous image"
        >
        <FiChevronLeft size={24} /> {/* Left arrow */}
        </button>
        <button
        onClick={handleNext}
        className="absolute right-4 z-20 bg-red-600 text-white rounded-full p-4 shadow-md hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Next image"
        >
        <FiChevronRight size={24} /> {/* Right arrow */}
        </button>
    </>
    )}



      {/* Image Slider */}
      <div className="relative w-full h-full flex justify-center items-center">
        {getDisplayedImages().map((image, index) => {
          const isCenter = index === halfVisible;
          const scale = isCenter ? 1 : 0.8;
          const opacity = isCenter ? 1 : 0.5;

          return (
            <div
              key={index}
              className="relative flex-shrink-0 transition-all duration-500 ease-in-out"
              style={{
                transform: `scale(${scale})`,
                opacity,
                width: isCenter ? "400px" : "250px", // Increased width
                height: isCenter ? "350px" : "250px", // Increased height
                margin: "0 10px",
              }}
            >
              <img
                src={image.src}
                alt={image.alt || `Slide ${index + 1}`}
                className="rounded-lg shadow-lg object-cover w-full h-full"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          );
        })}
      </div>

      {/* Dots Navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20 pt-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                index === currentIndex ? "bg-red-500" : "bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
