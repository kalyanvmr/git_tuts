import { useState,useEffect } from "react";

function CounterBack(){
    const [count,setCount] = useState(10);
useEffect(() => {
    if(count===0) return;
      const timer = setInterval(()=>{
        setCount((prev)=>prev-1);
     },1000 )

     return () => clearInterval(timer);
   
},[count])

return <h2>Countdown: {count}</h2>;
}
export default CounterBack;
