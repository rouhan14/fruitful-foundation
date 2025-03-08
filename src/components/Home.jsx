import React, { useState, useEffect } from "react";

const Home = () => {
  const highlightImages = [
    "/highlights/image1.jpeg",
    "/highlights/image2.jpeg",
    "/highlights/image3.jpeg",
    "/highlights/image4.jpeg",
    "/highlights/image5.jpeg",
    "/highlights/image6.jpeg",
    "/highlights/image7.jpeg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === highlightImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [highlightImages.length]);

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full">
        <img
          src="/main.jpg"
          className="w-full h-auto object-cover rounded-b-lg shadow-lg"
          alt="Home Page Hero"
        />
      </div>

      <section className="py-16 bg-white text-center px-6">
        <h2 className="text-4xl font-bold text-red-600 mb-10">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <img src="/rayan.JPG" alt="Rayan Malik" className="w-40 h-40 rounded-full shadow-md mb-4 object-cover" />
            <h3 className="text-2xl font-semibold text-gray-800">Rayan Malik</h3>
            <p className="text-lg text-gray-600 mb-4">Founder & CEO</p>
            <p className="text-gray-700 italic max-w-md">
              In the heart of every child lies a seed of tomorrow's greatness. Imagine the difference you can create in a child's 
              life, paving the way for their success. Together with my dedicated team, we pledge to unleash the boundless 
              possibilities that education can bring to each young mind.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src="/khuzaima2.webp" alt="Muhammad Khuzaima Qureshi" className="w-40 h-40 rounded-full shadow-md mb-4 object-cover" />
            <h3 className="text-2xl font-semibold text-gray-800">Muhammad Khuzaima Qureshi</h3>
            <p className="text-lg text-gray-600 mb-4">Co-Founder & COO</p>
            <p className="text-gray-700 italic max-w-md">
              I believe that by harnessing the power of university students and graduates, we can easily eradicate financial barriers 
              causing children to discontinue their education and the disparity in our society against women empowerment. “In 
              great attempts, even failure is glorious."
            </p>
          </div>
        </div>
      </section>

<section className="py-16 bg-gray-50 text-center px-6">
  <h2 className="text-4xl font-bold text-red-600 mb-6">Recent Highlights</h2>
  <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-6">
    Founding Partners of Fruitful Foundation invited at The Social Enterprise Summit 2025 as Pakistan’s youngest social entrepreneurs.
  </p>

  <div className="relative w-full max-w-3xl mx-auto h-[250px] md:h-[300px] lg:h-[350px] flex items-center justify-center rounded-lg shadow-md overflow-hidden">
    <img
      src={highlightImages[currentIndex]}
      alt="Recent Highlight"
      className="w-[70%] md:w-[60%] lg:w-[50%] h-auto object-contain transition-opacity duration-500 ease-in-out"
    />
  </div>
</section>

    </div>
  );
};

export default Home;