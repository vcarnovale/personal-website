import { useState } from 'react'
import Pageheader from './components/Pageheader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Pageheader title={"Vito Carnovale"}
                buttons = {["home", "Porfolio"]}/>
    </>
  )
}

export default App
