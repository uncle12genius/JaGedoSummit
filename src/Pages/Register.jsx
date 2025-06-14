import { useState } from "react";
import { motion } from "framer-motion";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you for pre-registering!");
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#dbe6ff] p-4 pt-24">
      {/* Left: Form */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md md:mr-8"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#000072]">
          Pre-Register for Jagedo Summit
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <motion.input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000072] shadow-sm"
            required
            whileFocus={{ scale: 1.02 }}
          />

          <motion.input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000072] shadow-sm"
            required
            whileFocus={{ scale: 1.02 }}
          />

          <motion.input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000072] shadow-sm"
            required
            whileFocus={{ scale: 1.02 }}
          />

          <motion.input
            type="text"
            name="organization"
            placeholder="Organization / Company (Optional)"
            value={formData.organization}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000072] shadow-sm"
            whileFocus={{ scale: 1.02 }}
          />

          <motion.button
            type="submit"
            className="w-full bg-[#000072] text-white py-3 rounded-lg hover:bg-[#000072cc] transition font-semibold text-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>

      {/* Right: Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md mt-10 md:mt-0"
      >
        <img
          src="/summit-registration.png"  // <-- Add your image here
          alt="Summit Illustration"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default Register;
