import React from "react";

export default function Synonyms (props){
  //  console.log(props.synonyms)
  if(props.synonyms){
       return (
        <div>
         <strong>Synonyms:</strong>  <em>  {props.synonyms} </em> 
         </div>)
  }else{return null;}
 
}