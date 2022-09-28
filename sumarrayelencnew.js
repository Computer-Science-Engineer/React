import React from "react";
export class SumArray extends React.Component
{
    constructor()
    {
        super()
        this.state = {a: [1, 2, 3], s: 0, res: '', str: '', res1:''}
    }
    Sumarraylogic()
    {
        var {a, s, res, str, res1} = this.state;
        for(var i = 0; i < a.length; i++)
        {
           if(i != a.length-1 ){
            str = str + a[i] + '+';             
            s = s + a[i];
        }
        else
        {
            str = str + a[i];
            s = s +a[i];             
        }
        }    
        this.setState({res: s, res1: str})
    }
    render()
    {
        return(
            <div onLoad={this.Sumarraylogic()}>
             <h1> {this.state.res1} = {this.state.res} </h1>
            </div>
        )
    }
}