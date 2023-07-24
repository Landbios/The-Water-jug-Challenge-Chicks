

import { useState } from 'react'
import './Styles/App.css'
import Ui from './components/Ui'
import Results from './components/results'


function App() {

  const [Steps,setSteps] = useState([]);

  return (
    <>
      <div className="UiContainer">
        <h1 className='Apptitle'>The Water jug Challenge</h1>
        
        <Ui
        
        setSteps={setSteps}
        />
      </div>
      <Results
      Steps={Steps}
      
     
      />
    </>
  )
}

export default App
