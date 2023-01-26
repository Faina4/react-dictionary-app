import React, {useState} from "react";
import "./Dictionary.css"
import axios from "axios";

//https://dictionaryapi.dev/

export default function Dictionary(){
let[keyword, setKeyword]=useState("");


function handleResponse(response){
//console.log(response.data[0])
console.log(response.data[0].meanings[0].definitions[0].definition)

}

function search(event){
event.preventDefault();

}
let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
axios.get(apiUrl).then(handleResponse);
console.log(apiUrl)

function handleKeywordChange(event){
//console.log(event.target.value);
setKeyword(event.target.value)
}
    return (
        <div className="Dictionary">
            <form onSubmit={search} className="SearchForm">
            <input type="search" onChange={handleKeywordChange} className="SearchInput" />
  
            </form>
        </div>
    )
}