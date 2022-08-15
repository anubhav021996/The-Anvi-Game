import { useEffect, useState } from "react";

export const Body= () => {
    let [index,setindex]= useState(1);

    useEffect(()=>{
        const handleKeyPress = () => {
            let bell = new Audio("./sounds/bell.mp3");
            bell.play();
            setindex(index+1);
        }
        window.addEventListener("keypress",handleKeyPress);
        return ()=> window.removeEventListener("keypress",handleKeyPress);
    },[index]);

    return(
        <>
            <p>{index}</p>
        </>
    )
}
