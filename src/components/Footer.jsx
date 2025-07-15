import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import footerLogo from "./../assets/img/logo-footer.png";

const Footer = () => {
  return (
    <div className="w-full md:px-10 px-5 md:py-20 py-10 flex items-end gap-5 justify-around flex-wrap">
      <div className="flex flex-col items-start gap-2 text-white">
        <div className="flex items-center gap-1">
          <img src={footerLogo} alt="footerLogo" />
        </div>
        <p className="text-base max-w-80 text-gray-300">
          Discover a world of treats, foods, and essentials handpicks for
        </p>
      </div>
      <ul className="flex flex-col items-start gap-3 font-medium">
        <li>
          <a
            className="hover:text-green-700 duration-300 text-white"
            href="#Products"
          >
            Products
          </a>
        </li>
        <li>
          <a
            className="hover:text-green-700 duration-300 text-white"
            href="#Services"
          >
            Services
          </a>
        </li>
        <li>
          <a
            className="hover:text-green-700 duration-300 text-white"
            href="#Contact"
          >
            Contact Us
          </a>
        </li>
      </ul>
      <div className="flex flex-col items-start gap-2">
        <h3 className="text-xl font-semibold text-white">Follow Us</h3>
        <div className="flex items-center gap-5 text-2xl">
          <a
            href=""
            className="hover:text-blue-800 duration-300 text-white"
            target="_blank"
          >
            <FaFacebook></FaFacebook>
          </a>
          <a
            href=""
            className="hover:text-pink-800 duration-300 text-white"
            target="_blank"
          >
            <FaInstagram></FaInstagram>
          </a>
          <a
            href=""
            className="hover:text-sky-800 duration-300 text-white"
            target="_blank"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a
            href=""
            className="hover:text-red-800 duration-300 text-white"
            target="_blank"
          >
            <FaYoutube></FaYoutube>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
