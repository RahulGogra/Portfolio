import { useState, useEffect } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(
        localStorage.getItem("theme") === "darkmode"
    );

    // Toggle the menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        // Apply the theme on component mount
        const elementsToToggle = document.querySelectorAll(
            "body, .slider, #home, #home h2, .typed-text::after, .Your.Image, .socials img, .Quote, .center-container, .experience-page ,.experience-description,.experience-item,.experience-description p,.section-title, .project-card, .project-description, .tech-item,.qualifications h1, .qualification-item, .qualification-item h2, .qualification-item h3, .qualification-item span, .qualification-item p"
        );
        if (isChecked) {
            elementsToToggle.forEach((element) =>
                element.classList.add("darkmode")
            );
        } else {
            elementsToToggle.forEach((element) =>
                element.classList.remove("darkmode")
            );
        }
    }, [isChecked]);

    const toggleTheme = () => {
        setIsChecked(!isChecked);
        localStorage.setItem("theme", isChecked ? "lightmode" : "darkmode");
    };

    return (
        <header className="hidden-header">
            <div className="top-menu">
                <ul className={`menu ${menuOpen ? "open" : ""}`}>
                    <li className="hamburger" onClick={toggleMenu}>
                        <div
                            className={`bar bar1 ${menuOpen ? "cross" : ""}`}
                        ></div>
                        <div
                            className={`bar bar2 ${menuOpen ? "cross" : ""}`}
                        ></div>
                        <div
                            className={`bar bar3 ${menuOpen ? "cross" : ""}`}
                        ></div>
                    </li>
                    <li className="menu-items">
                        <a href="/">Home</a>
                    </li>
                    <li className="menu-items">
                        <a href="/experience">Experience</a>
                    </li>
                    <li className="menu-items">
                        <a href="/education">Education</a>
                    </li>
                    <li className="menu-items">
                        <a href="/projects">Projects</a>
                    </li>
                    <label className="switch menu-items">
                        <input
                            type="checkbox"
                            id="theme-toggle"
                            checked={isChecked}
                            onChange={toggleTheme}
                        />
                        <span className="slider"></span>
                    </label>
                    <li className="my-name">
                        <a>Rahul Gogra</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
