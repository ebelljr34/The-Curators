import React, { Component } from 'react'
import "../styles/Project.css"

class Project extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            author: "",
            link: "",
            image: "",
            description: ""
        }
    }

    componentDidMount() {
        this.setState({
            title: this.props.title,
            author: this.props.author,
            link: this.props.link,
            image: this.props.image,
            description: this.props.description
        })
    }

    render() {
        return (
            <div className="project">
                <img src={this.state.image} alt={this.state.title}></img>
                <h4>{this.state.title}</h4>
                <p>Creators: {this.state.author}</p>
                <p>Description: {this.state.description}</p>
                <h1>{this.state.link}</h1>
            </div>
        )
    }
}

export default Project