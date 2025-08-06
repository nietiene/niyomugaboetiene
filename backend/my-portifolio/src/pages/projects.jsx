import React from "react";
import { motion, stagger } from "framer-motion";
import { FaGithub, FaDatabase } from "react-icons/fa";
import {
    SiNodedotjs,
    SiMongodb,
    SiTailwindcss,
    SiTypescript,
    SiNextdotjs,
    SiPhp,
    SiReact

} from "react-icons/si"

import studentIllustration from "../assets/student.png"
import chatAppIllustration from "../assets/chat-app.png"
import libraryAppIllustration from "../assets/library-managment.png"

import myPortfolio from "../assets/portfolio.png"

const Projects = () => {
    const projects = [
        { 
            title: "Real-Time Chat Application",
            tech: [
                { icon: <SiReact className="text-cyan-400" />, name: "React"},
                { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js"},
                { icon: <FaDatabase className="text-yellow-400" />, name: "MySQL"},
            ],
            description: 
            "A socket.io based chat application with real-tie messaging, user authentication and message history.",
            illustration: chatAppIllustration,
            code: "https://github.com/nietiene/Chat-app-frontend"
        },
        {
            title: "Student Managment System",
            tech: [
                {icon: <SiPhp className="text-purple-500"/>, name: "PHP"},
                {icon: <SiTailwindcss className="text-cyan-400"/>, name: "Tailwindcss"},
                {icon: <FaDatabase className="text-green-600"/>, name: "MySQL"},
            ],
            description:
            "Student Management System with Student managment, user authentication, and Role based access control.",
            illustration: studentIllustration,
            code: "https://github.com/nietiene/Gikonko-Tss-Managment-system"
        },

        {
            title: "Portfolio Website",
            tech: [
                { icon: <SiReact className="text-cyan-400" />, name: "React.js"},
                { icon: <SiTailwindcss className="text-cyan-300" />, name: "Tailwind"},
                { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript"},
            ],
            description: 
              "A responsive portfolio website showcasting project, skills and contact information with smooth animations.",
              illustration: myPortfolio,
              code: "https://github.com/nietiene/my-react-portfolio",
        },
        {
            title: "Library Management System",
            tech: [
                {icon: <SiReact className="text-cyan-400"/>, name: "React"},
                {icon: <SiNodedotjs className="text-green-500"/>, name: "Node.js"},
                {icon: <SiMongodb className="text-green-500"/>, name: "MongoDb"},
            ],
            description:
            "Full-stack Library management application with mananging student functionality and Role based access control",
            illustration: libraryAppIllustration,
            code: "https://github.com/nietiene/Library-Management-System"
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section
        name="projects"
          className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-300 flex items-center justify-center px-4 md:px-16 py-20"
        >
            <div className="max-w-6xl w-full">
                <motion.div
                 variants={containerVariants}
                 initial="hidden"
                 animate="visible"
                >
                    <motion.h2 
                       className="text-4xl font-bold text-cyan-500 mb-8 text-center"
                       variants={itemVariants}
                    >
                        My <span className="text-white">Projects </span>
                    </motion.h2>

                    <motion.p
                      className="text-lg leading-relaxed mb-12 text-center mx-w-2xl mx-auto"
                      variants={itemVariants}
                    >
                        Here are some of my projects available on GitHub. Each demonstrates different aspects of my full-stack develpment skills.
                      </motion.p>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                      >
                        {projects.map((projects, index) => (
                            <motion.div
                              key={index}
                              className="bg-grray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                              variants={itemVariants}
                              whileHover={{ y: -5 }}
                              >
                                <div className="relative h-48 overflow-hidden flex items-center bg-gray-700/30">
                                    <img src={projects.illustration} alt={projects.title} 
                                    className="w-2/3 h-2/3 object-contain"/>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {projects.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {projects.tech.map((tech, i) => (
                                            <span 
                                            key={i}
                                            className="flex items-center gap-1 bg-gray-700/50 px-4 py-1 rounded-full text-sm"
                                            >
                                                {tech.icon}
                                                {tech.name}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-cyan-500 mb-6">{projects.description}</p>

                                    <div className="flex gay-4">
                                        <a href={projects.code}
                                           rel="noopener noreferrer"
                                           className="flex items-center gap-2 px-2 py-2 border border-gray-600 hover:bg-gray-700/50
                                           rounded-full transition-colors text-cyan-500"
                                        >
                                            <FaGithub/>
                                            View Code
                                        </a>
                                    </div>
                                </div>
                              </motion.div>
                        ))}
                      </div>
                </motion.div>
            </div>
           </section>
    )
}

export default Projects