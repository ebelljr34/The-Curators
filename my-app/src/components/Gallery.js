import {useState, useEffect} from "react"
import axios from "axios"
import '../App.css';
import logo from "../logo.svg"
import Carousel from "./Carousel"

function Gallery() {
  const [dsprojects, setdsprojects] = useState([])
  const [wdprojects, setwdprojects] = useState([])
  useEffect(() =>{
    const api= async()=> {
    const Dsdata= await axios.get("http://127.0.0.1:5000/projects/D")
    const Wddata= await axios.get("http://127.0.0.1:5000/projects/WD")
    setdsprojects(Dsdata.data)
    setwdprojects(Wddata.data)
    }
    api()
  },[]) 
  console.log(dsprojects) 
  return (
    <div className="GalleryComponent">
      <Carousel projects ={wdprojects}/>
      <Carousel projects ={dsprojects}/>
    </div>
  );
}

export default Gallery;

const projects = [
    {
        title: "Tkh Projects",
        link: "https://google.com",
        name: "Malcom, Elston, Chioma",
        image: logo,
        alt: "this is an image",
        description: "This project is about data"

    },
    {
        title: "Tkh Projects",
        link: "https://google.com",
        name: "Malcom, Elston, Chioma",
        image: logo,
        alt: "this is an image",
        description: "This project is about data"

    },
    {
        title: "Tkh Projects",
        link: "https://google.com",
        name: "Malcom, Elston, Chioma",
        image: logo,
        alt: "this is an image",
        description: "This project is about data"

    },
    {
        title: "Tkh Projects",
        link: "https://google.com",
        name: "Malcom, Elston, Chioma",
        image: logo,
        alt: "this is an image",
        description: "This project is about data"

    }
]