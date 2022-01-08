import React, { Component } from 'react'

export class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {headerContent} = this.props
        let darkMode = true
        let titleStyle = {
            color: darkMode ? "red" : "black",
            textTransform: "capitalize"
        }

        return (
            <div className="Header">
                <h1 style={titleStyle} id="title">{headerContent.title}</h1>
                <p className="subtitle">{headerContent.subtitle}</p>
            </div>
        )
    }
}

export default Header
