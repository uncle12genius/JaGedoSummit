import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Jagedo Summit Logo" className="h-8 w-auto" />
          <span className="font-semibold text-lg text-blue-950">Jagedo Summit</span>
        </div>

        {/* Center: Links */}
        <div className="hidden md:flex gap-6 text-sm text-blue-900 font-medium">
          {['Attendees', 'Startups', 'Exhibitors', 'Investors', 'Media', 'More'].map((item) => (
            <div key={item} className="flex items-center cursor-pointer hover:text-orange-600">
              <span>{item}</span>
              <svg
                className="ml-1 w-3 h-3 text-orange-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5.25 7.25L10 12.25L14.75 7.25H5.25Z" />
              </svg>
            </div>
          ))}
        </div>

        {/* Right: Buttons */}
        <div className="flex gap-3">
          <button className="bg-orange-600 text-white px-4 py-2 text-sm rounded flex items-center gap-1 hover:bg-orange-700">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h13v6" />
            </svg>
            Pre-register
          </button>
          <button className="bg-[#000072] text-white px-4 py-2 text-sm rounded flex items-center gap-1 hover:opacity-90">
            <svg className="w-4 h-4" fill="white" viewBox="0 0 20 20">
              <path d="M3 3h14v14H3V3zm1 2v10h12V5H4zm6 2h2v2h-2V7zm-3 0h2v2H7V7z" />
            </svg>
            Partner with us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
