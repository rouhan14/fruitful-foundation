import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <div className="w-full">
        <img
          src="/main.jpg"
          className="w-full h-auto object-cover rounded-b-lg shadow-lg"
          alt="Home Page Hero"
        />
      </div>

      {/* Our Leadership Section */}
      <section className="py-16 bg-white text-center px-6">
        <h2 className="text-4xl font-bold text-red-600 mb-10">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Rayan Malik */}
          <div className="flex flex-col items-center text-center">
            <img src="/rayan.JPG" alt="Rayan Malik" className="w-40 h-40 rounded-full shadow-md mb-4 object-cover" />
            <h3 className="text-2xl font-semibold text-gray-800">Rayan Malik</h3>
            <p className="text-lg text-gray-600 mb-4">Founder & CEO</p>
            <p className="text-gray-700 italic max-w-md">
              "In the heart of every child lies a seed of tomorrow's greatness. Imagine the difference you can create
              in a child's life, paving the way for their success."
            </p>
          </div>

          {/* Muhammad Khuzaima Qureshi */}
          <div className="flex flex-col items-center text-center">
            <img src="/khuzaima2.webp" alt="Muhammad Khuzaima Qureshi" className="w-40 h-40 rounded-full shadow-md mb-4 object-cover" />
            <h3 className="text-2xl font-semibold text-gray-800">Muhammad Khuzaima Qureshi</h3>
            <p className="text-lg text-gray-600 mb-4">Co-Founder & COO</p>
            <p className="text-gray-700 italic max-w-md">
              "By harnessing the power of university students and graduates, we can eradicate financial barriers 
              causing children to discontinue their education."
            </p>
          </div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="py-16 bg-gray-50 text-center px-6">
        <h2 className="text-4xl font-bold text-red-600 mb-6">Recent Highlights</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-6">
          Founding Partners of Fruitful Foundation invited at The Social Enterprise Summit 2025 as Pakistan’s youngest social entrepreneurs.
        </p>

        {/* Placeholder Box */}
        <div className="w-full max-w-4xl mx-auto h-60 bg-gray-300 flex items-center justify-center text-gray-700 text-lg rounded-lg shadow-md">
          Recent Highlights Placeholder
        </div>
      </section>
    </div>
  );
};

export default Home;
