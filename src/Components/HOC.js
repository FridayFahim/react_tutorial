import React, { Component } from 'react';

const HOC  = (WrappedComponent) => {
    
        return function NewComponent(props){
                 return <WrappedComponent {...props} meta="hello world"/>
        }
        
}
export default HOC