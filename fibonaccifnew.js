function FibonacciLogic()
{
   var a = -1;
   var b = 1;
   var str = '';
   var n = 20;
   for(var i = 0; i < n; i++)
   {
    var c = a + b;
    str = str + c + ' ';
    a = b;
    b = c;
   }
   return "Fibonacci series upto "+ n + " terms ->"+ str
}
export default function FibonacciF()
{
  return (
   <h1> {FibonacciLogic()} </h1> 
  )
}

