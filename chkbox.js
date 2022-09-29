import React, { useRef, useState } from "react"
export default function Chkbox(){
    const a = useRef(null)
    const b = useRef(null)
    const c = useRef(null)
    const [res, setRes] = useState("")
     function ChkBoxLogic(e){
         var str = "";
         var a1 = a.current.value
         var b1 = b.current.value
         var c1 = c.current.value
         if (document.getElementById("html").checked == true){
              str = str+ a1 + " "
        }
         if (document.getElementById("css").checked == true){
              str = str+ b1 + " "
        }
        if (document.getElementById("js").checked == true){
              str = str+ c1+ " "
        }
         setRes("Selected subjects are ->" + str)
         e.preventDefault()
     }
     function Reset(){
           document.getElementById("myform").reset()
           setRes(" ")
     }
    
    return(
        <form id="myform" onSubmit={ChkBoxLogic}>
        <input type={"checkbox"} ref={a} id="html" name="subject1" value="HTML"/>
        <label for="html"> HTML </label>
        <br />
        <input type={"checkbox"} ref={b} id="css" name="subject2" value="CSS" />
        <label for="html"> CSS </label>
        <br />
        <input type={"checkbox"} ref={c} id="js" name="subject3" value="JAVASCRIPT" />
        <label for="html"> JS </label>
        <br />
        <input type={"submit"} value="submit" />
        <input type={"button"} value="reset" onClick={Reset} />
        <h1>  {res} </h1>
        </form>
    )
}