import React from "react";
export class Primec extends React.Component
{
    constructor()
    {
        super()
        this.state = {a: 7, i: 2, c: 0}
    }
    render()
    {
     var {a, i, c}= this.state
     for(i = 2; i < a; i++)
     {
        if(a%i == 0)
        {
            c = 1;
            break
        }
     }   
     if(c==0)
     {
        return(
            <div>
            <h2> this is class component of check prime </h2>
            <h3> {a} is prime</h3>
            </div> 
        )
     }     
     else
     {
        return(
            <div>
            <h2> this is class component of check prime </h2>
            <h3> {a} is non prime</h3>
            </div>
        )       
     }
    }
}