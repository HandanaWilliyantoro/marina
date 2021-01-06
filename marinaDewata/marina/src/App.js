import React, { useState } from 'react'
import ComingSoon from "./page/ComingSoon"

function App() {
  const [comingSoon, setComingSoon] = useState(true)

  if(comingSoon){
    return <ComingSoon />
  } else {
    return (
      null
  )
  }
}

export default App
