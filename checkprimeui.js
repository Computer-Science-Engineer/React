import React, { useRef, useState } from "react";
export default function CheckPrimeUI(){
    const a = useRef(null);
    const [p, setP] = useState("");
    function CheckPrimeLogicUI(event){
        var c = true;
        for(var i = 2; i < a.current.value; i++){
              if(a.current.value%i == 0){
                    c = false;
                    break 
              }
        }
        if(c){
            setP("prime")
        }
        else{
            setP("non prime")
        }
        event.preventDefault()
    }
 return(
    <div>
    <form onSubmit={CheckPrimeLogicUI}>
        <input type="text" ref={a} placeholder="input any no" />
        <br />
        <input type="submit" name="btnsubmit" value="submit" />
        <h1>{p}</h1> 
    </form>
    </div>
 )
}