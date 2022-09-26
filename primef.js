export default function Primef()
{
    var a = 5;
    var c = 0;
    for(var i = 2; i < a; i++)
    {
        if (a%i == 0)
        {
            c = 1;
            break       
        }
    }
    if (c == 0){
        return(
            <div>
            <h2> this is functional component of check prime </h2>
            <h3> {a} is prime  </h3>
            </div>
        )    
    }
    else
    {
        return(
            <div>
            <h2> this is functional component of check prime </h2>
            <h3> {a} is not prime  </h3>
            </div>
            )
    }
}