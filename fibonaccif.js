export default function Fibonaccif()
{
    var a = -1;
    var b = 1;
    var s = '';
    for(var i = 0; i < 10; i++)
    {
        var c = a+b;
        s = s + c + ' '; 
        a = b;
        b = c;
    }
    return(
        <div>
        <h2> this is fibonacci series functional component </h2>
        <h3> {s} </h3>
        </div>
    )
}