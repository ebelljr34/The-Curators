import {useState} from "react"
import '../App.css';
import logo from "../logo.svg"
import Carousel from "./Carousel"

function Gallery() {
  
  return (
    <div className="Gallery-component">
      <Carousel projects ={projects}/>
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