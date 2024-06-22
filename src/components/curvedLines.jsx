// CurvedLines.jsx
import { useEffect } from "react";
import "../css/curvedLines.css";

const CurvedLines = () => {
    useEffect(() => {
        const svg = document.getElementById("curved-lines-svg");
        const svgWidth = svg.clientWidth;
        const svgHeight = svg.clientHeight;

        const generateRandomPoint = (min, max) =>
            Math.random() * (max - min) + min;

        const generatePathData = () => {
            const startX = generateRandomPoint(50, svgWidth - 50);
            const startY = generateRandomPoint(50, svgHeight - 50);
            const endX = generateRandomPoint(50, svgWidth - 50);
            const endY = generateRandomPoint(50, svgHeight - 50);
            const controlX1 = generateRandomPoint(50, svgWidth - 50);
            const controlY1 = generateRandomPoint(50, svgHeight - 50);
            const controlX2 = generateRandomPoint(50, svgWidth - 50);
            const controlY2 = generateRandomPoint(50, svgHeight - 50);

            return `M ${startX},${startY} C ${controlX1},${controlY1} ${controlX2},${controlY2} ${endX},${endY}`;
        };

        const paths = [];
        for (let i = 0; i < 20; i++) {
            const pathData = generatePathData();
            const color = `rgb(${Math.random() * 255}, ${
                Math.random() * 255
            }, ${Math.random() * 255})`;
            paths.push(
                <path
                    key={i}
                    d={pathData}
                    stroke={color}
                    strokeWidth="2"
                    fill="none"
                />
            );
        }

        svg.innerHTML = paths.map((path) => path.outerHTML).join("");
    }, []);

    return (
        <svg
            id="curved-lines-svg"
            className="curved-lines-svg"
            viewBox="0 0 800 600"
        ></svg>
    );
};

export default CurvedLines;
