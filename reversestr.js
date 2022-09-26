export default function Reversestr()
{
    var str = "react";
    var s = '';
    for(var i = str.length-1; i >= 0; i--)
    {
       s = s + str[i];
    }
    return(
        <div>
            <h2> this is reverse string functional component  </h2>
            <h3> reverse of {str} is {s} </h3>
        </div>
    )
}