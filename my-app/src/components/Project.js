import {useState} from "react"
import '../App.css';

function Project({ProjectTitle, StudentName, Link, image, alt, Description}) {
  
  const handleClick= ()=> { 
    window.open(Link, "_blank")
  }
  return (
        <div className="Project" onClick ={ handleClick}>
            <img className="ProjectImage" src ={image} alt={alt}/>
            <div>
                <h1>{ProjectTitle}</h1>
                <h2>{StudentName}</h2>
                <p>{Description}</p>
            </div>

        
        </div>
  );
}

export default Project;