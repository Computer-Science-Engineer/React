export default function Add()
{
    var a = 100;
    var b = 50;
    var c = a + b;
    return(
        <div>
          <h3> this is addition component </h3>
          <span>  a = {a}, </span>
          <span>  b = {b} </span>
          <p> result of addition is {c} </p>   
        </div>
    );
}
