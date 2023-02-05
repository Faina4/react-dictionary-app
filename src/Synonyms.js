import React from "react";
import "./Synonyms.css"

export default function Synonyms (props){
    // <strong>Synonyms:</strong>
if(props.wordSynonyms){
    return(
<div ><ul> <strong>Synonyms: </strong>
 {props.wordSynonyms.map(function(synonym, index) {
            return (                

    <li key={index}>  <em> {synonym}</em>  </li> 
       

            )})}</ul> 
</div>    
    )
}else{
    return null;
}

}     
    