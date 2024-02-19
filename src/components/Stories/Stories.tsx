import { storiesData } from "../../data/storiesData";
import { storiesDataInterface } from "../../interfaces/data.interfaces";
import stars from "../../../public/img/stars.png"

const Stories = () => {
    return ( 
        <div className="stories px-14 py-5 flex gap-10 flex-col items-center justify-center">
            <h1 className="text-[#233966] text-4xl font-bold">Client Success Stories</h1>
            <div className="flex items-start justify-center gap-5">
            {storiesData.map((data: storiesDataInterface, index: number)=>(
                <div className="" key={index}>
                <img src={stars} alt="" />
                <p className="font-bold text-xl">"{data.title}"</p>
                <p className="text-xl">"{data.body}"</p>
                <p className="font-bold text-xl">{data.author}</p>
                </div>
            ))}
            </div>
            <button className="p-5 bg-[#E59C26] text-[#233966] rounded-md font-semibold ">Click here to fill FREE creditor's report form</button>
        </div> 
    );
}
 
export default Stories;