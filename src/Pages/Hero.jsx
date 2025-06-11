"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#005a9c] to-[#001f3f] text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Text */}
        <motion.div
          className="md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            JaGedo Builder Innovation Summit <br />
            <span className="font-semibold text-xl block mt-2">
              Advancing Construction Through Technology
            </span>
          </h1>

          <p className="text-base md:text-lg font-semibold">
            Join leaders from construction, investment, and technology at a
            high-level summit advancing innovation, efficiency, and growth in
            the built environment. Discover new solutions, connect with
            decision-makers, and help shape the future of construction.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
            <a href="#register" className="scroll-smooth">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded font-medium">
                Register now
              </button>
            </a>
            <a href="#partner" className="scroll-smooth">
              <button className="bg-[#0077b6] hover:bg-[#005f8e] text-white px-6 py-3 rounded font-medium">
                Partner with us
              </button>
            </a>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="./image1.png"
            alt="Web Summit Stage"
            className="rounded w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
