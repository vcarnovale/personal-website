import { useState } from 'react'
import Pageheader from './components/Pageheader'
import Section from './components/Section'
import { Largecard, Smallcard } from './components/Cards'
import { SocialMediaButton } from './components/Buttons'

function App() {

  return (
    <div className='flex-auto items-center font-raleway text-md'>

      <div className='font-montserrat'>
        <Pageheader title={"VITO CARNOVALE"}
           buttons={["ABOUT", "EXPERIENCE", "PORTFOLIO", "EDUCATION"]}
           href={["#about", "#experience", "#portfolio", "#education"]}
           />
      </div>

      <Section idname='about' data=<>
      <h1 className='font-montserrat text-2xl pb-[20px]'>About</h1>
      <p >I am currency in my 4th year of Computer Science at Toronto Metropolitan University. 
        I'm interested, generally in distributed systems, compilers, devops, containerization, and computer security. 
        I'm currently working on a mix of docker container network garble, learning computer more about computer architecture and paralleism, and some functions for my discord bots in my free time.
      </p>

      <div className="pt-[40px] w-full h-auto py-8 flex items-center justify-center gap-4 flex-wrap">
          <SocialMediaButton href="https://github.com/vcarnovale" mediaSite='github' title='GitHub'></SocialMediaButton>
          <SocialMediaButton href="https://www.linkedin.com/in/vitocarnovale/" mediaSite='linkedin' title='Linkedin'></SocialMediaButton>
          <SocialMediaButton href="vitop.carnovale@gmail.com" mediaSite='email' title='Email'></SocialMediaButton>
      </div>
      </>
        colour="white" />
      
      <Section idname="experience" data=<> <h1 className='pb-[50px] font-montserrat font-bold text-2xl'>Work Experience</h1>
      <Smallcard title="House" img="../assets/react.svg" description="fix make paragraph wrap dddddd dddddddd ddddd dddddddd ddd ddddd ddddddd ddddddd ddddddddd dddd ddddd dddddd ddddd" optional="2022 to fgeb 239492030" /><Smallcard title="House" img="../assets/react.svg" description="fix make paragraph wrap dddddd dddddddd ddddd dddddddd ddd ddddd ddddddd ddddddd ddddddddd dddd ddddd dddddd ddddd" optional="2022 to fgeb 239492030" /></>
        colour="gray"/>

      <Section idname="portfolio" data =<> <h1 className='pb-[50px] font-montserrat font-bold text-2xl'>Projects</h1>
      <Largecard title="project" img="/assets/react.svg" description="Funny project about being a project for the projects sake we have fun with it frfr"/><Largecard title="project" img="../assets/react.svg" description="Funny project about being a project for the projects sake we have fun with it frfr"/></> colour="white"/>

      <Section idname="education" data=<>
        <h1 className='font-montserrat text-2xl pb-[20px]'>Education</h1>
      
      
      </> colour="gray"/>
    
    </div>
  )
}

export default App
