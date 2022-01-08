import React, { Component } from 'react'

export class Main extends Component {
    constructor(props) {
        super(props)
      
    }
    render() {
        let {mainContent} = this.props
        return (
            <div>
              <h1>{mainContent}</h1>  
            </div>
        )
    }
}

export default Main
