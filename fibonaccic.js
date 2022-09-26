import React from "react";
export class Fibonaccic extends React.Component
{
    constructor()
    {
        super()
        this.state = {a: -1, b: 1, c: 0, s: " "};
    }
    render()
    {
        var {a, b, c, s} = this.state;
        for(var i = 0; i < 10; i++)
        {
            c = a+b;
            s = s + c + ' ';
            a = b;
            b = c;
        }
        return(
            <div>
            <h2> this is fibonacci series class component </h2>
            <h3> {s} </h3>
            </div>
        )
    }
}