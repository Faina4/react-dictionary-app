import React from "react";
import "./Phonetics.css"

export default function Phonetics(props){
   // console.log(props.phonetic)
    return(
        <div className="Phonetics">
          <a href={props.phonetic.audio} target="_blank" rel="noreferrer"> Listen </a>   
      {""} {""}
          <string className="Phonetics">{props.phonetic.text}</string>     
        </div>)
  
     
}