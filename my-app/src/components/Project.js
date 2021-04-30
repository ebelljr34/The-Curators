import {useState} from "react"
import '../App.css';

function Project({title, name, link, image, alt, description}) {
  
  return (
    <a href={link} target="_blank" rel="noreferrer" >
        <div className="Project">
            <img src ={image} alt={alt}/>
            <div>
                <h1>{title}</h1>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>

        
        </div>
    </a>
  );
}

export default Project;