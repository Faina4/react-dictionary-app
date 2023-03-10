import React, {useState} from "react";
import "./Dictionary.css"
import axios from "axios";
import SearchResults from "./SearchResults"
import Photos from "./Photos"
//2qqBLwj0friDOXm4nmyz6BM6K3A7giUrXuniwhbJtvLZVwN03R0mxFG2



export default function Dictionary(props){
let[keyword, setKeyword]=useState(props.defaultKeyword);
let [searchResults, setSearchResults]=useState(null);
let [loaded, setLoaded]=useState(false);
let [photos, setPhotos]=useState(null);


function handleDictionaryResponse(response){
setSearchResults(response.data[0]);
//console.log(response.data[0].meanings[0].definitions[0].definition)
}
function handlePexelsResponse(response){
  setPhotos(response.data.photos)
}

function search(){
let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
axios.get(apiUrl).then(handleDictionaryResponse);

const pexelsApiKey="2qqBLwj0friDOXm4nmyz6BM6K3A7giUrXuniwhbJtvLZVwN03R0mxFG2"
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`
let headers= {Authorization:`Bearer ${pexelsApiKey}`}
axios.get(pexelsApiUrl,{headers: headers} ).then(handlePexelsResponse);
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
        <h1>What word do you want to look up?</h1>
         <form onSubmit={handleSubmit} className="SearchForm
         ">
         <input type="search" placeholder="Search for a word"  
                onChange={handleKeywordChange} 
               defaultValue={props.defaultKeyword} />
         </form>     
         <div className="hint">
search for a word: hello, yoga, coffee, yoghurt ...
         </div>
        </section>         
          <SearchResults results={searchResults} />    
          <Photos photos={photos} />    
                   
     </div>  
       );
}else{
  load();
  return"Loading";
}
      }
  
