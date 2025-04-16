import { useState } from "react";

function ToggleLove() {
  const [text,setText] = useState("Kalyan loves Mansi");
 const toggleLove=   ()=>
        setText( 
            (text)=>text==="Kalyan loves Mansi"? "Mansi loves Kalyan": "Kalyan loves Mansi")


  return (
    <div>
      <input  type="text" value={text} placeholder="Enter the text"></input>
      <button onClick={toggleLove}> Love</button>
      
    </div>
  );
}

export default ToggleLove;
