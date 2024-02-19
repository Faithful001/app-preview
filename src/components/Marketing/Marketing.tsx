import marketing_picture from "../../../public/img/marketing.jpg"

const Marketing = () => {
    return ( 
        <div className="marketing px-14 py-5 flex flex-col gap-10">
            <h1 className="text-4xl font-semibold text-[#233966] ">Boost your marketing prowess with AI-driven strategies ensuring you're always ten steps ahead of the competition.</h1>
            <div className="flex items-start justify-center gap-10">
                <img className="max-w-[40%] rounded-xl" src={marketing_picture} alt="" />
                <div className="flex flex-col gap-5 text-2xl font-semibold text-[#6493BD]">
                    <p>AI can analyze historical data to predict future trends, helping businesses make informed decisions.</p>
                    <p>AI can analyze historical data to predict future trends, helping businesses make informed decisions.</p>
                    <p>AI can analyze historical data to predict future trends, helping businesses make informed decisions.</p>
                    <p>AI can analyze historical data to predict future trends, helping businesses make informed decisions.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Marketing;