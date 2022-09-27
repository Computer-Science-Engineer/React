function SumArrayLogic()
{
    var a = [1, 2, 3, 4, 5, 67, 87, 56767];
    var b = 0;
    var str = '';
    for(var i = 0; i < a.length; i++)
    {
      if(i<a.length-1){
      str = str + a[i] + "+";
      b = b + a[i];
      }
      else{
      str = str + a[i];
      b = b + a[i];
      }
    }
    return str + "=" + b
}
export default function SumArray(){
    return(
        <h1> {SumArrayLogic()} </h1>
    )
}
