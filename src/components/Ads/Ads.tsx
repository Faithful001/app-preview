import dart_img from "../../../public/img/dart.jpg";

const Ads = () => {
    return ( 
        <div className="ads px-14 py-5 flex items-center justify-center gap-10">
            <div className="flex flex-col gap-5">
            <h1 className="text-[#233966] text-4xl font-bold">Don't gamble on ads; AI-analytics will guide you!</h1>
            <p className="text-2xl text-[#233966]">Reach out to us for your first order</p>
            {/* form */}
            <form className="flex flex-col items-center justify-center gap-3 p-7 border border-[#CBCBCB] rounded-xl bg-[#EEEEEE]">
                <input className="w-full p-3 border border-[#CBCBCB] bg-white rounded-md" type="text" placeholder="Full Name" />
                <input className="w-full p-3 border border-[#CBCBCB] bg-white rounded-md" type="text" placeholder="Email Address" />
                <button className="bg-[#4E56FF] text-white w-full p-3 border border-[#CBCBCB] rounded-md">Submit</button>
            </form>
            
            </div>
            <img className="max-w-[50%] rounded-xl" src={dart_img} alt="" />
        </div>
     );
}
 
export default Ads;