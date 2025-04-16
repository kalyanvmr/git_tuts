import  { useState } from "react";

function ChangeColor() {
  const [color, setColor] = useState("white");

  return (
    <div style={{ backgroundColor: color, height: "100vh", padding: "20px" }}>
      <button onClick={() => setColor("lightblue")}>Change to Blue</button>
      <button onClick={() => setColor("lightgreen")}>Change to Green</button>
      <button onClick={() => setColor("white")}>Reset</button>
    </div>
  );
}

export default ChangeColor;
