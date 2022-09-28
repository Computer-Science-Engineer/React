import React, { useRef, useState } from "react";
export default function FibonacciUi(event){
         const n = useRef(null)
         const [f, setF] = useState(" ")
         function FibonacciLogicUI(event){
               var a = -1
               var b = 1 
               var c = 0
               var str = ''
               for(var i = 0; i < n.current.value; i++){
                      c = a + b;
                      str = str + c + ' '
                      a = b
                      b = c
               }
               setF(str)
               event.preventDefault()   
            }
            
        return(
            <div>
                <form onSubmit={FibonacciLogicUI}>
                    <input type="text" ref={n} placeholder="series upto "></input>
                    <br />
                    <input type="submit" name="btnsubmit" value="submit"></input>
                    <h1>{f}</h1> 
                </form>
            </div>
        )
}