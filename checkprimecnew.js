import React from "react";
export class CheckPrimeC extends React.Component
{
  constructor()
  {
    super()
    this.state = {a: 8, res: ""}
  }
  PrimeLogicC()
  {
    var a = this.state.a;
    var c = true;
    for(var i = 2; i < a; i++)
    {
       if(a%i == 0)
       {
          c = false;
          break;     
       }
    }
    if(c)
    {
       this.setState({res:"prime"})
    }
    else
    {
        this.setState({res:"not prime"})
    }
  } 
  render(){
    return(
        <div onLoad={this.PrimeLogicC()} > 
           <h1>{this.state.a} is {this.state.res} </h1>
          </div>
    )
  }
}