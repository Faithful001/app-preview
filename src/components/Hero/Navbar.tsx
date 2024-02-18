import { navbarData } from "../../data/navbarData";
import { navbarDataInterface } from "../../interfaces/data.interfaces";

const Navbar = () => {
    return ( 
        <div className="navbar bg-white px-14 py-5">
            <div className="flex items-center justify-around">
                {navbarData.map((data: navbarDataInterface, index: number)=>(
                    <p key={index}>{data.title}</p>
                ))}
            </div>
        </div> 
    );
}
 
export default Navbar;