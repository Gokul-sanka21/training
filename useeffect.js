import React from "react";
import { useState,useEffect} from "react";
import './hook.css';
function Effect() {
    const[time,setTime]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setTime(time+1);
        },1000)
    });
    function Movie(){
        if(time==120){
            alert("Movie Started "+JSON.stringify(time)+" Minutes Ago");
        }
        
    }

    return(
        <>
        <h2>Movie Started : {time} Seconds Ago</h2>
        <h2>{Movie()}</h2>
        </>
    )
}
export default Effect;