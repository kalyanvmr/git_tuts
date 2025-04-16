import { useState, useEffect } from "react";

function FetchData(){
const [item,setItem]=useState([]);
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then((response) => response.json())
    .then((data) => setItem(data))
},[]);
return(
    <div>
        <h1>Fetched data</h1>

        <ul>
            {item.map((i) => (
                <li key={i.id}>{i.title}</li>
            )
            )}
        </ul>
    </div>

);
}

export default FetchData;