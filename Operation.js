import Add from "./Add";
import Subs from "./Subs";
import Multi from "./Multi";
import Divi from "./Divi";
export default function  Operation()
{
    return(
    <div>
    <h2> We are calling all the components using Operation component </h2>
    <Add />
    <Subs />
    <Multi />
    <Divi />
    </div>
    );
}