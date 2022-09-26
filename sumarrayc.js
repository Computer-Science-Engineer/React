import React from "react";
export class Sumarrayc extends React.Component
{
    constructor()
    {
        super()
        this.state = {arr: [1, 2, 3, 4, 5], s: 0, str: ' '};
    }
    render()
    {
        var {arr, s, str} = this.state;
        for(var i = 0; i < arr.length; i++)
        {
           if(i != arr.length-1 )
           {
            str= str + arr[i] + '+';
            s = s + arr[i];
           }
           else
           {
            str= str + arr[i];
            s = s + arr[i];
           }
        }
        return(
            <div>
              <h2> this is sum of array elements class component </h2>
              <h3> sum of array elements {str} = {s} </h3> 
            </div>
        )
    }
}