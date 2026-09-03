import { useEffect, useRef } from "react";

function PortfolioLogo() {
    const logoRef = useRef(null);

    useEffect(() => {
        const logo = logoRef.current;

        if (!logo) return;

        let animationFrame;

        let x = 80;
        let y = 80;

        // Movement speed
        let velocityX = 0.45;
        let velocityY = 0.32;

        const updatePosition = () => {
            const hero = logo.parentElement;

            if (!hero) return;

            const heroWidth = hero.clientWidth;
            const heroHeight = hero.clientHeight;

            const logoWidth = logo.offsetWidth;
            const logoHeight = logo.offsetHeight;

            // Move
            x += velocityX;
            y += velocityY;

            // Right / left collision
            if (x + logoWidth >= heroWidth) {
                x = heroWidth - logoWidth;
                velocityX *= -1;
            }

            if (x <= 0) {
                x = 0;
                velocityX *= -1;
            }

            // Bottom / top collision
            if (y + logoHeight >= heroHeight) {
                y = heroHeight - logoHeight;
                velocityY *= -1;
            }

            if (y <= 0) {
                y = 0;
                velocityY *= -1;
            }

            logo.style.transform = `translate3d(${x}px, ${y}px, 0)`;

            animationFrame = requestAnimationFrame(updatePosition);
        };

        animationFrame = requestAnimationFrame(updatePosition);

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

export default PortfolioLogo;