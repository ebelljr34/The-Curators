import {useState} from "react"
import '../App.css';

function Project({title, name, link, image, alt, description}) {
  
  const handleClick= ()=> { 
    window.open(link, "_blank")
  }
  return (
        <div className="Project" onClick ={ handleClick}>
            <img className="ProjectImage" src ={image} alt={alt}/>
            <div className="HiddenInfo">
                <h1>{title}</h1>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>

        
        </div>
  );
}

export default Project;