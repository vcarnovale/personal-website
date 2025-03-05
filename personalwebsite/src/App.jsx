import { useState } from 'react'
import Pageheader from './components/Pageheader'

function App() {

  return (
    <div className='flex-auto items-center'>
      <Pageheader title={"VITO CARNOVALE"}
        buttons={["ABOUT", "EXPERIENCE", "PORTFOLIO", "EDUCATION"]} />
    </div>
  )
}

export default App
