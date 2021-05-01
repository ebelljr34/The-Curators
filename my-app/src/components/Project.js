import React, { Component } from 'react'

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
            <div>
                <h1>{this.state.title}</h1>
                <h1>{this.state.author}</h1>
                <h1>{this.state.link}</h1>
            </div>
        )
    }
}

export default Project