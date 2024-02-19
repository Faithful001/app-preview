import unleash_img from "../../../public/img/unleash_image.jpg"
const Unleash = () => {
    return ( 
    <div className="unleash px-14 py-5 flex flex-col gap-10 items-center justify-center">
        <h1 className="text-4xl font-bold text-[#233966]">Unleashing the power of AI</h1>
        <div className="flex items-center justify-center gap-10">
            <img className="max-w-[40%] rounded-xl" src={unleash_img} alt="" />
            <div className="flex flex-col gap-2">
                <h2 className="text-[#233966] font-bold text-3xl">Efficiency</h2>
                <p className="text-[#6493BD] text-xl">Streamlines repetitive tasks and automates processes, enhancing overall operational efficiency.</p>
                <h2 className="text-[#233966] font-bold text-3xl">Data Analysis</h2>
                <p className="text-[#6493BD] text-xl">Analyzes vast datasets quickly, extracting valuable insights to inform decision-making.</p>
                <h2 className="text-[#233966] font-bold text-3xl">Personalization</h2>
                <p className="text-[#6493BD] text-xl">Enables personalized experiences by tailoring recommendations and content based on individual preferences.</p>
                <h2 className="text-[#233966] font-bold text-3xl">Accuracy</h2>
                <p className="text-[#6493BD] text-xl">Performs tasks with a high degree of accuracy, reducing errors associated with manual processes.</p>
            </div>
        </div>
        <button className="p-5 max-w-80  bg-[#E59C26] text-[#233966] rounded-md font-semibold">Click here to imagine the possibilities</button>
    </div> 
    );
}
 
export default Unleash;