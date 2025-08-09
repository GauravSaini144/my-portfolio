import React from 'react'
import { TextAnimation } from './components/magicui/TextAnimation'
import { MorphingText } from "./components/magicui/morphing-text";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { BoxReveal } from './components/magicui/box-reveal';
import { SparklesText } from './components/magicui/sparkles-text';
import { ShimmerButton } from './components/magicui/shimmer-button';
import { AnimatedBeamDemo } from './Skills';
import blogify from "../src/assets/blogify.png"
import ProjectCard from './ProjectCard';
import Ecommerce from "../src/assets/Ecommerce.png"
import Markedit from "../src/assets/Markedit.png"
import { RetroGrid } from './components/magicui/retro-grid';

const project=[{
  title:"Blogify",
  content:`A responsive blogging platform. Enables users to sign up, create rich-text blog posts, upload images, and manage post visibility (active/inactive). Users can also read blogs shared by others.`,
  img:blogify,
  skills:["React", "Redux Toolkit","Tailwind CSS", "Appwrite", "TinyMCE"],
  github:"https://github.com/GauravSaini144/Blogyfy-react-appwrite",
  live:"https://blogify-react-appwrite.netlify.app/",
},{
 title:"Ecommerce Analytics Dashboard",
  content:`React-based dashboard with charts and dynamic metrics with dark/light mode showing sales, orders, users, and revenue. Included filter and sort functionality for ratings and inventory. `,
  img:Ecommerce,
  skills:["React", "Tailwind CSS", "Faker.js","Recharts"],
  github:"https://github.com/GauravSaini144/react-ecommerce-analytics",
  live:"https://react-ecommerce-analytics.netlify.app/",
},{
 title:"MarkEdit -Markdown Editor",
  content:`React-based editor with live Markdown/HTML preview and file export features. Includes syntax guide, syntax highlighting, and smooth transitions with dark/light themes, responsive UI, and export to .md, .html, .txt. .`,
  img:Markedit,
  skills:["React", "Tailwind CSS", "React-Markdown", "Markdown"],
  github:"https://github.com/GauravSaini144/React-Markdown-Editor",
  live:"https://markedit-react.netlify.app/",
}
]

function Home() {
  return (
    <> <div className='h-full w-full  flex flex-col '>
    
    <div className='h-screen w-full flex flex-col items-center justify-center text-center gap-3 md:gap-4 lg:gap-4' id='home'>
        
       <TextAnimation className="text-2xl md:text-5xl lg:text-5xl font-black " content={"Hello 👋"}/>
       <div className='flex flex-row items-center justify-center text-center'>
       <TextAnimation className="text-3xl md:text-6xl lg:text-6xl  font-bold " isSparkle={true} content={"I'm "}/>
       <TextAnimation className="text-3xl md:text-6xl lg:text-6xl font-black text-cyan-300 " isSparkle={true} content={"Gaurav Saini"}/>
       </div>
       <MorphingText texts={["REACT DEVELOPER", "FRONTEND DEVELOPER"]}     />

       <ShimmerButton className="mt-8 lg:mt-0 lg:mt-0"><a href="#contact"><InteractiveHoverButton>HIRE ME</InteractiveHoverButton></a></ShimmerButton>


    </div>
    <div className='w-full flex flex-col items-center justify-center h-screen py-16 md:py-24 md:py-24 px-0 md:px-8 lg:px-8  ' id='about'>
        <div className='px-4 md:px-24 lg:px-24 '>
          <div className='w-full text-gray-400'> <BoxReveal className="w-full "><h1 className='text-2xl mb-2'>Who I Am.</h1> </BoxReveal><hr/></div>
        <br />
        <div className=' flex flex-wrap gap-4 mt-6'>
        <div className='w-full md:w-2/4 lg:w-2/4 text-4xl'><BoxReveal>Hii, I'm Gaurav Saini</BoxReveal></div>
        <div className='w-full text-2xl text-gray-400'><BoxReveal>
      I'm a frontend web developer passionate about transforming ideas into interactive, user-focused experiences. I specialize in building fast, responsive, and scalable applications using React.
<br /> <br />
With a strong focus on performance, accessibility, and clean design, I craft solutions that not only engage users but also align with business goals and deliver real value.




        </BoxReveal></div></div>
        </div>
    </div>
    <div className='h-screen px-0 md:px-8 lg:px-8 ' id='skills'>
      
        {/* <Skills/> */}
      <AnimatedBeamDemo />
      
    </div>

    <div className='w-full  flex flex-col items-start justify-start py-24 mt-16 px-0 md:px-8 lg:px-8' id='projects'>
      <div className='px-4 md:px-24 lg:px-24 w-full'>
<div className='w-full text-gray-400'><BoxReveal> <h1 className=' text-2xl mb-2'>My Work.</h1></BoxReveal><hr /></div>
<div className='mt-8 flex flex-wrap gap-4'>{ project.map((project)=>( <ProjectCard project={project} key={project.title} />))}</div>
</div>


    </div>

<div className='flex flex-col gap-2 items-center justify-center mt-24 ' id='contact'>
  <div className='text-xl text-gray-400'>Get in Touch</div>

<div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden  bg-zinc-900">
      <span className="z-10 whitespace-pre-wrap  bg-clip-text text-center xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl ">
  <a href="mailto:gauravsaini1442004@gmail.com" className='mb-2 underline font-bold text-gray-200'>gauravsaini1442004@gmail.com</a>

      </span>
      
      <RetroGrid />
          <span  className='mt-24'>Designed and Created by <span className='text-cyan-400'><a href="https://www.linkedin.com/in/gaurav-saini-09b441230" target='_blank'>Gaurav Saini</a></span></span>

    </div>
</div>

    </div>
    </>
  )
}

export default Home