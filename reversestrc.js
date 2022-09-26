import React from "react";
export class Reversestrc extends React.Component
{
    constructor()
    {
        super()
        this.state = {str: 'google', s: ''};
    }
    render()
    {
      var {str, s} = this.state;  
      for(var i = str.length-1; i>= 0; i--)
      {
         s = s + str[i];
      }
      return(
        <div>
        <h2> this is reverse of string class component </h2>
        <h3> reverse of {str} is {s} </h3>
        </div>
      )
    }
} 
