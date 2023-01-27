import React from "react";

export default function Meaning(props){
console.log(props.meaning)
return(
    <h4>
        {props.meaning.partOfSpeech}
    </h4>

)
}