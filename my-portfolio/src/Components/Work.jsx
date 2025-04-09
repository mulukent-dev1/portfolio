import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "cryptoplace",
      image: "project1.jpg",
      vercelLink: "https://crypto-place-mulukent-dev1.vercel.app/",
      githubLink: "https://github.com/mulukent-dev1/crypto-place",
    },
    {
      id: 2,
      title: "Apple",
      image: "project2.jpg",
      vercelLink: "https://apple-clone-mulukent-dev1.vercel.app/",
      githubLink: "https://github.com/mulukent-dev1/Apple-clone",
    },
    {
      id: 3,
      title: "Gemini",
      image: "project3.jpg",
      vercelLink: "https://gemini-clone-mulukent-dev.vercel.app/",
      githubLink: "https://github.com/mulukent-dev1/Gemini-clone",
    },
  ];

  return (
    <motion.section
      id="work"
      className="py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <h2 className="display-5 text-center mb-5">Recent Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="col-md-4 mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <div className="card project-card">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="project-icons">
                  <a href={project. vercelLink} target="_blank" rel="noopener noreferrer" className="project-icon">
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-icon">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Work;