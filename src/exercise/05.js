// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({ size, className, style, children, ...otherProps }) => {
  const sizeClassName = size ? `box--${size}` : ''

  return (
    <div
      className={`box ${sizeClassName} ${className}`}
      style={{ fontStyle: 'italic', ...style }}
      {...otherProps}>
      {children}
    </div>
  )
}
function App() {
  return (
    <div>
      <Box size='small' style={{ backgroundColor: 'lightblue' }}>
        small lightblue box
      </Box>
      <Box size='medium' style={{ backgroundColor: 'pink' }}>
        medium pink box
      </Box>
      <Box size='large' style={{ backgroundColor: 'orange' }}>
        large orange box
      </Box>
    </div>
  )
}

export default App
