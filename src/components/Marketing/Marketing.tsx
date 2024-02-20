import marketing_picture from "../../assets/img/marketing.jpg";

const Marketing = () => {
  return (
    <div className="marketing md:px-14 px-7 py-5 flex flex-col gap-10">
      <h1 className="md:text-4xl text-3xl font-semibold text-[#233966] ">
        Boost your marketing prowess with AI-driven strategies ensuring you're
        always ten steps ahead of the competition.
      </h1>
      <div className="flex items-start justify-center gap-10">
        <img
          className="max-w-[40%] rounded-xl md:block hidden"
          src={marketing_picture}
          alt=""
        />
        <div className="flex flex-col gap-5 md:text-2xl text-xl font-semibold text-[#6493BD]">
          <p>
            AI can analyze historical data to predict future trends, helping
            businesses make informed decisions.
          </p>
          <p>
            AI can analyze historical data to predict future trends, helping
            businesses make informed decisions.
          </p>
          <p>
            AI can analyze historical data to predict future trends, helping
            businesses make informed decisions.
          </p>
          <p>
            AI can analyze historical data to predict future trends, helping
            businesses make informed decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
