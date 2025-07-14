import { useState } from "react";
import logo from "./../assets/img/logo-header.png";
import { FaCartArrowDown, FaList, FaSearch } from "react-icons/fa";
import grocery from "./../assets/img/hero-vegetables.png";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-b from-white via-white to-[#EFEBE3]">
      <nav className="w-full flex items-center justify-between md:px-10 px-5 py-5">
        <a className="flex items-center gap-1" href="./../../index.html">
          <img className="w-20" src={logo} alt="logo" />
        </a>
        <ul className="text-base font-medium text-black lg:flex hidden items-center gap-5">
          <li>
            <a className="hover:text-green-600 duration-300" href="#Products">
              Products
            </a>
          </li>
          <li>
            <a className="hover:text-green-600 duration-300" href="#Services">
              Services
            </a>
          </li>
          <li>
            <a className="hover:text-green-600 duration-300" href="#Contact">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="lg:flex hidden items-center gap-5">
          <button className="text-2xl hover:text-green-500 duration-300">
            <FaSearch></FaSearch>
          </button>
          <button className="text-2xl hover:text-green-500 duration-300">
            <FaCartArrowDown></FaCartArrowDown>
          </button>
          <button className="px-6 py-1 rounded-lg text-lg font-medium border border-green-300 hover:bg-black hover:text-white duration-300">
            Login
          </button>
          <button className="px-6 py-1 rounded-lg text-lg font-medium border border-green-300 bg-green-300 hover:bg-black hover:text-white duration-300">
            Sign Up
          </button>
        </div>
        <button
          onClick={toggleNav}
          className="relative lg:hidden block text-3xl "
        >
          <FaList></FaList>
        </button>
        {showNav && (
          <ul className="text-base bg-gray-100 rounded-md font-medium text-black lg:hidden flex flex-col items-start gap-3 absolute top-16 right-3 p-5 border-2">
            <div className="flex items-center gap-5">
              <button className="text-2xl">
                <FaSearch></FaSearch>
              </button>
              <button className="text-2xl">
                <FaCartArrowDown></FaCartArrowDown>
              </button>
            </div>
            <button className="px-6 py-1 rounded-lg text-lg font-medium border border-green-300 bg-green-300 hover:bg-black hover:text-white duration-300">
              Login
            </button>
            <li>
              <a href="#Products">Products</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#Contact">Contact Us</a>
            </li>
          </ul>
        )}
      </nav>
      <div className="w-full flex flex-col gap-3 items-center md:px-10 px-5 pt-5">
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-medium text-center max-w-2xl">
          Freshness
          <span className="text-green-500"> You Can</span> <br />
          <span className="text-green-500"> Count </span>
          On, Prices You&apos;ll Love!
        </h1>
        <p className="text-gray-700 max-w-lg text-center">
          Shop your daily essentials at unbeatable prices. From fresh produce to
          pantry staples, we&apos;ve got you covered every day!
        </p>
        <img
          className="lg:w-8/12 md:w-9/12 w-10/12"
          src={grocery}
          alt="grocery"
        />
      </div>
    </div>
  );
};

export default Header;
