import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion';
import projectData from '../utils/data.js';

export default function ProjectDetailsPage() {
const {projectName} = useParams();
const [data, setData] = useState(null);

useEffect(()=>{
const filteredData = projectData.filter((project)=>{
return project.title == projectName
})
console.log(filteredData);
setData(filteredData[0]);
},[projectName])

if (!data) return <div className="text-center mt-10 text-white">Loading...</div>;

return (
<>
<motion.div
initial={{ opacity: 0, y: 60 }}     // before entering
animate={{ opacity: 3, y: 0 }}      // after entering
exit={{ opacity: 0, y: -50 }}       // when exiting
transition={{ duration: 1.5 }}
>
<div className='mt-8 mb-20 lg:mt-0 h-auto flex flex-col justify-center items-start p-6 sm:p-0 md:max-w-[80%] m-auto lg:max-w-[70%]'>
<h1 className='mb-8 text-sm flex gap-2'><Link className='text-sm underline' to="/Projects">Projects</Link>  /<p className='underline'>{data.title}</p> </h1>
<img className='mb-6' src={`/public/${data.title}${data.thumbnailImg}`}></img>
<div className='bg-[#27272D] flex p-2 w-max rounded-full items-center gap-2 pr-4 noticia-text-regular 
text-sm hover:bg-[#D0E170] hover:text-black'>
<div className='h-4 w-4 bg-[#D0E170] rounded-full border border-white'></div>
<h1>{data.category}</h1>
</div>


<h1 className='mt-4 noticia-text-bold text-2xl   sm:text-[42px]'>{data.title}</h1>
<p className='mt-4 text-[#BABABB] font-light max-w-max md:max-w-[80%] lg:max-w-[60%]'>{data.tagline}</p>
<div className='mt-6'>
<h1 className='text-sm font-bold mt-2 py-2 '>Challenges and Learnings</h1>
<h1 className='mt-2 text-[#BABABB] font-light'>{data.challengesAndLearnings}</h1>
</div>
<div className='mt-8'>
<h1 className='text-sm font-bold mt-2 py-2 '>Features</h1>
<div className='flex flex-wrap gap-4 mt-4'>
<ol className="list-decimal list-inside">
{data && data.features && data.features.map((tech, index) => (
<li key={index} className='rounded-xl py-3 text-[#BABABB] font-light text-sm'>{tech}</li>
))}
</ol>
</div>
</div>

<div className='mt-8'>
<h1 className='text-sm font-bold mt-2 py-2 '>Tech Used</h1>
<div className='flex flex-wrap gap-4 mt-8'>
{data.techStack && (
[...(data.techStack.frontend || []), 
...(data.techStack.backend || []), 
...(data.techStack.apis || []), 
...(data.techStack.deployment || [])].map((tech, index) => (
<div key={index} className="bg-[#18181B]  rounded-xl px-4 py-3 border-[0.55px] border-[#4A4A4A] text-center text-sm">
{tech}
</div>
))
)}
</div>
</div>
<div className='mt-8'>
<h1 className='text-sm font-bold mt-2 py-2 mb-4'>Links</h1>
<div className='flex gap-4'>
  <Link
to={data.links.liveDemo}
target={data.links.liveDemo.startsWith("http") ? "_blank" : "_self"}
rel="noreferrer"
>
<span className="text-green-500 border-1 border-dashed border-green-500 px-6 py-2 rounded-xl 
text-sm transition hover:bg-green-500 hover:text-black">
Live Demo
</span>
</Link>
<Link
to={data.links.github}
target={data.links.github.startsWith("http") ? "_blank" : "_self"}
rel="noreferrer"
>
<span className="text-green-500 border-1 border-dashed border-green-500 px-6 py-2 rounded-xl 
text-sm transition hover:bg-green-500 hover:text-black">
Github Repository
</span>
</Link>
</div>
</div>

<div className='grid lg:grid-cols-3 grid-cols-1   gap-2 mt-14 flex-wrap xl:flex-nowrap'>
{data.screenshots.map((img)=>{
  return <img src={`/${data.title}${img}`}></img>
})}
</div>



</div>

</motion.div>
</>


)
}
