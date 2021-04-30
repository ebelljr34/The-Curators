import React, { Component } from 'react'

class Project extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            name: "",
            link: "",
            image: "",
            description: ""
        }
    }

    componentDidMount() {
        this.setState({
            title: this.props.title,
            name: this.props.name,
            link: this.props.link,
            image: this.props.image, 
            description: this.props.description
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h1>{this.state.name}</h1>
                <h1>{this.state.link}</h1>
            </div>
        )
    }
}

export default Project