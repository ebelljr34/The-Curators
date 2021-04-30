import React, { Component } from 'react'
import '../styles/Landing.css'

class Landing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.location.href = '/Gallery';
    }

    render() {
        return (
           <div className="root">
                <h1 className="title">The Gallery</h1>
                <button className="button" onClick={this.handleClick}>Enter</button>
           </div> 
        );
    }
}

export default Landing;