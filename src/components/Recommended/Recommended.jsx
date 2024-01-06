import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Recommended = () => {
      const [startIndex, setStartIndex] = useState(0);
      const [slider, setSlider] = useState(null);
      const [items, setItems] = useState([]);


      useEffect(() => {
        fetch(
          "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
        )
          .then((res) => res.json())
          .then((data) => setItems(data.Items));
      }, []);



      const recommendedItems = items.filter(item => item.IsRecommended === true);

    

      const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 768, // Small devices
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      };

      const handlePrev = () => {
        if (slider) {
          slider.slickPrev();
        }
        setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      };

      const handleNext = () => {
        if (slider) {
          slider.slickNext();
        }
        setStartIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 5));
      };
  return (
    <div className="mt-10 mb-24">
      <div className="flex justify-between mb-4">
        <h1 className="font-bold">Recommended</h1>
        <div className="flex gap-1">
          <h1 className="text-orange-500">AddMore</h1>

          {startIndex === 0 ? (
            <button
              className="opacity-50"
              onClick={handlePrev}
              disabled={startIndex === 0}
            >
              <IoIosArrowBack />
            </button>
          ) : (
            <button onClick={handlePrev} disabled={startIndex === 0}>
              <IoIosArrowBack />
            </button>
          )}

          {startIndex >= recommendedItems.length - 5 ? (
            <button
              className="opacity-50"
              onClick={handleNext}
              disabled={startIndex >= recommendedItems.length - 5}
            >
              <IoIosArrowForward />
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={startIndex >= recommendedItems.length - 5}
            >
              <IoIosArrowForward />
            </button>
          )}
        </div>
      </div>
      <div>
        <Slider
          {...settings}
          ref={(slider) => setSlider(slider)}
          style={{ margin: "0 -5px" }}
        >
          {recommendedItems.map((card) => (
            <div key={card.Id}>
              {card.IsRecommended && (
                <div>
                  <img
                    className="w-[200px] h-[250px]  rounded-lg"
                    src={card.ImageUrl}
                    alt=""
                  />
                  <h1 className="text-center">{card.Name}</h1>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Recommended;
