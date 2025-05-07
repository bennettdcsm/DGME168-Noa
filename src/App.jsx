import './App.css'
import Navbar from "./Sections/Navbar.jsx";
import Hero from "./Sections/hero.jsx";
import About from "./Sections/About.jsx";
import Projects from "./Sections/Projects.jsx";
import Experience from "./Sections/Experience.jsx";
import Contact from "./Sections/Contact.jsx";
import Footer from "./Sections/Footer.jsx";

export default function App() {
    return (
        <div>
            <div className="container mx-auto max-w-7xl md:items-start md:justify-start overflow-hidden c-space">
                <Navbar/>
                <Hero/>
                <About/>
                <Projects/>
                <Experience/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    )
}
