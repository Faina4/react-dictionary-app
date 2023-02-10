import React, {useState} from "react";
import "./Dictionary.css"
import axios from "axios";
import SearchResults from "./SearchResults"




export default function Dictionary(props){
let[keyword, setKeyword]=useState(props.defaultKeyword);
let [searchResults, setSearchResults]=useState(null);
let [loaded, setLoaded]=useState(false);


function handleResponse(response){
setSearchResults(response.data[0]);
//console.log(response.data[0].meanings[0].definitions[0].definition)
}

function search(){
let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
event.preventDefault();
search();

}

function handleKeywordChange(event){
setKeyword(event.target.value)
}

function load(){
setLoaded(true); 
search();
}
if (loaded){
   return (
       
    <div className="Dictionary">
       <section>
         <form onSubmit={handleSubmit} className="SearchForm
         ">
         <input type="search" placeholder="Search for a word"  
                onChange={handleKeywordChange} 
               //className="SearchInput form-control search-input border-3"  
               defaultValue={props.defaultKeyword} />
         </form>     
         <div className="hint">
search for a word: hello, yoga, coffee, yoghurt ...
         </div>
        </section>         
          <SearchResults results={searchResults} />    
                   
     </div>  
       );
}else{
  load();
  return"Loading";
}
      }
  
