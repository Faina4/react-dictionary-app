import React from "react";
import "./Meaning.css"
import Synonyms from "./Synonyms"

export default function Meaning(props){
//console.log(props.meaning.synonyms)
//  <Synonyms wordSynonyms={props.meaning.synonyms} />
// 
return( 
<div className="Meaning">

    <h5 className="part-of-speech">
     <em>  {props.meaning.partOfSpeech} </em> 
    </h5>  
    
  {props.meaning.definitions.map(function(definition, index) {
        return(       
                  
       <div key={index} >
 <div className="definition"> {definition.definition}</div>
   
 <div className="example">  {definition.example} </div> 
 <Synonyms wordSynonyms={definition.synonyms} />

  <br />
 
       </div> ) 
  })}

</div> 
)
}