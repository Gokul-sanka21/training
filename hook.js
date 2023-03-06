import React from "react";
import { useState } from "react";
import './hook.css';
function HookDemo() {
    const [inc,setInc]=useState(0);
    const[count,setCount]=useState(0);
    return(
        <>
        <p>number of products :{count} </p>
        <p>${inc}</p>
        <button onClick={()=>{setInc(inc+200);setCount(count+1)}}>Increase Quantity</button>
        </>
    )
}
export default HookDemo;