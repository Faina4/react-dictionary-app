import React from "react";
import Meaning from "./Meaning"

export default function SearchResults(props){

   console.log(props.results)
    if(props.results){
         return  <div className="SearchResults">
            <h2>
              <string>{props.results.word}  {""}
           <small className="fs-6">{props.results.phonetic} 
            </small>   
              </string>  
            </h2>
            <p>
                  {props.results.meanings.map(function(meaning,index){
                return(
                    <div key={index}>
<Meaning meaning={meaning} />
                    </div>
         )
            })}
            </p>
          
             </div>
        }else{
        return null;
    }
}
