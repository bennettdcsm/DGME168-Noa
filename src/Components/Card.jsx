import {motion} from "motion/react";

export default function Card(props) {

    const {style, text, image, containerRef} = props;


    return image && !text ? (
        <motion.img
            className='absolute w-15 cursor-grab'
            src={image}
            style={style}
            animate={{scale:1}}
            whileHover={{scale: 1.05}}
            drag
            dragConstraints={containerRef}
            dragElastic={1}
            />
    ) : (
        <motion.div
            className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
            style={style}
            animate={{scale:1}}
            whileHover={{scale: 1.05}}
            drag
            dragConstraints={containerRef}
            dragElastic={1}
        >
            {text}
        </motion.div>
    )
}