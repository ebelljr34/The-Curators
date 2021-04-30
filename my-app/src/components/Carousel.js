import {useState} from "react"
import '../App.css';
import Project from "./Project"

function Carousel({projects}) {
    const [window, setWindow] = useState(0)
    const windowSize = 3
 
  
  return (
    <div className="Carousel">
      {
          projects
            .slice(window, window+windowSize)
            .map(project => <Project {...project}/>)

      }
    </div>
  );
}

export default Carousel;