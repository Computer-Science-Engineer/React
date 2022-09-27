function PrimeLogic()
{
    var a = 7;
    var c = true;
    for(var i = 2; i < a; i++)
    {
       if(a%i == 0)
       {
           c = false;
           break;
       }
    }
   if(c)
   {
       return  a + " is prime"
   }
   else
   {
       return  a + " is non prime"
   }
}
export default function CheckPrimeF()
{    
return(
<h1>  {PrimeLogic()} </h1> 
)
}
  

