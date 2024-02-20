import unleash_img from "../../assets/img/unleash_image.jpg";
const Unleash = () => {
  return (
    <div className="unleash md:px-14 px-7 py-5 flex flex-col gap-10 items-center justify-center">
      <h1 className="text-4xl font-bold text-[#233966]">
        Unleashing the power of AI
      </h1>
      <div className="flex items-center justify-center gap-10">
        <img
          className="max-w-[40%] rounded-xl md:block hidden"
          src={unleash_img}
          alt=""
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-[#233966] font-bold md:text-3xl text-2xl">
            Efficiency
          </h2>
          <p className="text-[#6493BD] md:text-xl text-lg">
            Streamlines repetitive tasks and automates processes, enhancing
            overall operational efficiency.
          </p>
          <h2 className="text-[#233966] font-bold md:text-3xl text-2xl">
            Data Analysis
          </h2>
          <p className="text-[#6493BD] md:text-xl text-lg">
            Analyzes vast datasets quickly, extracting valuable insights to
            inform decision-making.
          </p>
          <h2 className="text-[#233966] font-bold md:text-3xl text-2xl">
            Personalization
          </h2>
          <p className="text-[#6493BD] md:text-xl text-lg">
            Enables personalized experiences by tailoring recommendations and
            content based on individual preferences.
          </p>
          <h2 className="text-[#233966] font-bold md:text-3xl text-2xl">
            Accuracy
          </h2>
          <p className="text-[#6493BD] md:text-xl text-lg">
            Performs tasks with a high degree of accuracy, reducing errors
            associated with manual processes.
          </p>
        </div>
      </div>
      <button className="p-5 max-w-80  bg-[#E59C26] text-[#233966] md:text-base text-sm rounded-md font-semibold hover:bg-[#233966] hover:text-[#E59C26] duration-500">
        Click here to imagine the possibilities
      </button>
    </div>
  );
};

export default Unleash;
