import { useState, useEffect } from "react";

function Home() {
    const [displayedText, setDisplayedText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

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

            <div className="Quote">
                <h3>
                    Developers, pentesters, and bug hunters share a common
                    passion:
                </h3>
                <h2>
                    &quot;&quot;the pursuit of perfection in a world of constant
                    change.&quot;&quot;
                </h2>
            </div>
        </section>
    );
}

export default Home;
