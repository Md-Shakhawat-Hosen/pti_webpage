import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";


const Recommended = () => {
      const [startIndex, setStartIndex] = useState(0);
      const [slider, setSlider] = useState(null);
        const [recommended, setRecommended] = useState([]);


 

    useEffect(() => {
      fetch(
        "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
      )
        .then((res) => res.json())
        .then((data) => setRecommended(data.Items));
    }, []);

    const [recodata, setRecoData] = useState([]);

    useEffect(()=>{

      const recommendedItems = recommended.filter(
        (item) => item.IsRecommended === true

        
      );

      setRecoData([...recommendedItems]);


    },[recommended])


       
             

  // console.log(recodata)

  
  
  



       



      





      const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

      const randomId = uuidv4();

      const api_key = import.meta.env.VITE_image_api;
      const image_hosting_api = `https://api.imgbb.com/1/upload?key=${api_key}`;

      const onSubmit = async (data) => {
        // console.log(data);

        // console.log(selectedOption)
        // console.log(selectedOptionPublisher)

        const imageFile = { image: data.image[0] };
        const res = await axios.post(image_hosting_api, imageFile, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (res.data.success) {
          const formData = {
            Id: randomId,
            Name: data.name,
            ImageUrl: res.data.data.display_url,
            Price: data.price,
            IsRecommended: true,
          };

         

          setRecoData([...recodata, formData]);
        }
        toast.success("Successfully added!");
      };

    

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
        setStartIndex((prevIndex) => Math.min(prevIndex + 1, recommended.length - 5));
      };
  return (
    <div className="mt-10 mb-24">
      <div>
        <Toaster />
      </div>
      <div className="flex justify-between mb-4">
        <h1 className="font-bold">Recommended</h1>
        <div className="flex gap-1">
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="text-orange-500 cursor-pointer"
          >
            AddMore
          </button>

          {/* You can open the modal using document.getElementById('ID').showModal() method */}

          <dialog id="my_modal_3" className="modal rounded-lg">
            <div className="modal-box bg-orange-200 rounded-lg p-11">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col lg:flex-row gap-3">
                    <div className="w-full">
                      <label className="form-control w-full ">
                        <div className="label">
                          <span className="label-text">Name</span>
                        </div>
                        <input
                          type="text"
                          placeholder="Enter Your Item Name"
                          {...register("name", { required: true })}
                          aria-invalid={errors.name ? "true" : "false"}
                          className="input px-2 py-3 w-full"
                        />
                        {errors.name?.type === "required" && (
                          <p className="text-red-500" role="alert">
                            Item name is required
                          </p>
                        )}
                      </label>
                    </div>
                    <div className="w-full">
                      <label className="form-control w-full ">
                        <div className="label">
                          <span className="label-text">Choose Image File</span>
                        </div>
                        <input
                          type="file"
                          {...register("image", { required: true })}
                          aria-invalid={errors.image ? "true" : "false"}
                          className="file-input px-2 py-3 w-full"
                        />
                        {errors.image?.type === "required" && (
                          <p className="text-red-500" role="alert">
                            Item Image is required
                          </p>
                        )}
                      </label>
                    </div>
                  </div>

                  <div className="w-full">
                    <label className="form-control w-full ">
                      <div className="label">
                        <span className="label-text">Price</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter Your Item Price"
                        {...register("price", { required: true })}
                        aria-invalid={errors.price ? "true" : "false"}
                        className="input py-3 px-2 w-full"
                      />
                      {errors.price?.type === "required" && (
                        <p className="text-red-500" role="alert">
                          Item price is required
                        </p>
                      )}
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="bg-white py-3 text-orange-500 font-bold w-full mt-10"
                  >
                    Add Item
                  </button>
                </form>
              </div>
            </div>
          </dialog>

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

          {startIndex >= recodata.length - 5 ? (
            <button
              className="opacity-50"
              onClick={handleNext}
              disabled={startIndex >= recodata.length - 5}
            >
              <IoIosArrowForward />
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={startIndex >= recodata.length - 5}
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
          {recodata.map((card) => (
            <div key={card.Id}>
              <div>
                <img
                  className="w-[200px] h-[250px]  rounded-lg"
                  src={card.ImageUrl}
                  alt=""
                />
                <h1 className="text-center">{card.Name}</h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Recommended;
