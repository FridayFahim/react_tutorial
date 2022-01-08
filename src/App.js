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
      header: {
        title: "hello react",
        subtitle: "we're going to learn M.E.R.N stack"
      },
      mainTitle: "react is fun"
    }
  }

  render() {
    const {header,mainTitle} = this.state
    return (
      <Fragment>
        <Header headerContent={header}/>
        <Main mainContent={mainTitle}/>
      </Fragment>
    )
  }
}

// function App(){
//   return(<></>)
// }

// let App = () => <></>

export default App

