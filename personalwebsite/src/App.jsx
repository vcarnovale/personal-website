import { useState } from 'react'
import Pageheader from './components/Pageheader'
import Section from './components/Section'

function App() {

  return (
    <div className='flex-auto items-center'>
      <Pageheader title={"VITO CARNOVALE"}
        buttons={["ABOUT", "EXPERIENCE", "PORTFOLIO", "EDUCATION"]} />
      <Section data=<p1>YO</p1>
        colour="gray" />
      <Section data=<p1>YO</p1>
        colour="white" />

    </div>
  )
}

export default App
