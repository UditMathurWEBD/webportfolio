import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Chat() {
  return (
    <>
         <motion.div
      initial={{ opacity: 10, y: 60 }}     // before entering
      animate={{ opacity: 3, y: 0 }}      // after entering
      exit={{ opacity: 0, y: -10 }}       // when exiting
      transition={{ duration: 0.5 }}
    >

      <div className='w-max h-auto sm:h-[90vh] mt-15 sm:mt-0 sm:mb-0 flex flex-col justify-center items-start p-6 sm:p-0 md:max-w-[80%] m-auto lg:max-w-[60%]'>
        <h1 className='noticia-text-bold text-2xl   sm:text-[42px]'>Chat With Me</h1>
        <p className='mt-2 text-[#BABABB] font-light'>Got a question or proposal, or just want to say hello ? Go ahead . </p>
        <form className='mt-8'>
          <div className='flex gap-4'>
            <div className='flex flex-col gap-3'>
          <label className='text-sm' for="Name">Name</label>
          <input type='text' className='px-6 py-3 border bg-[#25252A] border-[#BABABB] rounded-xl' name='Name' placeholder='Enter Your Name'></input>
          </div>
            <div className='flex flex-col gap-3'>
          <label className='text-sm' for="Name">Email Id</label>
          <input type='mail' className='px-6 py-3 border bg-[#25252A] border-[#BABABB] rounded-xl' name='E-mail Id' placeholder='Enter Your E-mail Id'></input>
          </div>
          </div>
          <div className='flex flex-col gap-3 mt-4'>
          <label className='text-sm' for="message">Your Message</label>
          <textarea rows={6} className='px-6 py-3 border bg-[#25252A] border-[#BABABB] rounded-xl' name='message' placeholder='Enter Your message'></textarea>
          </div>
    
        <button className='mt-8 text-center bg-[#D0E170] text-black font-semibold font-sm px-6 py-3 rounded-xl w-full'>Submit</button>
        </form>

      </div>
      </motion.div>
    </>
  )
}
