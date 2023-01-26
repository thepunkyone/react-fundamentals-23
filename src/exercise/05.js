// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({size, style}) => {
  return (
    <div className={`box box--${size}`} style={{fontStyle: 'italic', ...style}}>
      {size} {style.backgroundColor} box
    </div>
  )
}

const smallBox = <Box size="small" style={{backgroundColor: 'lightblue'}} />
const mediumBox = <Box size="medium" style={{backgroundColor: 'pink'}} />
const largeBox = <Box size="large" style={{backgroundColor: 'orange'}} />

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
