import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

const Home = () => {
  const highlightImages = [
    "/highlights/image1.jpeg",
    "/highlights/image2.jpeg",
    "/highlights/image3.jpeg",
    "/highlights/image4.jpeg",
    "/highlights/image5.jpeg",
    "/highlights/image6.jpeg",
    "/highlights/image7.jpeg",
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

  const stats = [
    { to: 2, prefix: "", suffix: "M+ PKR", label: "Donations Distributed" },
    { to: 50, prefix: "", suffix: "+", label: "Cases Solved" },
    { to: 10000, prefix: "", suffix: "+", label: "Foods and Medicines Distributed" },
  ];

  const sdgGoals = Array.from({ length: 17 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero */}
      <Reveal direction="none" duration={0.8}>
        <div className="w-full">
          <img
            src="/main.jpg"
            className="w-full h-auto object-cover rounded-b-lg shadow-lg"
            alt="Fruitful Foundation - Spreading Fruitful Smiles"
          />
        </div>
      </Reveal>

      {/* Impact numbers */}
      <section className="py-16 px-6 bg-gradient-to-br from-red-50 via-white to-green-50">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 text-center mb-2">
            Our Impact in Numbers
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Real change, delivered directly to the families and communities who need it most.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.15}>
              <div className="bg-white rounded-2xl shadow-md py-10 px-6 h-full">
                <CountUp
                  to={stat.to}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="block text-4xl md:text-5xl font-extrabold text-red-700 mb-2"
                />
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* SDGs - placeholder icons until final SDG images are provided */}
        <Reveal delay={0.2}>
          <h3 className="text-xl font-semibold text-gray-700 text-center mt-16 mb-8">
            Aligned with the UN Sustainable Development Goals
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {sdgGoals.map((goal) => (
              <div
                key={goal}
                className="w-16 h-16 md:w-20 md:h-20 rounded-xl border border-gray-200 shadow-sm bg-white flex items-center justify-center overflow-hidden"
                title={`SDG ${goal} placeholder`}
              >
                <img
                  src="/sdg/placeholder.png"
                  alt={`SDG ${goal} placeholder`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50 text-center px-6">
        <Reveal>
          <h2 className="text-4xl font-bold text-red-600 mb-10">Our Leadership</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <Reveal direction="left" delay={0.1}>
            <div className="flex flex-col items-center text-center h-full">
              <img
                src="/rayan.JPG"
                alt="Rayan Malik"
                loading="lazy"
                className="w-40 h-40 rounded-full shadow-md mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold text-gray-800">Rayan Malik</h3>
              <p className="text-lg text-gray-600 mb-4">Founder & CEO</p>
              <p className="text-gray-700 italic max-w-md">
                In the heart of every child lies a seed of tomorrow's greatness. Imagine the
                difference you can create in a child's life, paving the way for their success.
                Together with my dedicated team, we pledge to unleash the boundless possibilities
                that education can bring to each young mind.
              </p>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div className="flex flex-col items-center text-center h-full">
              <img
                src="/khuzaima2.webp"
                alt="Muhammad Khuzaima Qureshi"
                loading="lazy"
                className="w-40 h-40 rounded-full shadow-md mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold text-gray-800">
                Muhammad Khuzaima Qureshi
              </h3>
              <p className="text-lg text-gray-600 mb-4">Co-Founder & COO</p>
              <p className="text-gray-700 italic max-w-md">
                I believe that by harnessing the power of university students and graduates, we
                can easily eradicate financial barriers causing children to discontinue their
                education and the disparity in our society against women empowerment. "In great
                attempts, even failure is glorious."
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Recent highlights */}
      <section className="py-16 bg-white text-center px-6">
        <Reveal>
          <h2 className="text-4xl font-bold text-red-600 mb-6">Recent Highlights</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-6">
            Founding Partners of Fruitful Foundation invited at The Social Enterprise Summit 2025
            as Pakistan's youngest social entrepreneurs.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative w-full max-w-3xl mx-auto h-[250px] md:h-[300px] lg:h-[350px] flex items-center justify-center rounded-lg shadow-md overflow-hidden">
            <img
              src={highlightImages[currentIndex]}
              alt="Recent Highlight"
              loading="lazy"
              className="w-[70%] md:w-[60%] lg:w-[50%] h-auto object-contain transition-opacity duration-500 ease-in-out"
            />
          </div>
        </Reveal>
      </section>

      {/* Donate CTA */}
      <section className="py-16 px-6 bg-red-700 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Help Us Reach More Families
          </h2>
          <p className="text-red-50 max-w-2xl mx-auto mb-8">
            Every contribution helps us deliver education, healthcare, and essential support to
            communities across Pakistan.
          </p>
          <Link
            to="/contacts"
            className="inline-block bg-white text-red-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105"
          >
            Donate Now
          </Link>
        </Reveal>
      </section>
    </div>
  );
};

export default Home;
