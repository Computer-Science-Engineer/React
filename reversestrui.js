import React, { useRef, useState } from "react";
export default function ReverseStrUi(){
    const s = useRef(null)
    const [r, setR] = useState("")
    function ReverseStrUiLogic(event){
           var rs = ''
           for(var i = 0; i < s.current.value.length ; i++){
                    rs = s.current.value[i] + rs
           }
            setR(rs)
            event.preventDefault()
    }
    return(
        <div>
            <form onSubmit={ReverseStrUiLogic}>
                 <input type="text" ref={s} placeholder="string "></input>
                 <br />
                 <input type="submit" name="btnsubmit" value="submit"></input>
                 <h1>{r}</h1>
            </form>
        </div>
    )

}