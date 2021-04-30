import {useState} from "react"
import './App.css';
import Gallery from "./components/Gallery"

function App() {
  const [galleryOpen, setGalleryOpen] = useState(false)
  return (
    <div className="App">
      {
        !galleryOpen ?
        <div>
          <h1>Home</h1>
          <button onClick = {()=>{setGalleryOpen(true)}}>Enter</button>
        </div>
        :
        <div>
          <h1>Gallery</h1>
          <Gallery/>
        </div>
      }
    </div>
  );
}

export default App;
