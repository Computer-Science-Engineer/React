export default function Divi()
{
    var a = 1000;
    var b = 50;
    var c = a / b;
    return(
        <div> 
           <h3> this is division component</h3>
           <span> a = {a}, b = {b} </span>
           <p> value of division is {c} </p>      
        </div>
        
    );
}