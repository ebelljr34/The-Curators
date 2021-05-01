import {useState} from "react"
import './App.css';
import Gallery from "./components/Gallery"
import ticket from "./ticket.png"

function App() {
  const [galleryOpen, setGalleryOpen] = useState(false)
  return (
    <div className="App">
      {
        !galleryOpen ?
        <div className ="Home">
          <img className="Ticket" src = {ticket} alt="ticket"/>
          <div className ="Home-text">
            <h1>Home</h1>
            <button onClick = {()=>{setGalleryOpen(true)}}>Enter</button>
          </div>
        </div>
        :
        <div className ="Gallery">
          <h1 className = "Gallery-title">Gallery</h1>
          <Gallery/>
        </div>
      }
    </div>
  );
}

export default App;
