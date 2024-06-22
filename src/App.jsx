import {
    BrowserRouter as Router,
    Route,
    Outlet,
    Routes,
} from "react-router-dom";
import Header from "./components/header";
import Experience from "./components/experience";
import Education from "./components/education";
import Projects from "./components/projects";
import Home from "./components/home";
import ContactForm from "./components/contactForm";
import "./App.css";
import "./css/triangleBackground.css";
import Dots from "./components/dot";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Dots />
                            <Outlet />
                        </>
                    }
                >
                    <Route index element={<Home />} />
                </Route>
                <Route path="/experience" element={<Experience />} />
                <Route path="/education" element={<Education />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<ContactForm />} />
            </Routes>
        </Router>
    );
};

export default App;
