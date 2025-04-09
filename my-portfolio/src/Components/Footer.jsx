import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut"
      } 
    },
  };

  return (
    <motion.footer
      className="bg-gray-900 text-gray-300 py-6 px-4 border-t border-gray-800"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-3 md:mb-0">
            &copy; {new Date().getFullYear()} Muluken Tessema. All rights reserved.
          </p>
          
         
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;