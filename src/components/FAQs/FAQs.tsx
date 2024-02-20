import faq_img from "../../assets/img/faq.jpg";
import FAQsDropdown from "./FAQsDropdown";

const FAQs = () => {
  return (
    <div className="faqs md:px-14 px-7 py-5 flex flex-col gap-10">
      <h1 className="text-[#233966] md:text-4xl text-3xl font-bold">
        Your conversions will multiply as our AI finetunes the art of turning
        prospects into loyal customers.
      </h1>
      <div className="flex items-start justify-center gap-10">
        <img
          className="max-w-[40%] rounded-xl md:block hidden"
          src={faq_img}
          alt=""
        />
        <div className="flex flex-col gap-5">
          <p className="text-[#233966] font-bold underline text-3xl">FAQS</p>
          <FAQsDropdown />
        </div>
      </div>
      <button className="p-5 bg-[#E59C26] text-[#233966] md:text-base text-sm rounded-md font-semibold hover:bg-[#233966] hover:text-[#E59C26] duration-500">
        Click here to fill FREE creditor's report form
      </button>
    </div>
  );
};

export default FAQs;
