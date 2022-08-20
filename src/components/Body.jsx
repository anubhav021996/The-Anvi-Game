import { useEffect, useState } from "react";
import "./Body.css";
import { Card1 } from "./Card1";
import { Card2 } from "./Card2";
import { Card3 } from "./Card3";
import Zoom from 'react-reveal/Zoom';

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
        <div className="Body">
            <Zoom><Card1 /></Zoom>
            <Zoom><Card2 /></Zoom>
            <Zoom><Card3 /></Zoom>
        </div>
    )
}