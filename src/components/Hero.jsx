import { useEffect, useRef } from "react";

import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";


function Hero() {

    /* =====================================================
       MOUSE POSITION
    ===================================================== */

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, {
        stiffness: 60,
        damping: 20,
    });

    const smoothY = useSpring(mouseY, {
        stiffness: 60,
        damping: 20,
    });


    /* =====================================================
       SUBTLE PARALLAX
    ===================================================== */

    const headingX = useTransform(
        smoothX,
        [-100, 100],
        [-8, 8]
    );

    const headingY = useTransform(
        smoothY,
        [-100, 100],
        [-5, 5]
    );

    const subtitleX = useTransform(
        smoothX,
        [-100, 100],
        [-4, 4]
    );

    const subtitleY = useTransform(
        smoothY,
        [-100, 100],
        [-3, 3]
    );

    const statusX = useTransform(
        smoothX,
        [-100, 100],
        [-2, 2]
    );

    const statusY = useTransform(
        smoothY,
        [-100, 100],
        [-2, 2]
    );


    /* =====================================================
       MOUSE HANDLER
    ===================================================== */

    const handleMouseMove = (event) => {

        const x =
            event.clientX -
            window.innerWidth / 2;

        const y =
            event.clientY -
            window.innerHeight / 2;

        mouseX.set(x * 0.12);
        mouseY.set(y * 0.12);
    };


    const handleMouseLeave = () => {

        mouseX.set(0);
        mouseY.set(0);
    };


    return (

        <section
            className="hero"
            id="home"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >

            {/* =================================================
                MOVING PORTFOLIO WALLPAPER
            ================================================= */}

            <PortfolioWallpaper />


            <div className="hero-content">


                {/* =================================================
                    STATUS
                ================================================= */}

                <motion.div
                    className="status"

                    initial={{
                        opacity: 0,
                        y: 15,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                    }}

                    style={{
                        x: statusX,
                        y: statusY,
                    }}

                    transition={{
                        opacity: {
                            duration: 0.6,
                            delay: 0.1,
                        },

                        y: {
                            duration: 0.6,
                            delay: 0.1,
                            ease: "easeOut",
                        },
                    }}
                >

                    <span className="status-dot"></span>

                    Available for opportunities

                </motion.div>


                {/* =================================================
                    MAIN HEADING
                ================================================= */}

                <motion.h1

                    initial={{
                        opacity: 0,
                        y: 35,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                    }}

                    style={{
                        x: headingX,
                        y: headingY,
                    }}

                    transition={{
                        opacity: {
                            duration: 0.8,
                            delay: 0.2,
                        },

                        y: {
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1],
                        },
                    }}
                >

                    <span className="white">
                        I BUILD
                    </span>

                    <span className="blue">
                        DIGITAL
                    </span>

                    <br />

                    <span className="blue">
                        SYSTEMS.
                    </span>

                </motion.h1>


                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <motion.p
                    className="hero-subtitle"

                    initial={{
                        opacity: 0,
                        y: 20,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                    }}

                    style={{
                        x: subtitleX,
                        y: subtitleY,
                    }}

                    transition={{
                        opacity: {
                            duration: 0.7,
                            delay: 0.4,
                        },

                        y: {
                            duration: 0.7,
                            delay: 0.4,
                            ease: "easeOut",
                        },
                    }}
                >

                    Developer building web applications,
                    dashboards and digital experiences that
                    solve real problems.

                </motion.p>


                {/* =================================================
                    BUTTONS
                ================================================= */}

                <motion.div

                    className="hero-actions"

                    initial={{
                        opacity: 0,
                        y: 20,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                    }}

                    transition={{
                        duration: 0.7,
                        delay: 0.55,
                        ease: "easeOut",
                    }}
                >

                    <MagneticButton
                        href="#projects"
                        className="btn btn-primary"
                    >

                        Explore My Work

                        <span>↗</span>

                    </MagneticButton>


                    <MagneticButton
                        href="/Pk Sankeerth resume.pdf"
                        className="btn btn-secondary"
                        download
                    >

                        Download Resume

                        <span>↓</span>

                    </MagneticButton>

                </motion.div>

            </div>

        </section>
    );
}


/* =========================================================
   PORTFOLIO DVD WALLPAPER
========================================================= */

function PortfolioWallpaper() {

    const logoRef = useRef(null);

    useEffect(() => {

        const logo = logoRef.current;

        if (!logo) return;

        let animationFrame;

        let x = 40;
        let y = 80;

        let velocityX = 1.5;
        let velocityY = 1.5;


        const updatePosition = () => {

            const hero = logo.parentElement;

            if (!hero) return;

            const heroWidth = hero.clientWidth;
            const heroHeight = hero.clientHeight;

            const logoWidth = logo.offsetWidth;
            const logoHeight = logo.offsetHeight;


            x += velocityX;
            y += velocityY;


            /* RIGHT WALL */

            if (x + logoWidth >= heroWidth) {

                x = heroWidth - logoWidth;

                velocityX *= -1;
            }


            /* LEFT WALL */

            if (x <= 0) {

                x = 0;

                velocityX *= -1;
            }


            /* BOTTOM WALL */

            if (y + logoHeight >= heroHeight) {

                y = heroHeight - logoHeight;

                velocityY *= -1;
            }


            /* TOP WALL */

            if (y <= 0) {

                y = 0;

                velocityY *= -1;
            }


            logo.style.transform =
                `translate3d(${x}px, ${y}px, 0)`;


            animationFrame =
                requestAnimationFrame(updatePosition);
        };


        animationFrame =
            requestAnimationFrame(updatePosition);


        return () => {

            cancelAnimationFrame(animationFrame);

        };

    }, []);


    return (

        <div
            ref={logoRef}
            className="portfolio-wallpaper"
            aria-hidden="true"
        >
            PORTFOLIO
        </div>

    );
}


/* =========================================================
   MAGNETIC BUTTON
========================================================= */

function MagneticButton({
    href,
    className,
    children,
    download,
}) {

    const x = useMotionValue(0);
    const y = useMotionValue(0);


    const springX = useSpring(x, {
        stiffness: 300,
        damping: 15,
    });

    const springY = useSpring(y, {
        stiffness: 300,
        damping: 15,
    });


    const handleMove = (event) => {

        const rect =
            event.currentTarget.getBoundingClientRect();


        const xPosition =
            event.clientX -
            (rect.left + rect.width / 2);

        const yPosition =
            event.clientY -
            (rect.top + rect.height / 2);


        x.set(xPosition * 0.15);
        y.set(yPosition * 0.15);
    };


    const reset = () => {

        x.set(0);
        y.set(0);
    };


    return (

        <motion.a

            href={href}

            className={className}

            download={download}

            style={{
                x: springX,
                y: springY,
            }}

            onMouseMove={handleMove}
            onMouseLeave={reset}

            whileHover={{
                scale: 1.03,
            }}

            whileTap={{
                scale: 0.96,
            }}
        >

            {children}

        </motion.a>
    );
}


export default Hero;