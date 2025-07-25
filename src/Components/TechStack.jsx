import React from 'react'
import { motion } from 'framer-motion';

export default function TechStack() {
    const frontendStack = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "WordPress",
  "Redux",
  "Figma",
  "Adobe Illustrator"
];
const backendStack = [
  "Node JS",
  "Express JS",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "REST APIs",
  "JWT",
  "OAuth (Google)",
  "PassportJS",
];



  return (
    <>
          <motion.div
      initial={{ opacity: 10, y: 60 }}     // before entering
      animate={{ opacity: 3, y: 0 }}      // after entering
      exit={{ opacity: 0, y: -10 }}       // when exiting
      transition={{ duration: 0.5 }}
    >
        <div >
            <img className='hidden lg:block absolute top-[200px] right-[160px] rotate-[20deg] w-[80px] hover:animate-bounce' src='/react.png'></img>
            <img className='hidden lg:block absolute top-[600px] right-[160px] rotate-[-20deg] hover:animate-bounce w-[80px]' src='/javascript.png'></img>
             <img className=' hidden lg:block absolute top-[600px] left-[60px] rotate-[20deg] hover:animate-bounce w-[80px]' src='/mongo-db.png'></img>
              <img className='hidden lg:block absolute top-[200px] left-[100px] rotate-[-20deg] w-[80px] hover:animate-bounce' src='/nodejs.png'></img>
        </div>
      <div className='h-auto sm:h-[90vh] mt-15 sm:mt-0 sm:mb-0 flex flex-col justify-center items-start p-6 sm:p-0 md:max-w-[80%] m-auto lg:max-w-[60%]'>
        <h1 className='noticia-text-bold text-2xl   sm:text-[42px]'>Tech Stack</h1>
        <p className='mt-2 text-[#BABABB] font-light'>A blend of design tools and development frameworks I work with daily. </p>
        <div className='mt-8'>
            <h1 className='border w-max border-[#D0E170] text-sm font-light text-[#D0E170] mt-8 px-4 py-2 rounded-xl hover:bg-[#D0E170] hover:text-black hover:font-bold'>Frontend & UI</h1>
            <div className='flex flex-wrap gap-4 mt-8'>
                {frontendStack.map((tech)=>{
                    return <div className='bg-[#18181B] rounded-xl px-4 py-3 border-[0.55px] border-[#4A4A4A] w-[150px] text-center text-sm'>{tech}</div>
                })}
            </div>
        </div>
        <div className='mt-8'>
            <h1 className='border w-max border-[#D0E170] text-sm font-light text-[#D0E170] mt-8 px-4 py-2 rounded-xl hover:bg-[#D0E170] hover:text-black hover:font-bold'>Backend</h1>
            <div className='flex flex-wrap gap-4 mt-8'>
                {backendStack.map((tech)=>{
                    return <div className='bg-[#18181B] rounded-xl px-4 py-3 border-[0.55px] border-[#4A4A4A] w-[150px] text-center text-sm'>{tech}</div>
                })}
            </div>
        </div>

      </div>
      </motion.div>
    </>
  )
}
