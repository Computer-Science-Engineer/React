import React from "react"
export default function RadioBtnNew(){
     function RadioBtnLogic(e){
         
         if (document.getElementById("red").checked == true){
              document.body.style.backgroundColor="red"
        }
         if (document.getElementById("green").checked == true){
            document.body.style.backgroundColor="green"
        }
        if (document.getElementById("blue").checked == true){
            document.body.style.backgroundColor="blue"
        }
         e.preventDefault()
     }
     function Reset(){
           document.getElementById("myform").reset()
           document.body.style.backgroundColor="white"
     }
    
    return(
        <form id="myform" onSubmit={RadioBtnLogic}>
        <input type={"radio"}  id="red" name="colors" value="RED"/>
        <label for="red"> RED </label>
        <br />
        <input type={"radio"} id="green" name="colors" value="GREEN" />
        <label for="green"> GREEN </label>
        <br />
        <input type={"radio"}  id="blue" name="colors" value="BLUE" />
        <label for="blue"> BLUE </label>
        <br />
        <input type={"submit"} value="submit" />
        <input type={"button"} value="reset" onClick={Reset} />
       
        </form>
    )
}