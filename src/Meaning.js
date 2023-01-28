import React from "react";
import "./Meaning.css"

export default function Meaning(props){
console.log(props.meaning)
return( 
    <div className="Meaning">


     <h4 className="part-of-speech">
     <em>  {props.meaning.partOfSpeech} </em> 
    </h4>
 
   
        {props.meaning.definitions.map(function(definition, index)
        {
        return(
          

                  
<div key={index} className="definition">
<p>
    {definition.definition}
    <br />
    <em>  {definition.example} </em> 
    </p>
</div>


) 
 })}
    </div>

   
)}