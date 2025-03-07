import { useState } from 'react'
import Pageheader from './components/Pageheader'
import Section from './components/Section'
import { Smallcard } from './components/Cards'

function App() {

  return (
    <div className='flex-auto items-center'>
      <Pageheader title={"VITO CARNOVALE"}
        buttons={["ABOUT", "EXPERIENCE", "PORTFOLIO", "EDUCATION"]} />
      <Section data=<><Smallcard title="House" img="../assets/react.svg" description="fix make paragraph wrap dddddd dddddddd ddddd dddddddd ddd ddddd ddddddd ddddddd ddddddddd dddd ddddd dddddd ddddd" optional="2022 to fgeb 239492030" /><Smallcard title="House" img="../assets/react.svg" description="fix make paragraph wrap dddddd dddddddd ddddd dddddddd ddd ddddd ddddddd ddddddd ddddddddd dddd ddddd dddddd ddddd" optional="2022 to fgeb 239492030" /></>
        colour="gray" />
      <Section data=<p1>YO</p1>
        colour="white" />

    </div>
  )
}

export default App
