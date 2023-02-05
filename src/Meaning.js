import React from "react";
import "./Meaning.css"
import Synonyms from "./Synonyms"

export default function Meaning(props){
console.log(props.meaning.definitions)
//  <strong>Synonyms:</strong> {definition.synonyms}
return( 
    <div className="Meaning">


     <h5 className="part-of-speech">
     <em>  {props.meaning.partOfSpeech} </em> 
    </h5>  
    
        {props.meaning.definitions.map(function(definition, index)
        {
        return(       
                  
<div key={index} className="definition">
    <p>
  <strong>Definition:</strong>  {definition.definition}
    <br />
  <strong>Example:</strong>  <em>  {definition.example} </em> 
   <br />
   <Synonyms synonyms={definition.synonyms} />


    </p>
</div>

) 
 })}
    </div>
   
)}