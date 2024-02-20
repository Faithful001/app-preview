import StoriesCarousel from "./StoriesCarousel";

const Stories = () => {
  return (
    <div className="stories md:px-14 px-7 py-5 flex gap-10 flex-col items-center justify-center">
      <h1 className="text-[#233966] text-4xl font-bold">
        Client Success Stories
      </h1>
      <div className="">
        <StoriesCarousel />
      </div>

      <button className="p-5 bg-[#E59C26] text-[#233966] md:text-base text-sm rounded-md font-semibold hover:bg-[#233966] hover:text-[#E59C26] duration-500">
        Click here to fill FREE creditor's report form
      </button>
    </div>
  );
};

export default Stories;
