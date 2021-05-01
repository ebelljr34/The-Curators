import axios from 'axios';
import React, { Component } from 'react';
import Project from '../components/Project';
import Banner from '../components/Banner'
import "../styles/Gallery.css";

class Gallery extends Component {
    constructor(props) {
        super(props)

        axios.get('https://reqres.in/api/users?page=2')
            .then(res => {
                console.log(res.data.data);
            });
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