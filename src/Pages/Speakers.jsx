import React from 'react';

const speakers = [
  {
    name: 'Jay Graber',
    title: 'CEO',
    company: 'Bluesky',
    image: '/images/jay-graber.jpg',
  },
  {
    name: 'Ivan Zhang',
    title: 'Co-founder',
    company: 'Cohere',
    image: '/images/ivan-zhang.jpg',
  },
  {
    name: 'Dr. Cornel West',
    title: 'Professor, Author and 2024 Candidate',
    company: 'Cornel West',
    image: '/images/cornel-west.jpg',
  },
  {
    name: 'Gary Marcus',
    title: 'Professor, scientist, best-selling author',
    company: '',
    image: '/images/gary-marcus.jpg',
  },
  
];

export default function Speakers() {
  return (
    <section className="bg-gradient-to-b from-[#005a9c] to-[#001f3f] py-12 px-4 text-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Meet our 2025 speakers
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="w-[45%] sm:w-[30%] md:w-[18%] bg-white rounded-xl overflow-hidden shadow-md text-black"
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-base font-bold">{speaker.name}</h3>
              <p className="text-sm">{speaker.title}</p>
              <p className="text-sm text-gray-600">{speaker.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
