import React, { Component } from 'react';

const HOC  = (WrappedComponent) => {
    
        // return class NewComponent extends Component {
        //         constructor(props){
        //                 super(props)
        //         }

        //         render(){
        //                 return <WrappedComponent {...this.props}/>
        //         }
        // }

        return function NewComponent(props){
                return <WrappedComponent {...props}/>
        }
        
}
export default HOC