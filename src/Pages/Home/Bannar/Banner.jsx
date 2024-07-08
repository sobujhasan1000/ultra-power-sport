import React, { useState, useEffect } from "react";
import img1 from "../../../../src/assets/BannerImg/cricke.jpeg";
import img2 from "../../../../src/assets/BannerImg/football.jpg";
import img3 from "../../../../src/assets/BannerImg/hockey.jpg";
import img4 from "../../../../src/assets/BannerImg/badminton.jpg";
import img5 from "../../../../src/assets/BannerImg/swimming.jpg";
import img6 from "../../../../src/assets/BannerImg/tenis.png";

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <>
      <div className="carousel w-full h-96 rounded-md">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item w-full ${
              index === activeIndex ? "block" : "hidden"
            }`}
          >
            <img src={image} className="w-full h-full" />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`btn btn-xs ${
              index === activeIndex ? "btn-active" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Banner;
