import dart_img from "../../assets/img/dart.jpg";

const Ads = () => {
  return (
    <div className="ads md:px-14 px-7 py-5 flex items-center justify-center gap-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-[#233966] md:text-4xl text-3xl font-bold">
          Don't gamble on ads; AI-analytics will guide you!
        </h1>
        <p className="md:text-2xl text-xl text-[#233966]">
          Reach out to us for your first order
        </p>
        {/* form */}
        <form className="flex flex-col items-center justify-center gap-3 p-7 border border-[#CBCBCB] rounded-xl bg-[#EEEEEE]">
          <input
            className="w-full p-3 border border-[#CBCBCB] bg-white rounded-md"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="w-full p-3 border border-[#CBCBCB] bg-white rounded-md"
            type="text"
            placeholder="Email Address"
          />
          <button className="bg-[#4E56FF] text-white w-full p-3 border border-[#CBCBCB] rounded-md">
            Submit
          </button>
        </form>
      </div>
      <img
        className="max-w-[50%] rounded-xl md:block hidden"
        src={dart_img}
        alt=""
      />
    </div>
  );
};

export default Ads;
