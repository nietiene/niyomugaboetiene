import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiFlask, SiMongodb, SiTypescript, SiNextdotjs } from "react-icons/si";

import aboutAnimation from "../assets/about.gif"
const About = () => {

  const techStack = [
    { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <FaPython className="text-blue-400" />, name: "Python" },
    { icon: <SiFlask className="text-gray-300" />, name: "Flask" },
    { icon: <FaDatabase className="text-amber-500" />, name: "MySQL" },
    { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
    { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" }
  ];

  return (
    <section 
      name="about"
      className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-300 flex items-center justify-center px-4 md:px-16 py-20"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* normal div but enhanced with animations */}
        <motion.div
          className="flex-1"
          // initial opacity: it start invisible and shifted to 40px to the left
          initial={{ opacity: 0, x: -40 }}
          // when it scrool int view it become full visible and move to normal postition
          whileInView={{ opacity: 1, x: 0 }}
          // animation run onve
          viewport={{ once: true }}
          // animation take 0.8s to finish
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-cyan-500 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            About <span className="text-white">Me</span>
          </motion.h2>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            // delay wait 0.4 before starting the animation
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-lg leading-relaxed">
              I'm <span className="font-semibold text-cyan-400">Etiene Niyomugabo</span>, a passionate full stack developer with a strong desire to build clean, user-friendly, and impactful digital experiences. What began as curiosity has envolved into a dedicated career path.
            </p>

            <p className="text-lg leading-relaxed">
              My expertise spans both frontend and backend technologies, allowing me to create seamless, full-featured applications from concept to deployment.
            </p>

            <div className="py-4">
              <h3 className="text-xl font-semibold text-white mb-4">Tech Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 * index }}
                  >
                    <span className="text-xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <ul className="space-y-3 text-lg">
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-cyan-400 mr-2">▹</span>
                <span>Building responsive, accessible web applications</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <span className="text-cyan-400 mr-2">▹</span>
                <span>Continuously learning modern technologies</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-cyan-400 mr-2">▹</span>
                <span>Based in Rwanda, open to remote opportunities</span>
              </motion.li>
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <Link to="/projects">
                <button className="mt-8 px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full text-lg font-medium shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                  View My Projects
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
        // flex-1 flex this part make division take 50% of the screen
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-md">
             <img src={aboutAnimation} 
             alt="Animated Developers"
             loading="lazy"
             decoding="async" 
            />
            <motion.div
              className="absolute -inset-4 border-2 border-cyan-400 rounded-2xl opacity-0 hover:opacity-100 transition-all duration-500"
              whileHover={{ opacity: 1 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;