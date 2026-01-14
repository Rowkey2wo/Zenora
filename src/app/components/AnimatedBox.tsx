"use client";

import { motion } from "framer-motion";

const AnimatedBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="w-40 h-40 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-white font-bold"
    >
      Hello Motion 🚀
    </motion.div>
  );
};

export default AnimatedBox;