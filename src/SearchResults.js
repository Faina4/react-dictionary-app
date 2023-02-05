import React from "react";
import Meaning from "./Meaning"
import Phonetics from "./Phonetics"
import "./SearchResults.css"

export default function SearchResults(props){
//  <small className="fs-6">{props.results.phonetic} </small>   
 //console.log(props.results.phonetics)
    if(props.results){
         return (
         <div className="SearchResults">
          <section>
   <h2> <string>{props.results.word}  {""}
   
          </string>  
          <string className="phonetics">
      {props.results.phonetics.map(function(phonetic,index){
        return(
     <string key={index}>
      
     <Phonetics phonetic={phonetic} />

     </string>     
        )
      }
      )} 
    </string>           
   </h2>
    
          </section>
    <p>
      {props.results.meanings.map(function(meaning,index){
                return(
     <div key={index}>
    <Meaning meaning={meaning} />
      </div>
         )
            })}
  </p>
          
          
             </div>)
        }else{
        return null;
    }
}
