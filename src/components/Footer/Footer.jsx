
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

import footer_img from '../../../public/images/Image2.png'

const Footer = () => {
    return (
      <div className="bg-[#f99f1c]">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex   justify-between">
            <div className="flex-1 lg:pl-10">
              <div className="relative w-full lg:w-[500px] mt-16 text-center">
                <input
                  placeholder="Enter Your Email"
                  className="px-3 py-3 w-full lg:w-[500px] rounded-xl"
                  type="search"
                  name=""
                  id=""
                />
                <div className="absolute right-2 top-3 lg:top-2">
                  <div className="flex gap-1 items-center lg:bg-orange-600 text-orange-600 lg:text-white lg:py-1 lg:pl-8 pr-4 lg:pr-2  lg:rounded-xl font-bold">
                    <h1>Subscribe </h1>
                    <FaArrowRight />
                  </div>
                </div>
              </div>

              <div className="flex lg:items-end  lg:justify-between flex-col-reverse  lg:flex-row ">
                <div className="lg:mt-20 text-center lg:text-left">
                  <h1 className="font-bold text-xl mb-3 lg:mb-0">
                    pti<span className="text-orange-700">.</span>{" "}
                  </h1>
                  <h1 className="font-bold mb-16 lg:mb-0">
                    Copyright&copy;Tripp. All rights Reserved{" "}
                  </h1>
                </div>

                <div className="my-8 lg:my-0">
                  <div className="flex justify-center gap-2">
                    <div className="bg-orange-600 lg:bg-white rounded-full p-2">
                      <FaGoogle className="text-white lg:text-orange-600" />
                    </div>
                    <div className="bg-orange-600 lg:bg-white rounded-full p-2">
                      <FaTwitter className="text-white lg:text-orange-600" />
                    </div>

                    <div className="bg-orange-600 lg:bg-white rounded-full p-2">
                      <FaInstagram className="text-white lg:text-orange-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block lg:block lg:flex-1 pl-0 lg:pl-16">
              <img className="w-[300px]" src={footer_img} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;