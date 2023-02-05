import React from "react";
import "./Synonyms.css"

export default function Synonyms (props){
if(props.wordSynonyms){
    return(
       <div className="Synonyms"> <strong>Synonyms:</strong>
 {props.wordSynonyms.map(function(synonym, index) {
            return(      
<ul key={index} className="synonym-list">
    <li> <em>{synonym} </em> </li>
 </ul>
    )})}
        </div>    
    )
}else{
    return null;
}
    





}     
    