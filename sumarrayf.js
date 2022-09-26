export default function Sumarrayf()
{
  var arr = [1, 2, 3, 4, 5, 98, 45, 65585];
  var s = 0;
  var str = '';
  for(var i = 0; i < arr.length; i++)
  {
    if(i != arr.length-1  )
    {
        str = str + arr[i] + '+';
        s = s + arr[i];
    }
    else
    {
        str = str + arr[i];
        s = s + arr[i];        
    }
  }
  return(
    <div>
    <h2> this is sum of array elements functional component </h2>
    <h3> sumof array elements {str} = {s} </h3>
    </div> 
  )
}