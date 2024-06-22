import { useState, useEffect } from "react";

function Header() {
    function toggleMenu() {
        var menuitems = document.querySelector(".menu-items");
        var menu = document.querySelector(".menu");
        var hamburger = document.querySelector(".hamburger");

        if (
            menuitems.style.display === "flex" ||
            menuitems.style.display === ""
        ) {
            menu.style.bottom = ""; /* Show the menu */
            menu.style.height = "70px";
            menu.style.flexDirection = "row";
            menu.style.justifyContent = "left";
            menu.style.padding = "0px";
            marginRemoveMenuItems();
            hideMenuItems();
        } else {
            menu.style.bottom = "0"; /* Show the menu */
            menu.style.height = "100%";
            menu.style.zIndex = "10";
            menu.style.flexDirection = "column";
            menu.style.justifyContent = "flex-start";
            menu.style.padding = "100px";
            marginApplyMenuItems();
            showMenuItems();
        }

        hamburger.classList.toggle("cross"); // Toggle the 'cross' class
    }

    function hideMenuItems() {
        var menuItems = document.querySelectorAll(".menu-items"); // Get all elements with the class "menu-items"
        menuItems.forEach(function (item) {
            item.style.display = "none";
        });
    }

    function showMenuItems() {
        var menuItems = document.querySelectorAll(".menu-items"); // Get all elements with the class "menu-items"
        menuItems.forEach(function (item) {
            item.style.display = "flex";
        });
    }

    function marginApplyMenuItems() {
        var menuItems = document.querySelectorAll(".menu-items"); // Get all elements with the class "menu-items"
        menuItems.forEach(function (item) {
            item.style.margin = "30px";
        });
    }

    function marginRemoveMenuItems() {
        var menuItems = document.querySelectorAll(".menu-items"); // Get all elements with the class "menu-items"
        menuItems.forEach(function (item) {
            item.style.margin = "0px";
        });
    }

    const [isChecked, setIsChecked] = useState(
        localStorage.getItem("theme") === "darkmode"
    );

    useEffect(() => {
        const elementsToToggle = document.querySelectorAll(
            "body, .slider, #home, #home h2, .typed-text::after, .Your.Image, .socials img, .Quote, .center-container, .project1,.qualifications h1, .qualification-item, .qualification-item h2, .qualification-item h3, .qualification-item span, .qualification-item p"
        );
        document.body.classList.add(
            isChecked
                ? elementsToToggle.forEach((element) =>
                      element.classList.add("darkmode")
                  )
                : elementsToToggle.forEach((element) =>
                      element.classList.add("lightmode")
                  )
        );
    }, [isChecked]);

    const toggleTheme = () => {
        const elementsToToggle = document.querySelectorAll(
            "body, .slider, #home, #home h2, .typed-text::after, .Your.Image, .socials img, .Quote, .center-container, .project1,.qualifications h1, .qualification-item, .qualification-item h2, .qualification-item h3, .qualification-item span, .qualification-item p"
        );

        if (isChecked) {
            elementsToToggle.forEach((element) =>
                element.classList.remove("darkmode")
            );
            localStorage.setItem("theme", "lightmode");
        } else {
            elementsToToggle.forEach((element) =>
                element.classList.add("darkmode")
            );
            localStorage.setItem("theme", "darkmode");
        }
        setIsChecked(!isChecked);
    };

    return (
        <header className="hidden-header">
            <div className="top-menu">
                <ul className="menu">
                    <li className="hamburger" onClick={() => toggleMenu()}>
                        <div className="bar bar1"></div>
                        <div className="bar bar2"></div>
                        <div className="bar bar3"></div>
                    </li>
                    <li>
                        <a href="/" className="menu-items">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/experience" className="menu-items">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="/education" className="menu-items">
                            Education
                        </a>
                    </li>
                    <li>
                        <a href="/projects" className="menu-items">
                            Projects
                        </a>
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
