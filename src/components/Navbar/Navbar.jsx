
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import Dropdown from "../Dropdown/Dropdown";


const Navbar = () => {
    
  return (
    <div className="flex items-center justify-between mt-8">
      <div>
        <h1 className="font-bold text-xl">pti.</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            placeholder="Search AudioBook"
            type="search"
            name=""
            className="py-2 pl-8 rounded-xl lg:w-[500px]"
            id=""
          />
          <div className="absolute pl-2 text-orange-700 top-3 left-0">
            <HiMiniMagnifyingGlass />
          </div>
        </div>
        <div>
            <Dropdown></Dropdown>
        </div>
      </div>
      <div className="hidden lg:inline">
        <div className=" bg-orange-700 text-white rounded-full p-2 ">
          <IoPersonOutline className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
