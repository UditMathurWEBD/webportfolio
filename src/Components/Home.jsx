import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
    const technologies = [
        "Tech Stack",
  "HTML5",
  "CSS",
  "TailwindCSS",
  "Redux",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "NodeJS",
  "JavaScript",
  "ExpressJS",
  "ReactJS",
  "Figma",
  "Firebase",
  "MVC Architecture",
  "REST APIs",
  "Flutter",
  "Material UI"
];

  return (
    <>
      <motion.div
      initial={{ opacity: 0, y: 60 }}     // before entering
      animate={{ opacity: 3, y: 0 }}      // after entering
      exit={{ opacity: 0, y: -50 }}       // when exiting
      transition={{ duration: 1.5 }}
    >
        <div className='h-[80vh] flex flex-col justify-center items-start p-6 sm:p-0 md:max-w-[80%] m-auto lg:max-w-[50%]'>
        <div className='bg-[#27272D] flex p-1 w-max rounded-full items-center gap-2 pr-4 noticia-text-regular 
        text-sm hover:bg-[#D0E170] hover:text-black'>
            <img src='/dp.svg'></img>
            <h1>Udit Mathur</h1>
        </div>
        <h1 className='mt-4 noticia-text-bold text-2xl   sm:text-[42px]'>From concept to code , I turn<br/> ideas into working products.</h1>
        <p className='mt-4 text-[#BABABB] font-light'>I have experience working on both <span className='text-white font-bold'>frontend and backend development</span>. On the frontend, I’ve built user interfaces with modern frameworks and libraries, focusing on responsive design and smooth user interactions. </p>
        <div className='flex mt-6 gap-2'>
          <Link to="/Chat">
            <button className='bg-[#D0E170] px-4 py-2 rounded-full text-black text-sm font-semibold flex gap-2'>Say Hello <span>→</span> </button>
            </Link>
                      <Link to="/Projects">
             <button className='bg-black px-4 py-2 rounded-full text-white border border-white text-sm font-semibold flex gap-2'>View Projects <span>→</span> </button>
             </Link>
        </div>
         </div>

         <div className="overflow-hidden bg-[#D0E170] h-8 rotate-[-4deg] mb-6 flex items-center text-black text-sm font-bold">
  <div className="flex gap-8 whitespace-nowrap marquee">
       {[...technologies, ...technologies].map((tech)=>{
                return tech == "Tech Stack" ? <Link className='bg-green-500 px-2 rounded-full' to="/TechStack"><span key={tech}>{tech}</span> </Link> :  <span key={tech}>{tech}</span>
          })}
  </div>
    </div>
    </motion.div>
    </>

  )
}
