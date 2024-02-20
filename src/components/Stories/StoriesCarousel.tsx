import { storiesData } from "../../data/storiesData";
import { storiesDataInterface } from "../../interfaces/data.interfaces";
import stars from "../../assets/img/stars.png";

const StoriesCarousel = () => {
  return (
    <div className="stories-carousel flex flex-wrap justify-between md:grid md:grid-cols-2 gap-10">
      {storiesData.map((data: storiesDataInterface, index: number) => (
        <div key={index} className="story-card">
          <img src={stars} alt="" />
          <p className="font-bold text-xl">"{data.title}"</p>
          <p className="text-xl">"{data.body}"</p>
          <p className="font-bold text-xl">{data.author}</p>
        </div>
      ))}
    </div>
  );
};

export default StoriesCarousel;
