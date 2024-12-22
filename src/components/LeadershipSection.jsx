import React from 'react';

const LeadershipSection = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <h1 className="text-red-600 text-5xl font-extrabold text-center mb-16">Our Leadership</h1>

      {/* Rayan Malik */}
      <div className="flex flex-wrap items-start mb-16 px-4 bg-white shadow-md rounded-lg transition-shadow duration-300 hover:shadow-xl">
        <div className="flex justify-center w-full sm:w-1/3 p-4 text-center">
          <img
            src="/rayan.JPG"
            alt="Rayan Malik"
            className="object-center rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110 mx-auto"
            style={{ width: '60%', height: '250px' }}
          />
        </div>
        <div className="w-full sm:w-2/3 p-6 flex flex-col justify-center">
          <h2 className="font-extrabold text-3xl text-gray-800">Founder & CEO</h2>
          <p className="text-2xl text-gray-700">Rayan Malik</p>
          <p className="text-lg mt-6 leading-relaxed text-justify text-gray-600">
            In the heart of every child lies a seed of tomorrow's greatness. Imagine the difference you can create in a child's life, paving the way for their success. Together with my dedicated team, we pledge to unleash the boundless possibilities that education can bring to each young mind.
          </p>
        </div>
      </div>

      {/* Khuzaima Qureshi */}
      <div className="flex flex-wrap items-start mb-16 px-4 bg-white shadow-md rounded-lg transition-shadow duration-300 hover:shadow-xl">
        <div className="flex justify-center w-full sm:w-1/3 p-4 text-center">
          <img
            src="/khuzaima.webp"
            alt="Khuzaima Qureshi"
            className="object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110 mx-auto"
            style={{ width: '60%', height: '250px' }}
          />
        </div>
        <div className="w-full sm:w-2/3 p-6 flex flex-col justify-center">
          <h2 className="font-extrabold text-3xl text-gray-800">Co-founder & COO</h2>
          <p className="text-2xl text-gray-700">Khuzaima Qureshi</p>
          <p className="text-lg mt-6 leading-relaxed text-justify text-gray-600">
            I believe that by harnessing the power of university students and graduates, we can easily eradicate the financial barriers causing children to discontinue their education. "In great attempts, even failure is glorious".
          </p>
        </div>
      </div>

      {/* Asadullah Ashraf */}
      <div className="flex flex-wrap items-start mb-16 px-4 bg-white shadow-md rounded-lg transition-shadow duration-300 hover:shadow-xl">
        <div className="flex justify-center w-full sm:w-1/3 p-4 text-center">
          <img
            src="Asadullah.PNG"
            alt="Asadullah Ashraf"
            className="object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110 mx-auto"
            style={{ width: '60%', height: '250px' }}
          />
        </div>
        <div className="w-full sm:w-2/3 p-6 flex flex-col justify-center">
          <h2 className="font-extrabold text-3xl text-gray-800">Manager Campus Teams</h2>
          <p className="text-2xl text-gray-700">Asadullah Ashraf</p>
          <p className="text-lg mt-6 leading-relaxed text-justify text-gray-600">
            At Fruitful Foundation, I envision uniting students for impactful change and building a community that uplifts educational journeys and spreads hope within the community.
          </p>
        </div>
      </div>

      {/* Muhammad Khuzaima */}
      <div className="flex flex-wrap items-start mb-16 px-4 bg-white shadow-md rounded-lg transition-shadow duration-300 hover:shadow-xl">
        <div className="flex justify-center w-full sm:w-1/3 p-4 text-center">
          <img
            src="web3.jpg"
            alt="Muhammad Khuzaima"
            className="object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110 mx-auto"
            style={{ width: '60%', height: '250px' }}
          />
        </div>
        <div className="w-full sm:w-2/3 p-6 flex flex-col justify-center">
          <h2 className="font-extrabold text-3xl text-gray-800">Content Head</h2>
          <p className="text-2xl text-gray-700">Muhammad Khuzaima</p>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
