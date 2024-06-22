import { useEffect, useRef } from "react";

function Dot() {
    const dotRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;
        const speed = 1.2;

        const angle = Math.random() * 2 * Math.PI;
        dot.dx = Math.cos(angle) * speed;
        dot.dy = Math.sin(angle) * speed;

        function moveDot() {
            let newX = dot.getBoundingClientRect().left + dot.dx;
            let newY = dot.getBoundingClientRect().top + dot.dy;

            if (newX < 0 || newX > window.innerWidth) {
                dot.dx = -dot.dx;
            }
            if (newY < 0 || newY > window.innerHeight) {
                dot.dy = -dot.dy;
            }

            dot.style.left = newX + "px";
            dot.style.top = newY + "px";

            requestAnimationFrame(moveDot);
        }

        moveDot();

        return () => {
            cancelAnimationFrame(moveDot);
        };
    }, []);

    const randomSize = Math.floor(Math.random() * (20 - 3 + 1) + 3);

    return (
        <div
            ref={dotRef}
            className="dot"
            style={{
                width: randomSize + "px",
                height: randomSize + "px",
                left: Math.random() * (window.innerWidth - randomSize) + "px",
                top: Math.random() * (window.innerHeight - randomSize) + "px",
                backgroundColor:
                    "#" + ((Math.random() * 0xffffff) << 0).toString(16),
                position: "fixed",
                borderRadius: "50%", // Make the dot circular
            }}
        ></div>
    );
}

function Dots() {
    const dots = [];
    for (let i = 0; i < 60; i++) {
        dots.push(<Dot key={i} />);
    }

    return <div>{dots}</div>;
}

export default Dots;
