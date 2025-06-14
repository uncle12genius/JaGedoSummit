import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast, Slide } from "react-toastify";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const packages = [
  {
    id: 1,
    name: "Basic Investor",
    price: "KES 20,000",
    description: "Perfect for individual investors starting out.",
    features: ["Access to keynotes", "Networking lounge", "Expo entry"],
  },
  {
    id: 2,
    name: "Premium Partner",
    price: "KES 50,000",
    description: "Ideal for organizations seeking partnerships.",
    features: ["Priority seating", "Brand exposure", "Private sessions", "Gala dinner"],
  },
  {
    id: 3,
    name: "Institutional Sponsor",
    price: "KES 100,000",
    description: "Maximum exposure for large organizations & institutions.",
    features: ["VIP booth", "Media coverage", "Panel speaking slot", "Full summit access"],
  },
];

export default function InvestorSignup() {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered:", formData, "Package:", selectedPackage);

    toast.success("Thank you for registering!", {
      position: "top-center",
      autoClose: 2500,
      transition: Slide,
    });

    setFormData({ name: "", email: "", phone: "", company: "" });
    setSelectedPackage(null);

    setTimeout(() => {
      navigate("/");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 md:px-8" id="Partner ">
      <ToastContainer />

      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-gray-600 text-lg">
          Select the perfect package for your investment journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {packages.map((pkg) => (
          <motion.div
            key={pkg.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-md border border-blue-200 p-8 flex flex-col justify-between transition-all"
          >
            <div>
              <h2 className="text-2xl font-bold text-[#000072] mb-2">{pkg.name}</h2>
              <p className="text-gray-600 mb-4">{pkg.description}</p>
              <p className="text-2xl font-extrabold text-blue-600 mb-6">{pkg.price}</p>
              <ul className="space-y-2 text-gray-700 text-left">
                {pkg.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => setSelectedPackage(pkg)}
              className="mt-8 bg-[#000072] text-white font-semibold py-3 rounded-lg hover:bg-[#000072cc] transition"
            >
              Choose {pkg.name}
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPackage && (
          <motion.div
            className="fixed inset-0 bg-[#00000033] backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-[#000072] text-center">
                Register for {selectedPackage.name}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#000072] focus:outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#000072] focus:outline-none"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#000072] focus:outline-none"
                  required
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#000072] focus:outline-none"
                />
                <div className="flex justify-between gap-4">
                  <button
                    type="submit"
                    className="bg-[#000072] text-white py-3 rounded-lg font-semibold w-full hover:bg-[#000072dd] transition"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedPackage(null)}
                    className="bg-gray-200 py-3 rounded-lg w-full font-semibold hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
