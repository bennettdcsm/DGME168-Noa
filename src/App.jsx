import './App.css'
import Navbar from "./Sections/Navbar.jsx";
import Hero from "./Sections/hero.jsx";
import About from "./Sections/About.jsx";
import Projects from "./Sections/Projects.jsx";
import Experience from "./Sections/Experience.jsx";
import Contact from "./Sections/Contact.jsx";

export default function App() {
    return (
        <div>
            <div className="container mx-auto max-w-7xl">
                <Navbar/>
                    <Hero/>
                    <About/>
                    <Projects/>
                    <Experience/>
                <Contact/>
            </div>
        </div>
    )
}
