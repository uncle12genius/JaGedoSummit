import React from 'react';

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#005a9c] to-[#001f3f] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-8">
        
        {/* Left: Text */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            “The world’s premier tech conference” <br />
            <span className="font-semibold text-lg">- Politico</span>
          </h1>

          <p className="text-base md:text-lg">
            In May 2026, thousands of international entrepreneurs, investors, media outlets, 
            and leaders will gather at the Vancouver Convention Centre for our newest event: 
            Web Summit Vancouver.
          </p>

          <p className="text-base md:text-lg font-semibold">
            Get <span className="font-bold">two General Attendee tickets for the price of one</span> 
            in our next flash sale, and join us when we return to Vancouver from May 11–14, 2026.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded font-medium">
              Sign up now
            </button>
            <button className="bg-[#0077b6] hover:bg-[#005f8e] text-white px-6 py-3 rounded font-medium">
              Partner with us
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2">
          <img
            src="./image1.png"
            alt="Web Summit Stage"
            className="rounded w-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
