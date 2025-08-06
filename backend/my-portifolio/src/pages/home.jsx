import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload, FaWhatsapp } from 'react-icons/fa';

import avatar from "../assets/avatar.gif"

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    "Web Developer",
    "React Expert",
    "UI/UX Enthusiast",
    "Graphic Designer",
    "Full Stack Specialist"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => 
        // this code makes the text circle if the prev index is equal to last index it goes to index 0 else take last index and add it to one
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    enter: { 
      opacity: 0, 
      y: 20,
      position: 'absolute'
    },
    center: { 
      opacity: 1, 
      y: 0,
      position: 'relative'
    },
    exit: { 
      opacity: 0, 
      y: -20,
      position: 'absolute'
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-12 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        <div className="space-y-6">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm <span className="text-cyan-500">Etiene</span>
          </motion.h1>

          <div className="h-16 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentTextIndex}
                className="text-2xl md:text-3xl font-semibold text-gray-300"
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {texts[currentTextIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.p 
            className="text-gray-400 text-lg max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I create beautiful, responsive websites with modern technologies like React, 
            Tailwind CSS, and Node.js. Passionate about crafting exceptional user experiences.
          </motion.p>

          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white font-semibold transition duration-300"
            >
              View My Work
            </motion.a>

            <motion.a
              href="/resume/Etiene_Niyomugabo.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-transparent border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600/20 rounded-lg font-semibold transition duration-300 flex items-center gap-2"
            >
              <FaFileDownload /> Download CV
            </motion.a>
          </div>

          <motion.div 
            className="flex gap-4 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <a href="https://github.com/nietiene" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition duration-300">
              <FaGithub className="text-white text-xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition duration-300">
              <FaLinkedin className="text-white text-xl" />
            </a>
            <a href="https://wa.me/+250728184299" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-green-500 rounded-full transition duration-300">
              <FaWhatsapp className="text-white text-xl" />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-lg shadow-cyan-500/20">
          <img src={avatar}
             alt='Animated Developer'
             className='w-65 h-64'
             loading='lazy'
             decoding='async'
              />
            <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;