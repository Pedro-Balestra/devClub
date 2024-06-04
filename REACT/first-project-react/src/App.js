import React from "react";
import './styles.css'

//JSX
const App = () => {
  const hello = "Hello React"
  return (
    <div className="container">
      <h1>{hello}</h1>
    </div>
  )
}

export default App