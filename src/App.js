// import logo from './logo.svg';
import React, { Component, Fragment,useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Post from './Components/Post'


// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       load:true,
//       posts: [
//         {
//           title: "Sturdy Themes",
//           body: "Our themes are updated regularly to keep them bug free!",
//           author: "fahim"
//         },
//         {
//           title: "Up to Date",
//           body: "All dependencies are kept current to keep things fresh.",
//           author: "rahim"
//         },
//         {
//           title: "Ready to Publish",
//           body: "You can use this design as is, or you can make changes!",
//           author: "karim"
//         },
//         {
//           title: "Ready to Publish",
//           body: "You can use this design as is, or you can make changes!",
//           author: "karim"
//         }
//       ]
//     }
//   }

//   switchHandler(){
//     const {load} = this.state
//     this.setState({load:!load})
//   }

//   render() {
//     const {load} = this.state
//     return (

//       <Fragment>
//         <div className="container">
//           <div className="row">
//             {this.state.posts.map((post, index) => {
//               return load ? <Post key={index} post={post} /> : "nothing"
//             })}
//           </div>
//         </div>

//         <div className="container">
//           <div className="row justify-content-center align-items-center"><button onClick={this.switchHandler.bind(this)} className="btn btn-lg btn-primary">switch {load?"on":"off"} </button></div>
//         </div>
//       </Fragment>
//     )
//   }
// }

function App(){
  const [posts,setPosts] = useState([
        {
          title: "Sturdy Themes",
          body: "Our themes are updated regularly to keep them bug free!",
          author: "fahim"
        },
        {
          title: "Up to Date",
          body: "All dependencies are kept current to keep things fresh.",
          author: "rahim"
        },
        {
          title: "Ready to Publish",
          body: "You can use this design as is, or you can make changes!",
          author: "karim"
        },
        {
          title: "Ready to Publish",
          body: "You can use this design as is, or you can make changes!",
          author: "karim"
        }
      ])
    const [load,setLoad] = useState(true)


    function switchHandler(){
 
      setLoad(!load)
    }

  return(
   
     <Fragment>
        <div className="container">
          <div className="row">
            {posts.map((post, index) => {
              return load ? <Post key={index} post={post} /> : "nothing"
            })}
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center align-items-center"><button onClick={()=> switchHandler() } className="btn btn-lg btn-primary">switch {load?"on":"off"} </button></div>
        </div>
      </Fragment>
  )
}

export default App

