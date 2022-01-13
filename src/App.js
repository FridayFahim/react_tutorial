// import logo from './logo.svg';
import React, { Component, Fragment } from "react"
import Header from "./Components/Header"
import Main from "./Components/Main"
import './style.css'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      darkMode: true,
      header: {
        title: "hello react",
        subtitle: "we're going to learn M.E.R.N stack"
      },
      mainTitle: "react is fun"
    }
    // this.switchLight = this.switchLight.bind()
  }

  switchLight = () => {
    let {darkMode} = this.state
    this.setState({
      darkMode:!darkMode
    })
  }

  render() {
    const { header, mainTitle, darkMode } = this.state
    return (
      <Fragment>
        <Header switchLight={this.switchLight.bind()} darkMode={darkMode} headerContent={header} />
        <Main mainContent={mainTitle} />

      
      </Fragment>
    )
  }
}

// function App(){
//   return(<></>)
// }

// let App = () => <></>

export default App

