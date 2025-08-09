import React from 'react'
import { Card,
 CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
 } from './components/ui/card'
  import { BorderBeam } from './components/magicui/border-beam'
  import { ShinyButton } from './components/magicui/shiny-button'
import { BoxReveal } from './components/magicui/box-reveal'
import { TextAnimate } from './components/magicui/text-animate'
function ProjectCard({project}) {
  return (
    
    <Card className="relative w-[400px] overflow-hidden border-none text-gray-300 bg-black">
      
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <BoxReveal><img src={project.img} alt="" /></BoxReveal>
      </CardHeader>
      <CardContent>
        <div><TextAnimate animation='slideUp' by='word'>{project.content}</TextAnimate></div><br />
        
         <div className='flex flex-wrap gap-1 h-[50px]'>
        {project.skills.map((skill)=>(<div className='px-1  bg-zinc-700 shadow-xl text-gray-100 h-fit '>{skill}</div>))

        }
      </div>
      </CardContent>
     
      
      
      
      

      <CardFooter className="flex justify-end gap-2 mt-4 ">
        <a href={project.github} target='_blank'><ShinyButton>Github </ShinyButton></a>
        <a href={project.live} target='_blank'><ShinyButton>Live</ShinyButton></a>
        
      </CardFooter>
      <BorderBeam
        duration={6}
        size={400}
        className="from-transparent via-red-500 to-transparent"
      />
      <BorderBeam
        duration={6}
        delay={3}
        size={400}
        className="from-transparent via-blue-500 to-transparent"
      />
    </Card>
  )
}

export default ProjectCard