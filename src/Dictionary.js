import React, {useState} from "react";
import "./Dictionary.css"
import axios from "axios";

export default function Dictionary(){
let[keyword, setKeyword]=useState("");

function search(event){
event.preventDefault();
alert(`Searching for ${keyword}`)
}

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