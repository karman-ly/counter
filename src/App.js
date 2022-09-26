import React from "react"
import "./App.css"

export default function App() {

  const [value, setValue] = React.useState(0)

  const addValue = () => {setValue(x => x + 1)}
  const subtractValue = () => {setValue(x => x - 1)}

  return (
      <div className="app">
        <div className="display">{value}</div>
        <button className="add" onClick={addValue}>+</button>
        <button className="subtract" onClick={subtractValue}>-</button>
      </div>
  )
}
