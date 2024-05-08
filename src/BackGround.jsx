import { useState } from "react"
function Background() {
  let [color, setColor] = useState("black")
  function addcolorred(){
    color="red"
    setColor(color)
  }
  function addcolorgreen(){
    color="green"
    setColor(color)
  }
  function addcolorblue(){
    color="blue"
    setColor(color)
  }
  function addcolorolive(){
    color="olive"
    setColor(color)
  }
  function addcolorgrey(){
    color="grey"
    setColor(color)
  }
  function addcoloryellow(){
    color="yellow"
    setColor(color)
  }
  function addcolorpink(){
    color="pink"
    setColor(color)
  }
  function addcolorpurple(){
    color="purple"
    setColor(color)
  }
  function addcolorlavender(){
    color="lavender"
    setColor(color)
  }
  function addcolorwhite(){
    color="white"
    setColor(color)
  }
  function addcolorblack(){
    color="black"
    setColor(color)
  }
  return (
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white font-bold shadow-lg"style={{backgroundColor:"red"}} onClick={addcolorred}>Red</button>
            <button className="outline-none px-4 py-1 rounded-full text-white font-bold shadow-lg"style={{backgroundColor:"Green"}} onClick={addcolorgreen}>Green</button>
            <button className="outline-none px-4 py-1 rounded-full text-white font-bold shadow-lg"style={{backgroundColor:"Blue"}} onClick={addcolorblue}>Blue</button>
            <button className="outline-none px-4 py-1 rounded-full text-white font-bold shadow-lg"style={{backgroundColor:"Olive"}}onClick={addcolorolive}>Olive</button>
            <button className="outline-none px-4 py-1 rounded-full text-white font-bold shadow-lg"style={{backgroundColor:"Grey"}} onClick={addcolorgrey}>Grey</button>
            <button className="outline-none px-4 py-1 rounded-full text-black font-bold shadow-lg"style={{backgroundColor:"Yellow"}} onClick={addcoloryellow}>Yellow</button>
            <button className="outline-none px-4 py-1 rounded-full text-black font-bold shadow-lg"style={{backgroundColor:"Pink"}}onClick={addcolorpink}>Pink</button>
            <button className="outline-none px-4 py-1 rounded-full text-white font-bold shadow-lg"style={{backgroundColor:"Purple"}}onClick={addcolorpurple}>Purple</button>
            <button className="outline-none px-4 py-1 rounded-full text-black font-bold shadow-lg"style={{backgroundColor:"Lavender"}}onClick={addcolorlavender}>Lavender</button>
            <button className="outline-none px-4 py-1 rounded-full text-black font-bold shadow-lg"style={{backgroundColor:"White"}}onClick={addcolorwhite}>White</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"Black"}} onClick={addcolorblack}>Black</button>
          </div>
        </div>
      </div>
  )
}

export default Background
