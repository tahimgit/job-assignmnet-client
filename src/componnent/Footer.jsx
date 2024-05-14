import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer
        className="footer  py-40 px-4 text-xl"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className=" lg:mx-auto  justify-between mb-20">
          <div className="grid grid-cols-2 gap-2 lg:flex justify-between lg:w-[1280px]">
            <div>
              <h1 className="text-4xl font-bold">
                TECH<br />{" "}
                <span className="text-orange-400">LINK</span>
              </h1>
            </div>

            <div>
              <h1 className="font-bold text-xl">Address</h1>
              <p className="flex gap-2 items-center">
                <FaLocationDot /> 28/B Green Road, Dhanmondi-Dhaka, Bangladesh
              </p>
            </div>

            <div>
              <h1 className="font-bold text-xl">Remote Jobs</h1>
              <p>Hybrid</p>
              <p>Onsite position</p>
            </div>

            <div>
              <h1 className="font-bold text-xl">Software Engineering</h1>
              <p>UI and UX</p>
              <p>Recruiter</p>
            </div>

            <div>
              <h1 className="font-bold text-xl">SELF More..</h1>
              <p>
                <a href="">About</a>
              </p>
              <p>
                <a href="">History</a>
              </p>
              <p>
                <a href="">Contact Us</a>
              </p>
            </div>
          </div>

          <div className="w-96 lg:w-[1280px] mx-auto col-span-">
            <div className="text-center lg:text-left flex flex-col">
              <h1 className="font-bold text-xl">Contact</h1>
              <p className="flex gap-2 items-center">
                <FaPhoneAlt /> +880161567890
              </p>
              <p className="flex gap-2 items-center">
                <MdEmail /> support@techlink.com
              </p>
              <div className="flex gap-4 mt-2  w-full justify-center lg:justify-start">
                <a href="facebook.com">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="facbook.com">
                  <FaXTwitter className="text-2xl" />
                </a>
                <a href="facbook.com">
                  <FaInstagramSquare className="text-2xl" />
                </a>
                <a href="facbook.com">
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
