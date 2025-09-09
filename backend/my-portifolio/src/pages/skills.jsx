import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
    FaNodeJs, FaPython, FaPhp, FaDatabase, FaGitAlt,
    FaGithub, FaFigma, FaFileUpload, FaUserShield, FaPassport
} from "react-icons/fa"
import {
  SiTailwindcss, SiExpress, SiFlask, SiDjango, SiMongodb,
  SiPostman, SiVercel, SiSocketdotio, SiJavascript, SiLaravel, SiSolidity, SiEthers, SiRemix
} from "react-icons/si"

import skillsAnimation from "../assets/skillss.gif"

const Skills = () => {
    const VSCodeIcon = ({ className }) => (
        <svg
            className={className}
            width="24" 
            height="24"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M127.987 0c70.69 0 128 57.31 128 128s-57.31 128-128 128S0 198.69 0 128 57.31 0 127.987 0z" fill="#0065A9"/>
            <path d="M83.002 105.226L63.001 123.14a5.001 5.001 0 000 7.71l20.001 17.913a5 5 0 006.622.03l91.064-81.616a2.5 2.5 0 000-3.77L89.623 31.799a2.5 2.5 0 00-3.28-.025l-20 17.889a5 5 0 00-.003 7.68l69.228 61.698-52.565 46.865z" fill="#007ACC"/>
            <path d="M173.048 200.516a5 5 0 01-3.283 1.242H87.5a2.5 2.5 0 01-2.5-2.5V149.39l48.335-42.93 39.713 35.416v56.13z" fill="#1F9CF0"/>
        </svg>
    );

    const DartIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 256 256"
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="#0175C2" d="M128 0L256 128L128 256L0 128Z" />
    <path fill="#29B6F6" d="M128 0L128 256L0 128Z" />
  </svg>
);


    const skillsCategories = [
        {
            name: "Frontend",
            items: [
                { icon: <FaHtml5 className="text-orange-500"/>, name: "HTML5"},
                { icon: <FaCss3Alt className="text-blue-500"/>, name: "CSS3"},
                { icon: <FaJs className="text-yellow-400"/>, name: "JavaScript"},
                { icon: <FaReact className="text-cyan-400"/>, name: "React"},
                { icon: <FaBootstrap className="text-purple-500"/>, name: "Bootstrap"},
                { icon: <SiEthers className="text-green-300"/>, name: "Ethers"},
                { icon: <SiTailwindcss className="text-cyan-300"/>, name: "Tailwind"},
            ]
        },
        {
            name: "Backend",
            items: [
                { icon: <FaNodeJs className="text-green-500" />, name:"Node.js"},
                { icon: <SiExpress className="text-gray-300" />, name:"Express"},
                { icon: <SiFlask className="text-gray-300" />,  name:"Flask"},
                { icon: <FaPython className="text-blue-400"/>, name:"Python"},
                { icon: <SiDjango className="text-emerald-800" />, name:"Django"},
                { icon: <FaPhp className="text-indigo-500" />,  name:"PHP"},
                { icon: <SiLaravel className="text-red-600"/>, name: "Laravel"},
                { icon: <SiSolidity className="text-blue-500"/>, name: "Solidity"},
            ]
        },
        {
            name: "Databases",
            items: [
                { icon: <FaDatabase className="text-amber-500"/>, name: "MySQL"},
                { icon: <SiMongodb className="text-green-600"/>, name: "MongoDB"}
            ]
        },
        {
            name: "Dev Tools",
            items: [
                { icon: <FaGitAlt className="text-orange-600"/>, name: "Git"},
                { icon: <FaGithub className="text-white"/>, name: "GitHub"},
                { icon: <VSCodeIcon className="text-blue-500"/>, name: "VS Code"},
                { icon: <SiPostman className="text-orange-400"/>, name: "Postman"},
                { icon: <SiRemix className="text-cyan-500"/>, name: "Remix IDE"},
                { icon: <FaFigma className="text-purple-400"/>, name: "Figma"},
            ]
        },
        {
            name: "Others",
            items: [
                { name: "REST APIs", icon: <SiPostman className="text-orange-400" /> },
                { icon: <SiSocketdotio className="text-white"/>, name: "Socket.IO"},
                { name: "EJS", icon:  <SiJavascript className="text-yellow-400"/> },
                { name: "Multer", icon: <FaFileUpload className="text-blue-400" /> },
                { name: "Auth", icon: <FaUserShield className="text-green-400" /> },
                { name: "Passport", icon: <FaPassport className="text-cyan-400" /> },
                { name: "Dart", icon: <DartIcon className="text-cyan-400" /> },

            ]
        }
    ];

    // Simplified animation variants for better performance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1, 
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <section
            id="skills"
            className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 
            text-gray-300 flex items-center justify-center px-4 md:px-16 py-20 overflow-hidden"
        >
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                        duration: 0.6, 
                        type: "spring",
                        stiffness: 100,
                        damping: 10
                    }}
                >
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-cyan-500 mb-6"
                            variants={itemVariants}
                        >
                            My <span className="text-white">Skills</span>
                        </motion.h2>

                        <motion.p
                            className="text-base md:text-lg leading-relaxed mb-8"
                            variants={itemVariants}
                        >
                            Here's a comprehensive overview of the technologies and tools I work with to build modern web applications.
                        </motion.p>

                        <div className="space-y-8">
                            {skillsCategories.map((category, catIndex) => (
                                <motion.div
                                    key={catIndex}
                                    variants={itemVariants}
                                >
                                    <motion.h3
                                        className="text-xl md:text-2xl font-semibold text-white mb-4 border-b border-cyan-500/30 pb-2"
                                        variants={itemVariants}
                                    >
                                        {category.name}
                                    </motion.h3>

                                    <motion.div
                                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3"
                                        variants={containerVariants}
                                    >
                                        {category.items.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skillIndex}
                                                className="flex flex-col items-center gap-2 bg-gray-800/50 px-3 py-3 rounded-lg hover:bg-gray-800/70 transition-colors"
                                                whileHover={{ 
                                                    scale: 1.03,
                                                    boxShadow: "0 0 10px rgba(34, 211, 238, 0.3)"
                                                }}
                                                variants={itemVariants}
                                                custom={skillIndex * 0.1}
                                            >
                                                <span className="text-2xl mb-1">{skill.icon}</span>
                                                <span className="text-sm md:text-base text-center text-cyan-400">{skill.name}</span>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hidden lg:block relative w-full max-w-md"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                        duration: 0.6,
                        delay: 0.2
                    }}
                >
                        <img 
                            src={skillsAnimation} 
                            alt="Animated developer"
                            className="w-full"
                            loading="lazy"
                            decoding="async"
                        />
                    <motion.div
                        className="absolute -inset-4 border-2 border-cyan-400 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ opacity: 0.7 }}
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default Skills;