import React from "react";
import "./Phonetics.css"

export default function Phonetics(props){
  if(props.phonetic.audio){
     return(
        <span className="Phonetics">
          <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer"> Listen </a>   
      {""} 
          <span className="text">{props.phonetic.text}</span>     
        </span>)
  
  }else{
    return null;
  }
  }