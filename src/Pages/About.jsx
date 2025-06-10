import React from 'react';

const About= () => {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What is Web Summit Vancouver?
          </h2>
          <p className="text-gray-700 mb-4">
            The Guardian called us “Glastonbury for geeks”, the Atlantic “where the future goes to be born”, 
            and Inc. “the best technology conference on the planet”.
          </p>
          <p className="text-gray-700">
            This year, we welcomed the world’s tech community to the first Web Summit in North America.
          </p>
        </div>

        {/* Right Image with Stats */}
        <div className="md:w-1/2 relative">
          <img
            src="./image2.jpg"
            alt="Vancouver"
            className="w-full rounded-xl shadow-lg"
          />

          {/* Top-left stat */}
          <div className="absolute -top-6 left-6 bg-white rounded-xl shadow-md px-4 py-2 text-center">
            <h3 className="text-teal-700 font-bold text-xl">15,000+</h3>
            <p className="text-sm text-gray-700">attendees</p>
          </div>

          {/* Right stat */}
          <div className="absolute top-20 right-4 bg-white rounded-xl shadow-md px-4 py-2 text-center">
            <h3 className="text-orange-600 font-bold text-xl">650+</h3>
            <p className="text-sm text-gray-700">investors</p>
          </div>

          {/* Bottom-left stat */}
          <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-md px-4 py-2 text-center">
            <h3 className="text-cyan-800 font-bold text-xl">1,100+</h3>
            <p className="text-sm text-gray-700">startups</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
