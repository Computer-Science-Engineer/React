import React, { useRef, useState } from "react";
export default function SumArray() {
    const a = useRef(null)
    const b = useRef(null)
    const c = useRef(null)
    const [res, setRes] = useState(0)
    function SumArrayLogic(e){
        var a1 = a.current.value
        var b1 = b.current.value
        var c1 = c.current.value
        var d = [];
        var s = 0;
        d.push(parseInt(a1))
        d.push(parseInt(b1))
        d.push(parseInt(c1))
        for(var i = 0; i < d.length; i++){
                s = s + d[i];
        }
        setRes(s)
        e.preventDefault()
    }       
    function Reset(){
        document.getElementById("myform").reset()
        setRes(0)
    }
      return(
          <div>
            <form id="myform" onSubmit={SumArrayLogic}>
                 <input type="text" ref={a} placeholder="input 1st value of array" />
                 <br />
                 <input type="text" ref={b} placeholder="input 2nd value of array" />
                 <br />
                 <input type="text" ref={c} placeholder="input 3rd value of array" />
                 <br />
                 <input type="submit" value="submit" />
                 <input type="button" value="RESET" onClick={Reset} />
                 <h1> {res} </h1>
                 
                 
            </form>
          </div>
      )
}