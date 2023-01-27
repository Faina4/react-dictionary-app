import React from "react";
import Meaning from "./Meaning"

export default function SearchResults(props){
   // console.log(props.results)
    if(props.results){
         return  <div className="SearchResults">
            <h2>
                {props.results.word}
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