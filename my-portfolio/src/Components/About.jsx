import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-5 bg-light"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <motion.div
            className="col-md-6 about-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2 className="display-5">About Me</h2>
            <p className="lead">
              I’m a Creative Full Stack Web Developer based in Ethiopia, specializing in React and Node.js. With a passion for how people and software can work together to make life better, I design and build premium, user-friendly websites that meet the latest web standards.
            </p>
            <p>
              Over the past few years, I’ve honed my skills in frontend and backend development, creating dynamic, responsive, and visually appealing web applications. My work is driven by a commitment to quality, innovation, and collaboration, ensuring that every project delivers value to both users and businesses.
            </p>
          </motion.div>
          {/* Right Column */}
          <motion.div
            className="col-md-6 about-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h3 className="display-6">What I Do</h3>
            <ul>
              <li>Frontend Development: Crafting intuitive, responsive interfaces using React, HTML, CSS, and JavaScript.</li>
              <li>Backend Development: Building robust, scalable server-side solutions with Node.js, Express.js, and MySQL.</li>
              <li>Full Stack Integration: Seamlessly connecting frontend and backend systems to deliver end-to-end solutions.</li>
              <li>Problem Solving: Tackling complex challenges with creative troubleshooting and efficient project management.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;