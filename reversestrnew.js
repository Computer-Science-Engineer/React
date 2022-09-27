function ReverseStrLogic()
{
   var str = "React";
   var s = '';
   str = str.toLowerCase();
   for(var i = 0; i < str.length; i++)
   {
     s = str[i] + s;
   } 
   return "reverse of " + str + " is " + s;
}
export default function ReverseStr()
{
    return(
        <h1> {ReverseStrLogic()} </h1>
    )
}