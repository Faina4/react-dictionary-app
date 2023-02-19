import React from "react";

export default function Photos(props){
  //  console.log(props.photos)
  //return(    <img src={photo.src.landscape} />
    if(props.photos){
      return (
    <section className="Photos">
        {props.photos.map(function(photo, index){
             return(
                <img key={index}src={photo.src.landscape} /> 
             )
           
        } )}
   </section>)
    }  else{
    return null;
   }
 
}