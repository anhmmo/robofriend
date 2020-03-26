import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state= {
            hasError: false
        }
    }

    //it like the try catch block in javascript, if anything errors out it will run this lifcycle hook .
    componentDidCatch(error, info) {
        this.setState({hasError : true});
    }
    
    render() {
        if(this.state.hasError)
        {
            return (
                <h1>Ops, this is not good</h1>
            )
        }
        else {
            return (
                this.props.children
            )
        }
        
    }
}

export default ErrorBoundry;



