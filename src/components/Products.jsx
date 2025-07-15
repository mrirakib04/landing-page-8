import tomato from "./../assets/img/tomato.png";
import onion from "./../assets/img/onion.png";
import potato from "./../assets/img/potato.png";
import veg from "./../assets/img/vegetable-busket.png";
import { FaStar } from "react-icons/fa";

const Products = () => {
  return (
    <div
      id="Products"
      className="w-full md:px-10 px-5 md:py-20 py-10 flex flex-col gap-5 bg-[#FFF9F4]"
    >
      <h2 className="md:text-3xl text-2xl font-semibold text-green-700">
        Popular Products
      </h2>
      <div className="w-full grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-3">
        <div className="col-span-2 lg:row-span-3 sm:row-span-3 p-5 bg-gradient-to-br from-[#53DB3A] via-[#53DB3A] to-white rounded-xl shadow-lg lg:h-80 md:h-[360px] h-[340px]">
          <h4 className="md:text-2xl text-xl font-medium text-white">
            30% Off
          </h4>
          <p className="text-black md:w-2/3 w-5/6 mt-5 font-medium">
            Discover a world of treats, foods, and essentials handpicks for
          </p>
          <div className="w-full flex items-start justify-between gap-2 relative">
            <button className=" mt-10 py-1 px-4 bg-white text-black hover:bg-black hover:text-white duration-300 rounded-md text-lg font-medium">
              Shop Now
            </button>
            <img
              className="sm:h-32 h-24 absolute sm:right-5 right-1 -bottom-16"
              src={veg}
              alt="veg"
            />
          </div>
        </div>
        <div className="p-3 col-span-1 bg-white rounded-xl shadow-lg flex items-center gap-1">
          <img
            className="md:max-h-16 max-h-10 h-full md:max-w-16 max-w-10 w-full object-cover sm:p-3 p-1 rounded-lg bg-[#FFF9F4]"
            src={tomato}
            alt="tomato"
          />
          <div className="flex flex-col items-start justify-between">
            <p className="flex items-center gap-1">
              <FaStar className="text-lg text-yellow-500"></FaStar>
              4.5
            </p>
            <h4 className="md:text-lg text-sm font-medium">Tomato/kg</h4>
            <p className="font-medium text-gray-700">$2</p>
          </div>
        </div>
        <div className="p-3 col-span-1 bg-white rounded-xl shadow-lg flex items-center gap-1">
          <img
            className="md:max-h-16 max-h-10 h-full md:max-w-16 max-w-10 w-full object-cover sm:p-3 p-1 rounded-lg bg-[#FFF9F4]"
            src={onion}
            alt="onion"
          />
          <div className="flex flex-col items-start justify-between">
            <p className="flex items-center gap-1">
              <FaStar className="text-lg text-yellow-500"></FaStar>
              4.5
            </p>
            <h4 className="md:text-lg text-sm font-medium">Onion/kg</h4>
            <p className="font-medium text-gray-700">$3</p>
          </div>
        </div>
        <div className="p-3 col-span-1 bg-white rounded-xl shadow-lg flex items-center gap-1">
          <img
            className="md:max-h-16 max-h-10 h-full md:max-w-16 max-w-10 w-full object-cover sm:p-3 p-1 rounded-lg bg-[#FFF9F4]"
            src={potato}
            alt="potato"
          />
          <div className="flex flex-col items-start justify-between">
            <p className="flex items-center gap-1">
              <FaStar className="text-lg text-yellow-500"></FaStar>
              4.5
            </p>
            <h4 className="md:text-lg text-sm font-medium">Potato/kg</h4>
            <p className="font-medium text-gray-700">$1.5</p>
          </div>
        </div>
        <div className="p-3 col-span-1 bg-white rounded-xl shadow-lg flex items-center gap-1">
          <img
            className="md:max-h-16 max-h-10 h-full md:max-w-16 max-w-10 w-full object-cover sm:p-3 p-1 rounded-lg bg-[#FFF9F4]"
            src={potato}
            alt="potato"
          />
          <div className="flex flex-col items-start justify-between">
            <p className="flex items-center gap-1">
              <FaStar className="text-lg text-yellow-500"></FaStar>
              4.5
            </p>
            <h4 className="md:text-lg text-sm font-medium">Potato/kg</h4>
            <p className="font-medium text-gray-700">$1.5</p>
          </div>
        </div>
        <div className="p-3 col-span-1 bg-white rounded-xl shadow-lg flex items-center gap-1">
          <img
            className="md:max-h-16 max-h-10 h-full md:max-w-16 max-w-10 w-full object-cover sm:p-3 p-1 rounded-lg bg-[#FFF9F4]"
            src={onion}
            alt="onion"
          />
          <div className="flex flex-col items-start justify-between">
            <p className="flex items-center gap-1">
              <FaStar className="text-lg text-yellow-500"></FaStar>
              4.5
            </p>
            <h4 className="md:text-lg text-sm font-medium">Onion/kg</h4>
            <p className="font-medium text-gray-700">$3</p>
          </div>
        </div>
        <div className="p-3 col-span-1 bg-white rounded-xl shadow-lg flex items-center gap-1">
          <img
            className="md:max-h-16 max-h-10 h-full md:max-w-16 max-w-10 w-full object-cover sm:p-3 p-1 rounded-lg bg-[#FFF9F4]"
            src={tomato}
            alt="tomato"
          />
          <div className="flex flex-col items-start justify-between">
            <p className="flex items-center gap-1">
              <FaStar className="text-lg text-yellow-500"></FaStar>
              4.5
            </p>
            <h4 className="md:text-lg text-sm font-medium">Tomato/kg</h4>
            <p className="font-medium text-gray-700">$2</p>
          </div>
        </div>
        <div className="p-3 lg:col-span-1 bg-white rounded-xl shadow-lg flex items-center gap-1">
          <img
            className="md:max-h-16 max-h-10 h-full md:max-w-16 max-w-10 w-full object-cover sm:p-3 p-1 rounded-lg bg-[#FFF9F4]"
            src={onion}
            alt="onion"
          />
          <div className="flex flex-col items-start justify-between">
            <p className="flex items-center gap-1">
              <FaStar className="text-lg text-yellow-500"></FaStar>
              4.5
            </p>
            <h4 className="md:text-lg text-sm font-medium">Onion/kg</h4>
            <p className="font-medium text-gray-700">$3</p>
          </div>
        </div>
        <div className="p-3 lg:col-span-1 bg-white rounded-xl shadow-lg flex items-center gap-1">
          <img
            className="md:max-h-16 max-h-10 h-full md:max-w-16 max-w-10 w-full object-cover sm:p-3 p-1 rounded-lg bg-[#FFF9F4]"
            src={tomato}
            alt="tomato"
          />
          <div className="flex flex-col items-start justify-between">
            <p className="flex items-center gap-1">
              <FaStar className="text-lg text-yellow-500"></FaStar>
              4.5
            </p>
            <h4 className="md:text-lg text-sm font-medium">Tomato/kg</h4>
            <p className="font-medium text-gray-700">$2</p>
          </div>
        </div>
        <div className="lg:flex hidden p-3 lg:col-span-1 bg-white rounded-xl shadow-lg items-center gap-1">
          <img
            className="md:max-h-16 max-h-10 h-full md:max-w-16 max-w-10 w-full object-cover sm:p-3 p-1 rounded-lg bg-[#FFF9F4]"
            src={potato}
            alt="potato"
          />
          <div className="flex flex-col items-start justify-between">
            <p className="flex items-center gap-1">
              <FaStar className="text-lg text-yellow-500"></FaStar>
              4.5
            </p>
            <h4 className="md:text-lg text-sm font-medium">Potato</h4>
            <p className="font-medium text-gray-700">$1.5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
