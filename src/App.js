// import logo from './logo.svg';
import React, { Component, Fragment } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Post from './Components/Post'
class App extends Component {
  constructor(){
    super()
    this.state = {
      posts:[
        {
          title:"Sturdy Themes",
          body:"Our themes are updated regularly to keep them bug free!",
          author:"fahim"
        },
        {
          title:"Up to Date",
          body:"All dependencies are kept current to keep things fresh.",
          author:"rahim"
        },
        {
          title:"Ready to Publish",
          body:"You can use this design as is, or you can make changes!",
          author:"karim"
        },
        {
          title:"Ready to Publish",
          body:"You can use this design as is, or you can make changes!",
          author:"karim"
        }
      ]
    }
  }
  render() {
    console.log(Post)
    return (
    
      <Fragment>
        <div className="container">
          <div className="row">
            {this.state.posts.map((post,index) => {
              return <Post key={index} post={post}/>
            })}
          </div>
        </div>
      </Fragment>
    )
  }
}

// function App(){
//   return(<></>)
// }

// let App = () => <></>

export default App

