import React from 'react';
import { motion } from 'framer-motion';
import './Home.css'; // We'll create this CSS file

const Home = () => {
  return (
    <motion.section
      id="home"
      className="d-flex align-items-center vh-100 bg-dark text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Image on the left - Now with CSS class */}
          <motion.div
            className="col-md-6 text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="professional-portrait">
              {/* Empty div - image will be set in CSS */}
            </div>
          </motion.div>
          
          {/* Text on the right - Unchanged */}
          <motion.div
            className="col-md-6 home-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="display-4">Muluken Tessema</h1>
            <p className="lead">Creative Full Stack Web Developer | React & Node.js Specialist</p>
            <p>Building seamless, user-centric web experiences that bridge people and technology.</p>
            <div className="mt-4">
              <a
                href="/resume.pdf"
                download="Muluken_Tessema_Resume.pdf"
                className="btn btn-outline-light btn-lg me-3"
              >
                Download Resume
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg">Contact Me</a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;