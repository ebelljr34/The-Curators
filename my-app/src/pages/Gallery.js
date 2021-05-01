import React, { Component } from 'react';
import Project from '../components/Project';
import Banner from '../components/Banner'
import "../styles/Gallery.css";

class Gallery extends Component {
    constructor(props) {
        super(props)
        /* TODO: See "Rendering Dynamic Data" at https://www.pluralsight.com/guides/how-to-implement-a-component-%22loop%22-with-react

        Fetch the list from the backend and set the projects list.
        */
        this.state = {
            projects: [
                { title: 'The Gallery', author: 'The Curators' },
                { title: "Weather App", author: "Zeus" }
            ]
        }
    }

    render() {
        let projectList = []
        this.state.projects.forEach(project => {
            projectList.push(<li class="flex-item">
                <Project
                    title={project.title}
                    author={project.author}
                >
                </Project></li>)
        })

        return (
            <div className="root">
                <Banner
                    text="The Knowledge House"
                />
                <h1> Gallery </h1>
                <ul class="flex-container">
                    {projectList}
                </ul>
            </div>
        )
    }
}

export default Gallery;