import React, {useState} from "react";
import "./Dictionary.css"
import axios from "axios";
import SearchResults from "./SearchResults"

//https://dictionaryapi.dev/
//<SearchResults results={SearchResults} /> ===
//===<Component-Name Property-Name={property-value}

export default function Dictionary(props){
let[keyword, setKeyword]=useState(props.defaultKeyword);
let [searchResults, setSearchResults]=useState(null)
console.log(props.defaultKeyword)

function handleResponse(response){
setSearchResults(response.data[0]);
//console.log(response.data[0].meanings[0].definitions[0].definition)

}

function search(event){
event.preventDefault();
let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
axios.get(apiUrl).then(handleResponse);
//console.log(apiUrl)
}


function handleKeywordChange(event){
//console.log(event.target.value);
setKeyword(event.target.value)
}
    return (
       
            <div className="Dictionary">
                <section>
                  <form onSubmit={search} className="SearchForm col-6 d-inline-flex align-middle  ">
            <input type="search" placeholder="Search for a word"  onChange={handleKeywordChange} className="SearchInput form-control search-input border-3" />
              </form>     
                </section>         
      
               <SearchResults results={searchResults} />    
      
           
        </div>
      
      
      
    )
}