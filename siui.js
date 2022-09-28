import React, { useRef, useState } from 'react';
export default function UnFuncCompSIUI(){
     const p = useRef(null);
     const r = useRef(null);
     const t = useRef(null);
     const[si, setSi] = useState(0);
     function SiCalc(event){
        var s = (p.current.value*r.current.value*t.current.value)/100
        setSi(s);
        event.preventDefault();
     }
     return(
        <div>
            <form onSubmit={SiCalc}>
                <input type= "text" ref={p} placeholder="p value" />
                <br />
                <input type= "text" ref={r} placeholder="r value" />
                <br />
                <input type= "text" ref={t} placeholder="t value" />
                <br />
                <input type= "submit" name='btnsubmit' value="click" />
                <p>{si}</p>   
            </form>
        </div>
     )
 }