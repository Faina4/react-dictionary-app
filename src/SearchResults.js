import React from "react";

export default function SearchResults(props){
    console.log(props.results)
    if(props.results){
         return  <div className="SearchResults">
            <h2>
                {props.results.word}
            </h2>
            <p>
                  {props.results.meanings.map(function(meaning,index){
                return(meaning.definitions[0].definition)
            }
            )}
            </p>
          
             </div>
        }else{
        return null;
    }
  
}