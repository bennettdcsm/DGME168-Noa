import {myProjects} from "../constants/index.js";
import Project from "../Components/Project.jsx";
import {motion, useSpring} from "motion/react";
import {useMotionValue} from "framer-motion";
import {useState} from "react";

export default function Projects() {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, {damping: 10, stiffness: 50});
    const springY = useSpring(y, {damping: 10, stiffness: 50});

    const [preview, setPreview] = useState(null);

    const handleMouseMove = (e) => {
        x.set(e.clientX + 20);
        y.set(e.clientY + 20);
    }

    return (
        <section onMouseMove={handleMouseMove} className="relative c-space section-spacing " id='work'>
            <h2 className='text-heading'>My Work</h2>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px]" />
            {myProjects.map((project) => (
                <motion.div initial={{opacity:0, y:50}} whileInView={{opacity: 1, y:0}} transition={{delay:.2}}>
                    <Project key={project.id} {...project} setPreview={setPreview}/>
                </motion.div>
            ))}
            {preview && (

                <motion.img
                    className='fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80 sm:hidden'
                    src={preview}
                    style={{x: springX, y: springY}}/>
            )}
        </section>
    )
}