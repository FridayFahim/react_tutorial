import React, { Component } from 'react';
import HOC from './HOC'

class Post extends Component {
    constructor(){
        super()
    }
  render() {
      const {title,body,author} = this.props.post
      const meta = this.props.meta
      return <div className="col-md-3">
         
         <div className="post">
              <h1>{meta}</h1>
              <h2>{title}</h2>
              <p>{body}</p>
              <p><strong>author:</strong> {author}</p>
         </div>
      </div>;
  }
}
export default HOC(Post)