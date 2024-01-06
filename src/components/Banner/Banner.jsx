import Typewriter from "typewriter-effect";
import img_1 from '../../../public/images/Image1.png'
const Banner = () => {
  return (
    <div className="lg:bg-yellow-600 rounded-lg my-10 lg:my-36">
      <div className="flex flex-col lg:flex-row items-center justify-between  gap-8">
        <div className="flex-1 space-y-4">
          <div className="font-bold text-3xl text-white pl-2 lg:pl-16">
            <Typewriter
              options={{
                strings: ["Deliver Food To Your Door Step"],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
            
          </div>
          <h1 className="text-white pl-2 lg:pl-16">
            Authentic Food, Quic Service, Fast Delivery
          </h1>
        </div>

        <div className=" bg-orange-500 lg:bg-yellow-600 rounded-lg">
          <img className="w-full" src={img_1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
