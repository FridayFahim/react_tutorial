import React, { Component,useEffect } from 'react';
import HOC from './HOC'

function Post(props) {


    // componentDidMount(){
    //     console.log("component mounted")
    // }

    useEffect(() => {
        console.log("component did mouhnt")

        return(console.log("component will unmount"))
    },[])
      const {title,body,author} = props.post
      return <div className="col-md-3">
         
         <div className="post">
           
              <h2>{title}</h2>
              <p>{body}</p>
              <p><strong>author:</strong> {author}</p>
         </div>
      </div>;

//   componentWillUnmount(){
//       console.log("I am dying")
//   }
}
export default HOC(Post)