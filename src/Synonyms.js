import React from "react";
import "./Synonyms.css"

export default function Synonyms (props){
    //<strong>Synonyms: </strong>
   if(props.wordSynonyms){
    return(
<ul className="Synonyms"> 
 {props.wordSynonyms.map(function(synonym, index) {
            return (          
    <li key={index}> {synonym}  </li> 
       )})}</ul>   
    )
}else{
    return null;
}

}     
    