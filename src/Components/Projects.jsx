import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projectData from '../utils/data';


export default function Projects() {

  return (
        <>
      <motion.div
      initial={{ opacity: 0, y: 60 }}     // before entering
      animate={{ opacity: 3, y: 0 }}      // after entering
      exit={{ opacity: 0, y: -50 }}       // when exiting
      transition={{ duration: 1.5 }}
    >
        <div className='lg:h-[90vh] mt-8 lg:mt-0 h-auto flex flex-col justify-center items-start p-6 sm:p-0 md:max-w-[80%] m-auto lg:max-w-[70%]'>
        <div className='bg-[#27272D] flex p-2 w-max rounded-full items-center gap-2 pr-4 noticia-text-regular 
        text-sm hover:bg-[#D0E170] hover:text-black'>
            <div className='h-4 w-4 bg-[#D0E170] rounded-full border border-white'></div>
            <h1>Projects</h1>
        </div>
        <h1 className='mt-4 noticia-text-bold text-2xl   sm:text-[42px]'>Crafted with Code, Designed <br/>with Purpose</h1>
        <p className='mt-4 text-[#BABABB] font-light max-w-max md:max-w-[80%] lg:max-w-[60%]'>A curated collection of apps and products I’ve built — combining clean design with modern tech to deliver fast, user-focused experiences.</p>
          <div className='flex-wrap bg-transparent flex gap-4 mt-8'>
         {projectData.map((project)=>{
          return <Link to={`/Projects/${project.title}`}>
                 <div className='w-[300px] p-1 border-[0.5px] rounded-xl border-[#7A7A7A] bg-[#25252A]'>
                    <img src={`/${project.title}/cardImg.png`}></img>
                    <div className='p-4 flex justify-between items-center '>
                          <h1 className='noticia-text-bold'>{project.title}</h1>
                          <p className='text-sm text-[#D0E170] noticia-text-regular px-4 py-2 bg-[#27272D] rounded-full border border-dashed border-[#D0E170]' >{project.category}</p>
                    </div>
                </div>
          </Link>
         })}
          </div>
         </div>

    </motion.div>
    </>
  )
}
