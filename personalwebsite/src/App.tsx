import { useState } from 'react'
import Pageheader from './components/Pageheader'
import Section from './components/Section'
import { Largecard, Smallcard } from './components/Cards'
import { SocialMediaButton } from './components/Buttons'
import PageFooter from './components/Footer'

function App() {

  return (
    <div className='flex-auto items-center font-raleway text-md'>

      {/* Header */}
      <div className='font-montserrat'>
        <Pageheader title={"VITO CARNOVALE"}
           buttons={["EXPERIENCE", "PORTFOLIO", "EDUCATION"]}
           href={["#experience", "#portfolio", "#education"]}
           />
      </div>

    
     {/* About */}
      <Section idname='about' data=<>
      <h1 className='font-montserrat text-2xl pb-[20px]'>About</h1>
      <p>
        I am currently in my 4th year of Computer Science at Toronto Metropolitan University. 
        My interests are in distributed systems, compilers, devops, containerization, and computer security. 
        I am currently working on a mix of docker container networks and application, learning more about computer architecture and paralleism, and creating functions for my discord bots.
      </p>

      <div className="pt-[40px] w-full h-auto py-8 flex items-center justify-center gap-4 flex-wrap">
          <SocialMediaButton href="https://github.com/vcarnovale" mediaSite='github' title='GitHub'></SocialMediaButton>
          <SocialMediaButton href="https://www.linkedin.com/in/vitocarnovale/" mediaSite='linkedin' title='Linkedin'></SocialMediaButton>
          <SocialMediaButton href="vitop.carnovale@gmail.com" mediaSite='email' title='Email'></SocialMediaButton>
      </div>
      </>
        colour="white" />
      
      {/* Experience */}
      <Section idname="experience" data=<> <h1 className='pb-[30px] font-montserrat font-bold text-2xl'>Work Experience</h1>
      <Smallcard title="Junior Systems Administor" subtitle='Ontario Public Service' 
      img="/OPS.jpg" 
      description="Maintainence & DevOps Teams: Developed tooling web application, performed VM, application and environment maintainence on Azure" 
      optional="Sep. 2024 to Sep. 2025" />

      <Smallcard title="Support Staff" subtitle='Holy Rosary Church' 
      img="/holyrosary.png" 
      description="Providing IT technical support, trouble shooting network and hardware problems." 
      optional="Nov. 2022 to Present" /></>
        colour="gray"/>

      {/* Projects*/}
      <Section idname="portfolio" data =<> <h1 className='pb-[50px] font-montserrat font-bold text-2xl'>Projects</h1>
      <Largecard title="Custom Programming Language Interpreter" 
      href=""
      img="/interpreterpic.png" 
      description="Created an Interpreter using JavaCC to create ASTs, and Java for an evaluator."/>
      <Largecard title="Bug Reporting application" 
      href="https://github.com/vcarnovale/survey-prog_chatgpt"
      img="/ladybug.svg" 
      description="Leveraged MongoDB and java to create a remote login system in Java with encrypted user information and role-based access control."/>
      <Largecard title="Data Aggregation and Survey Analysis" 
      img="/chatgpt.svg" 
      href="https://github.com/vcarnovale/survey-prog_chatgpt"
      description="Conducted a survey about usage of ChatGPT and analyzed the data using pandas and numpy visualizing them with graphs."/>
      </> colour="white"/>

      {/* Education */}
      <Section idname="education" data=<>
        <h1 className='font-montserrat text-2xl pb-[20px] font-bold'>Education</h1>
        <div className='flex justify-between'>
        <p>Bachelor of Science, Computer Science @ Toronto Metropolitan University</p>
        <p>Sep. 2022 - Jun. 2027 (Expected) </p>
        </div>
        <h1 className='pt-[30px] pb-[10px] text-xl font-bold'>Technical Coursework</h1>
        <div className='flex-col text-lg'>
          <p>Compiler and Interpreters • CPS710</p>
          <p>Operating Systems • CPS590</p>
          <p>Computer Security • CPS633</p>
          <p>Database Systems • CPS510</p>
          <p>Artifical Intelligence • CPS721</p>
          <p>Data Structures • CPS305</p>
          <p>Probability & Statistics • MTH380</p>

        </div>
      
      
      </> colour="gray"/>

      <PageFooter information='Updated December 2025 | Created with React/TailwindCSS | Vito Carnovale'/>
    
    
    </div>
  )
}

export default App
