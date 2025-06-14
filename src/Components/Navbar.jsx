import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-white shadow-sm fixed top-0 left-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Jagedo Summit Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          <Link to="/Register">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-600 text-white px-4 py-2 text-sm rounded flex items-center gap-1 transition hover:bg-orange-700"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h13v6" />
              </svg>
              Register Now
            </motion.button>
          </Link>

          <Link to="/Partner">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#000072] text-white px-4 py-2 text-sm rounded flex items-center gap-1 transition hover:opacity-90"
            >
              <svg className="w-4 h-4" fill="white" viewBox="0 0 20 20">
                <path d="M3 3h14v14H3V3zm1 2v10h12V5H4zm6 2h2v2h-2V7zm-3 0h2v2H7V7z" />
              </svg>
              Partner with us
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-blue-950 text-2xl">
            {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden px-4 pb-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-3"
          >
            <Link to="/Register">
              <button className="bg-orange-600 text-white px-4 py-2 text-sm rounded flex items-center justify-center gap-1 hover:bg-orange-700 transition">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h13v6" />
                </svg>
                Register Now
              </button>
            </Link>

            <Link to="/Partner">
              <button className="bg-[#000072] text-white px-4 py-2 text-sm rounded flex items-center justify-center gap-1 hover:opacity-90 transition">
                <svg className="w-4 h-4" fill="white" viewBox="0 0 20 20">
                  <path d="M3 3h14v14H3V3zm1 2v10h12V5H4zm6 2h2v2h-2V7zm-3 0h2v2H7V7z" />
                </svg>
                Partner with us
              </button>
            </Link>
          </motion.div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
