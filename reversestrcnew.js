import React from "react";
export class ReverseStr extends React.Component
{
    constructor(){
        super()
        this.state = {str: "google", s: '', res: '', res1: ''}
    }
    ReverseStrLogic()
    {
        var {str, s, res} = this.state;
        for(var i = 0; i < str.length; i++){
               s = str[i] + s; 
        }
       this.setState({res1: str, res: s});       
    }
    render(){
        return(
            <div onLoad={this.ReverseStrLogic()}>
             <h1> reverse of {this.state.res1} is {this.state.res} </h1>
            </div>
        )
    }
}