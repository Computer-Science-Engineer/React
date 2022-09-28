import React from "react";
export class FibonacciC extends React.Component
{
    constructor()
    {
        super();
        this.state = {a: -1, b: 1, c: 0, n: 10, str: '', res: ''};
    }
    FibonacciLogic()
    {
        var {a, b, c, n, str} = this.state;
        for(var i = 0; i < n; i++)
        {
            c = a+b;
            str = str + c + ' '
            a = b;
            b = c;
        }
        this.setState({res: str})
    }
    render()
    {
        return(
            <div onLoad={this.FibonacciLogic()}>
            <h1>fibonacci series upto {this.state.n} terms is {this.state.res} </h1>
            </div>
        )
    }
}