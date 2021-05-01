import React, { Component } from 'react';
import "../styles/Banner.css";

class Banner extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ""
        }
    }

    componentDidMount() {
        /*
            Example of using props, I pass the value of the text in
            Gallery.js and the component receives it here when it is 
            "Mounted" on the dom. Here it sets the state and then
            renders it below. Styling in Banner.css
        */
        this.setState({
            text: this.props.text
        })
    }

    render() {
        return (
            <div className="banner">
                <h1 className="galleryTitle">
                    {this.state.text}
                </h1>
            </div>
        )
    }
}

export default Banner