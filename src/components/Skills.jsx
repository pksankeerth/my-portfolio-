import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiReact,
    SiBootstrap,
    SiVite,
    SiPhp,
    SiPython,
    SiFlask,
    SiDjango,
    SiMysql,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiGit,
    SiGithub,
    SiNpm,
    SiNetlify,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import {
    FiCode,
    FiCpu,
    FiEye,
    FiGlobe,
    FiLayers,
    FiLayout,
    FiMonitor,
    FiPenTool,
    FiSmartphone,
    FiTool,
    FiZap,
} from "react-icons/fi";


const skills = [

    /* =====================================================
       FRONTEND
    ====================================================== */

    {
        id: "frontend",
        name: "FRONTEND",
        title: "Frontend",

        description:
            "Building responsive, accessible and high-quality interfaces that deliver clean and intuitive digital experiences.",

        points: [
            "Modern & Performant",
            "Responsive Design",
            "Component Driven",
        ],

        technologies: [

            {
                name: "HTML5",
                icon: SiHtml5,
            },

            {
                name: "CSS",
                icon: SiCss,
            },

            {
                name: "JavaScript",
                icon: SiJavascript,
            },

            {
                name: "React",
                icon: SiReact,
            },

            {
                name: "Bootstrap",
                icon: SiBootstrap,
            },

            {
                name: "Vite",
                icon: SiVite,
            },

        ],
    },


    /* =====================================================
       BACKEND
    ====================================================== */

    {
        id: "backend",
        name: "BACKEND",
        title: "Backend",

        description:
            "Developing server-side applications, APIs and database-driven systems that support reliable digital products.",

        points: [
            "API Development",
            "Server-side Logic",
            "Database Integration",
        ],

        technologies: [

            {
                name: "Node.js",
                icon: SiNodedotjs,
            },

            {
                name: "Express.js",
                icon: SiExpress,
            },

            {
                name: "PHP",
                icon: SiPhp,
            },

            {
                name: "Python",
                icon: SiPython,
            },

            {
                name: "Flask",
                icon: SiFlask,
            },

            {
                name: "Django",
                icon: SiDjango,
            },

        ],
    },


    /* =====================================================
       DEVELOPMENT
    ====================================================== */

    {
        id: "development",
        name: "DEVELOPMENT",
        title: "Development",

        description:
            "Applying problem solving, data structures, algorithms and software engineering principles to build reliable solutions.",

        points: [
            "Problem Solving",
            "Data Structures",
            "Software Engineering",
        ],

        technologies: [

            {
                name: "DSA",
                icon: FiCode,
            },

            {
                name: "Algorithms",
                icon: FiZap,
            },

            {
                name: "OOP",
                icon: FiLayers,
            },

            {
                name: "REST APIs",
                icon: FiGlobe,
            },

            {
                name: "JSON",
                icon: FiCode,
            },

            {
                name: "MVC",
                icon: FiLayout,
            },

        ],
    },


    /* =====================================================
       AI / SYSTEMS
    ====================================================== */

    {
        id: "ai",
        name: "AI / SYSTEMS",
        title: "AI / Systems",

        description:
            "Exploring AI-powered applications and intelligent digital systems that turn complex problems into useful experiences.",

        points: [
            "AI Applications",
            "Machine Learning",
            "Computer Vision",
        ],

        technologies: [

            {
                name: "Python",
                icon: SiPython,
            },

            {
                name: "Machine Learning",
                icon: FiCpu,
            },

            {
                name: "Computer Vision",
                icon: FiEye,
            },

            {
                name: "Flask",
                icon: SiFlask,
            },

            {
                name: "AI APIs",
                icon: FiCpu,
            },

            {
                name: "Data Processing",
                icon: FiTool,
            },

        ],
    },


    /* =====================================================
       UI / UX
    ====================================================== */

    {
        id: "uiux",
        name: "UI / UX",
        title: "UI / UX",

        description:
            "Designing clean interfaces and interaction systems with attention to usability, consistency and visual hierarchy.",

        points: [
            "Clean Interfaces",
            "Interaction Design",
            "Visual Systems",
        ],

        technologies: [

            {
                name: "UI Design",
                icon: FiPenTool,
            },

            {
                name: "UX Design",
                icon: FiLayout,
            },

            {
                name: "Responsive UI",
                icon: FiMonitor,
            },

            {
                name: "Prototyping",
                icon: FiPenTool,
            },

            {
                name: "Design Systems",
                icon: FiLayers,
            },

            {
                name: "Accessibility",
                icon: FiSmartphone,
            },

        ],
    },


    /* =====================================================
       TOOLS
    ====================================================== */

    {
        id: "tools",
        name: "TOOLS",
        title: "Tools",

        description:
            "Using modern development tools and workflows to manage, build, test and deploy projects efficiently.",

        points: [
            "Version Control",
            "Deployment",
            "Development Workflow",
        ],

        technologies: [

            {
                name: "Git",
                icon: SiGit,
            },

            {
                name: "GitHub",
                icon: SiGithub,
            },

            {
                name: "VSCode",
                icon: VscVscode,
            },

            {
                name: "Vite",
                icon: SiVite,
            },

            {
                name: "Netlify",
                icon: SiNetlify,
            },

            {
                name: "npm",
                icon: SiNpm,
            },

        ],
    },

];


function Skills() {

    const [activeSkill, setActiveSkill] =
        useState("frontend");


    const selectedSkill =
        skills.find(
            (skill) =>
                skill.id === activeSkill
        );


    return (

        <section
            id="skills"
            className="skills-section"
        >

            <div className="skills-container">


                {/* =================================================
                    HEADER
                ================================================= */}

                <motion.div
                    className="skills-header"

                    initial={{
                        opacity: 0,
                        y: 30,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}

                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >

                    <div className="section-label">
                        02 / SKILLS
                    </div>


                    <h2>
                        My <span>Skills</span>
                    </h2>


                    <p>
                        A chain of skills that power
                        the digital systems I build.
                    </p>

                </motion.div>


                {/* =================================================
                    SKILL CHAIN
                ================================================= */}

                <motion.div
                    className="skill-chain"

                    initial={{
                        opacity: 0,
                        y: 25,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}

                    transition={{
                        duration: 0.7,
                        delay: 0.15,
                    }}
                >

                    <div className="chain-line"></div>


                    {skills.map(
                        (skill) => (

                            <button
                                type="button"
                                key={skill.id}

                                className={`skill-node ${
                                    activeSkill === skill.id
                                        ? "active"
                                        : ""
                                }`}

                                onClick={() =>
                                    setActiveSkill(
                                        skill.id
                                    )
                                }

                                aria-label={`Select ${skill.title} skill`}
                            >

                                <span className="node-circle">

                                    <span className="node-dot"></span>

                                </span>


                                <span className="node-label">
                                    {skill.name}
                                </span>

                            </button>

                        )
                    )}

                </motion.div>


                {/* =================================================
                    DETAIL PANEL
                ================================================= */}

                <AnimatePresence mode="wait">

                    <motion.div
                        key={selectedSkill.id}

                        className="skill-detail"

                        initial={{
                            opacity: 0,
                            y: 20,
                        }}

                        animate={{
                            opacity: 1,
                            y: 0,
                        }}

                        exit={{
                            opacity: 0,
                            y: -15,
                        }}

                        transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >


                        {/* =================================================
                            LEFT SIDE
                        ================================================= */}

                        <div className="skill-info">

                            <div className="selected-badge">
                                SELECTED SKILL
                            </div>


                            <h3>
                                {selectedSkill.title}
                            </h3>


                            <p className="skill-description">
                                {selectedSkill.description}
                            </p>


                            <div className="skill-points">

                                {selectedSkill.points.map(
                                    (point, index) => (

                                        <div
                                            className="skill-point"
                                            key={point}
                                        >

                                            <span className="point-icon">

                                                {index === 0
                                                    ? "✦"
                                                    : index === 1
                                                    ? "◇"
                                                    : "□"}

                                            </span>


                                            <span>
                                                {point}
                                            </span>

                                        </div>

                                    )
                                )}

                            </div>

                        </div>


                        {/* =================================================
                            RIGHT SIDE
                        ================================================= */}

                        <div className="technology-area">

                            <div className="technology-title">
                                TECHNOLOGIES
                            </div>


                            <div className="technology-grid">

                                {selectedSkill.technologies.map(
                                    (technology) => (

                                        <motion.div
                                            className="technology-card"

                                            key={technology.name}

                                            initial={{
                                                opacity: 0,
                                                y: 15,
                                            }}

                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}

                                            transition={{
                                                duration: 0.35,
                                            }}
                                        >

                                            <div className="technology-icon">

                                                <technology.icon />

                                            </div>


                                            <div className="technology-name">

                                                {technology.name}

                                            </div>

                                        </motion.div>

                                    )
                                )}

                            </div>

                        </div>

                    </motion.div>

                </AnimatePresence>

            </div>

        </section>
    );
}


export default Skills;