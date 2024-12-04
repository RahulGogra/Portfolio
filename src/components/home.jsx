import { useState, useEffect } from "react";
import React from "react";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiNextdotjs,
    SiTailwindcss,
    SiBootstrap,
    SiPython,
    SiMongodb,
    SiFirebase,
    SiPostgresql,
    SiGit,
    SiGithub,
    SiMysql,
} from "react-icons/si";

const getColor = (color) => (color === "#000000" ? "var(--icon-color)" : color);
const skills = {
    title: "My Skills",
    data: [
        { skill: "HTML", icon: React.createElement(SiHtml5), color: "#e34f26" },
        { skill: "CSS", icon: React.createElement(SiCss3), color: "#264de4" },
        {
            skill: "JavaScript",
            icon: React.createElement(SiJavascript),
            color: "#f0db4f",
        },
        {
            skill: "TypeScript",
            icon: React.createElement(SiTypescript),
            color: "#3178c6",
        },
        {
            skill: "React",
            icon: React.createElement(SiReact),
            color: "#61dafb",
        },
        {
            skill: "Node.js",
            icon: React.createElement(SiNodedotjs),
            color: "#8cc84b",
        },
        {
            skill: "Express",
            icon: React.createElement(SiExpress),
            color: "#000000",
        },
        {
            skill: "Next.js",
            icon: React.createElement(SiNextdotjs),
            color: "#000000",
        },
        {
            skill: "Tailwind",
            icon: React.createElement(SiTailwindcss),
            color: "#38bdf8",
        },
        {
            skill: "Bootstrap",
            icon: React.createElement(SiBootstrap),
            color: "#7952b3",
        },
        {
            skill: "React Native",
            icon: React.createElement(SiReact),
            color: "#61dafb",
        },
        {
            skill: "Python",
            icon: React.createElement(SiPython),
            color: "#3572A5",
        },
        {
            skill: "MongoDB",
            icon: React.createElement(SiMongodb),
            color: "#4db33d",
        },
        {
            skill: "Firebase",
            icon: React.createElement(SiFirebase),
            color: "#ffcb2b",
        },
        {
            skill: "PostgreSQL",
            icon: React.createElement(SiPostgresql),
            color: "#3498db",
        },
        { skill: "Git", icon: React.createElement(SiGit), color: "#f05032" },
        {
            skill: "GitHub",
            icon: React.createElement(SiGithub),
            color: "#000000",
        },
        {
            skill: "MySql",
            icon: React.createElement(SiMysql),
            color: "#000000",
        },
    ],
};

function Home() {
    const [displayedText, setDisplayedText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const mailtoLink = `mailto:rgogra914@gmail.com?subject=Message from ${name}&body=Email: ${email}%0D%0A%0D%0A${message}`;
        window.location.href = mailtoLink;
    };
    useEffect(() => {
        const wordsList = [
            "Cyber Security Enthusiast",
            "Web Developer",
            "Coder",
            "Bug Bounty Hunter",
            "CTF Player",
        ];

        if (wordIndex < wordsList.length) {
            if (isTyping) {
                if (charIndex < wordsList[wordIndex].length) {
                    const timeout = setTimeout(() => {
                        setDisplayedText(
                            (prev) => prev + wordsList[wordIndex][charIndex]
                        );
                        setCharIndex((prev) => prev + 1);
                    }, 100); // Adjust typing speed here
                    return () => clearTimeout(timeout);
                } else if (charIndex === wordsList[wordIndex].length) {
                    const timeout = setTimeout(() => {
                        setWordIndex(0);
                    }, 2000); // Adjust delay here
                    clearTimeout(timeout);
                    setIsTyping(false);
                } else {
                    setIsTyping(false);
                }
            } else {
                if (charIndex > 0) {
                    const timeout = setTimeout(() => {
                        setDisplayedText((prev) => prev.slice(0, -1));
                        setCharIndex((prev) => prev - 1);
                    }, 50); // Adjust backspace speed here
                    return () => clearTimeout(timeout);
                } else {
                    setIsTyping(true);
                    setWordIndex((prev) => prev + 1);
                }
            }
        } else {
            setWordIndex(0);
        }
    }, [charIndex, wordIndex, isTyping]);

    return (
        <section id="home">
            <div className="typing-effect">
                <h2 className="typed-text">Hello, I am Rahul Gogra.</h2>
            </div>
            <div className="circle">
                <img src="/images/my-profile.jpg" className="Your Image" />
            </div>
            <div style={{ fontSize: "36px", fontFamily: "monospace" }}>
                {displayedText}
                <span className="cursor">.</span>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="socials">
                <a href="" target="_blank" rel="author">
                    <img
                        src="https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icon-download-png-and-vector-1.png"
                        alt="gmail"
                    />
                </a>
                <a
                    href="https://www.codechef.com/users/w_ck_d"
                    target="_blank"
                    rel="author"
                >
                    <img
                        src="https://static.uacdn.net/thumbnail/external-app-icons/ce4fd2180646452aa0b03c3ffa3ef8e2.png"
                        alt="codechef"
                    />
                </a>
                <a
                    href="https://www.instagram.com/rahulgogra07/"
                    target="_blank"
                    rel="author"
                >
                    <img src="images/Instagram_logo.svg" alt="instagram" />
                </a>
                <a
                    href="https://github.com/W-cked"
                    target="_blank"
                    rel="author"
                    className="github"
                >
                    <img src="/images/github.png" alt="github" />
                </a>
                <a
                    href="https://www.linkedin.com/in/rahul-gogra-ba4135203/"
                    target="_blank"
                    rel="author"
                >
                    <img src="images/linkdin.png" alt="linkdin" />
                </a>
            </div>

            <div className="about">
                <h3>About Me</h3>I am a Developer with skills in web
                development, back-end, and databases. This allows me to
                collaborate in the comprehensive design of web applications,
                from their initial conception to deployment.
                <br></br>
                <br></br> I am a Hindi speaker with an advanced level of
                English. I am familiar with Agile and Scrum methodologies, as
                well as the use of version control tools. My dedication and
                experience are reflected in the polished, high-quality projects
                I have shared on GitHub.
            </div>

            <div className="skills">
                <h1 style={{ fontSize: "24px" }}>{skills.title}</h1>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                    {skills.data.map(({ skill, icon, color }) => (
                        <div
                            key={skill}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                padding: "1rem",
                                borderRadius: "8px",
                                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "2rem",
                                    color: getColor(color),
                                }}
                            >
                                {icon}
                            </span>
                            <span>{skill}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="form contact-container">
                <h1>Contact Me</h1>
                <div className="formDes">
                    Don&apos;t hesitate to get in touch! I&apos;m excited about
                    new job opportunities. You can do so through this form, by
                    sending me a direct email, or by connecting with me on
                    LinkedIn or GitHub. Looking forward to connecting!
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows="5"
                        required
                    ></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    );
}

export default Home;
