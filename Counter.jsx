import { useState } from "react";

function Counter() {
  const [count,setCount] = useState(0);
  return (
    <div>
      <h1 >Counter Application</h1>
      <p>count:{count}</p>
      <button onClick={()=>setCount((prev)=>prev+1)}>Increment</button>
      <button onClick={()=>setCount((prev)=>{
        if(count===0) {
            return 0;
        }
        else{
            prev=prev-1;
return prev}})}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>

    </div>
  );
}

export default Counter;