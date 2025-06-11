"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full py-16 px-6 bg-white flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Text Content */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Why Attend???
          </h2>
          <p className="text-gray-700 font-semibold text-base md:text-lg">
            Gain strategic insights, explore emerging technologies, 
            and build high-value connections across construction, investment, and tech. 
            Stay ahead in a rapidly evolving industry.
          </p>
        </motion.div>

        {/* Right Image & Stats */}
        <motion.div
          className="md:w-1/2 relative w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="./image2.jpg"
            alt="Event Overview"
            className="w-full rounded-2xl shadow-2xl max-h-[500px] object-cover"
          />

          {/* Stat Top-left */}
          <div className="absolute -top-6 left-6 bg-white rounded-xl shadow-md px-5 py-3 text-center w-28 sm:w-32">
            <h3 className="text-teal-700 font-bold text-xl sm:text-2xl">15,000+</h3>
            <p className="text-sm text-gray-700 font-semibold">attendees</p>
          </div>

          {/* Stat Top-right */}
          <div className="absolute top-20 right-4 bg-white rounded-xl shadow-md px-5 py-3 text-center w-28 sm:w-32">
            <h3 className="text-orange-600 font-bold text-xl sm:text-2xl">650+</h3>
            <p className="text-sm text-gray-700 font-semibold">investors</p>
          </div>

          {/* Stat Bottom-left */}
          <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-md px-5 py-3 text-center w-28 sm:w-32">
            <h3 className="text-cyan-800 font-bold text-xl sm:text-2xl">1,100+</h3>
            <p className="text-sm text-gray-700 font-semibold">startups</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
