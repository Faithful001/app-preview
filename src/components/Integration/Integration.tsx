import chess_people from "../../../public/img/chess-people.jpg"

const Integration = () => {
    return ( 
        <div className="integration">
            <h1 className="text-5xl font-semibold text-[#233966]">Pioneering AI Integration for Revolutionary Marketing.</h1>
            <div className="text-[#6493BD]">
                <p>At Wide Web Advisor, we pride ourselves on being leaders in the integration of AI technologies to drive substantial advancements in marketing practices. Our core expertise lies in reshaping the digital presence of businesses, offering a unique blend of time-tested traditional methodologies and cutting-edge AI solutions.</p>
                <p>We are pioneers in using AI as a transformative tool within the marketing domain, leveraging AI technologies to propel significant advancements in how brands strategize, execute campaigns, understand their audiences, and optimize their overall performance.</p>
                <p>As your growth partner, we specialize in reshaping the digital landscape of your business across every channel. Our unique approach is a seamless blend of proven traditional methodologies with cutting-edge AI technology.</p>
                <img className="max-w-[50%]" src={chess_people} alt="" />
            </div>
        </div>
     );
}
 
export default Integration;