// src/components/TriangleBackground.jsx
import { useEffect, useRef } from "react";

const TriangleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const drawTriangle = (x, y, size, color) => {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + size, y);
            ctx.lineTo(x + size / 2, y - (size * Math.sqrt(3)) / 2);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
        };

        const generateRandomTriangles = () => {
            const width = canvas.width;
            const height = canvas.height;

            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < 100; i++) {
                const size = Math.random() * 100 + 20;
                const x = Math.random() * width;
                const y = Math.random() * height;
                const color = `rgba(${Math.random() * 255}, ${
                    Math.random() * 255
                }, ${Math.random() * 255}, ${Math.random() * 1})`;

                drawTriangle(x, y, size, color);
            }
        };

        // Adjust canvas size to the window size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Draw initial triangles
        generateRandomTriangles();

        // Redraw on window resize
        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            generateRandomTriangles();
        });

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", generateRandomTriangles);
        };
    }, []);

    return <canvas ref={canvasRef} className="triangle-background"></canvas>;
};

export default TriangleBackground;
