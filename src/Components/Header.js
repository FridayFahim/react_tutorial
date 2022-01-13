import React, { Component, createRef } from 'react'

export class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            something: ""
        }
        this.titleInput = createRef()
    }
    addPost = () => {
        var data = this.titleInput.current.value
        this.setState({ something: data })
    }
    render() {
        const { headerContent, darkMode, switchLight } = this.props
        const { something } = this.state
        let titleStyle = {
            color: darkMode ? "red" : "black",
            textTransform: "capitalize"
        }

        return (
            <div className="Header">
                <input ref={this.titleInput} type="text" placeholder='write something' />
                <h1 style={titleStyle} id="title">{headerContent.title}</h1>
                <p className="subtitle">{headerContent.subtitle}</p>
                <h3>{something}</h3>
                <button onClick={this.addPost.bind()}>post</button>
                <button id="switch" onClick={switchLight}>dark mode {darkMode ? "on" : "off"}</button>
            </div>
        )
    }
}

export default Header
