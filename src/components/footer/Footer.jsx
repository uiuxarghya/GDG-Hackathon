import Logo from '../../assets/images/logo.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer mt-24">
      <div className="footer-line w-[60%] h-[1px] ml-72 bg-purple-400"></div>
      <div className="footer-content flex flex-row">
        <div className="footer-image ml-36">
        <img src={Logo} alt='Not Found' className='w-[200px] mt-12'></img>
        </div>
        <div className="footer-links ml-80">
          <div className="footer-links-content mt-20 flex flex-col justify-center ">
            <div className="font-bold text-purple-700 text-2xl">Quick Links</div>
            <a
              href="/about"
              className="-ml-2 mt-6 px-2 text-sm font-medium text-white transition duration-75 ease-in hover:text-blue-500"
            >
              About Us
            </a>
            <a
              href="/teams"
              className="-ml-2 px-2 text-sm font-medium text-white transition duration-75 ease-in hover:text-blue-500"
            >
              Timeline
            </a>
            <a
              href="/events"
              className="-ml-2 px-2 text-sm font-medium text-white transition duration-75 ease-in hover:text-blue-500"
            >
              Tracks
            </a>
            <a
              href="/blogs"
              className="-ml-2 px-2 text-sm font-medium text-white transition duration-75 ease-in hover:text-blue-500"
            >
              Sponsors
            </a>
            <a
              href="/contact"
              className="-ml-2 px-2 text-sm font-medium text-white transition duration-75 ease-in hover:text-blue-500"
            >
              Prizes
            </a>
            <a
              href="/contact"
              className="-ml-2 px-2 text-sm font-medium text-white transition duration-75 ease-in hover:text-blue-500"
            >
              Judges 
            </a>
          </div>
        </div>
        <div className="footer-links ml-96">
          <div className="footer-links-content mt-20 flex flex-col justify-center">
            <div className="font-bold text-white text-2xl">Socials</div>
            <div className="-ml-2 mt-4 flex flex-row">
              <a
                href="/about"
                className="text-2xl px-2 font-medium text-purple-700 transition duration-75 ease-in hover:text-blue-500"
              >
                <FaXTwitter />
              </a>
              <a
                href="/teams"
                className="text-2xl px-2 font-medium text-purple-700 transition duration-75 ease-in hover:text-blue-500"
              >
                <FaGithub />
              </a>
              <a
                href="/events"
                className="text-2xl px-2 font-medium text-purple-700 transition duration-75 ease-in hover:text-blue-500"
              >
                <FaInstagram />
              </a>
              <a
                href="/blogs"
                className="text-2xl px-2 font-medium text-purple-700 transition duration-75 ease-in hover:text-blue-500"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-rights mb-6 mt-8">
        <p className=" text-center text-sm font-light text-gray-500">
          Made with <span className="text-red-600">❤</span> , Made for GDG On Campus TMSL Hackathon
        </p>
      </div>
    </div>
  );
}