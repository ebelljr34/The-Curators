import React, { Component } from 'react';
import Project from '../components/Project';
import Banner from '../components/Banner'
import "../styles/Gallery.css";

class Gallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="root">
                <Banner 
                    text="The Knowledge House"
                />
                <h1> Gallery </h1>
                <Project 
                    title="new Project"
                    name="Sandeep"
                    link="google.com"
                >
                </Project>
            </div>
        )
    }
}

export default Gallery;