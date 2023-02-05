import React from "react";
import "./Synonyms.css"

export default function Synonyms (props){
  //  console.log(props.synonyms)

  if(props.synonyms){
       return (
        <div className="Synonyms">  <strong>Synonyms:</strong>  {props.synonyms.map(function(synonym, index) 
                    
         {
    return( 
       
       
        <ul key={index} className="synonym-list">
           
            <li>
            <em>{synonym} </em> 
            </li>
        
        </ul>
         
    )})}</div>
 
          )    
  }else{
    return null;
}
}