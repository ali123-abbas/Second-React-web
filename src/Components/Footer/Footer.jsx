import React, {useEffect} from "react";
import "../../Components/Footer/footer.css";
import video2 from "../../assets/video2.mp4";
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
   }, []  )


  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video2} type="video/mp4" autoPlay muted loop>
        </video>
      </div>

      <div className='secContent container'>
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
            <button className="btn flex" type="submit">
              {" "}
              SEND <FiSend className="icons" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div data-aos="fade-up" className="footerIntro flex">
            <div className="logoDiv">
              <a href="" className="logo flex">
                <MdTravelExplore className="icons" /> Travel
              </a>
            </div>

            <div className="footerParagraph">
             <p> Tokyo, Japan’s busy capital, mixes the ultramodern and the
              traditional, from neon-lit skyscrapers to historic temples. The
              opulent Meiji Shinto Shrine is known for its towering gate and
              surrounding woods. The Imperial Palace sits amid large public
              gardens. The city's many museums offer exhibits ranging from
              classical art (in the Tokyo National Museum) to a reconstructed
              kabuki theater (in the Edo-Tokyo Museum). </p>
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icons" />
              <AiFillYoutube className="icons" />
              <FaTripadvisor className="icons" />
              <AiFillInstagram className="icons" />
            </div>
          </div>

          <div data-aos="fade-up" className="footerLinks grid">
            {/* GROUP ONE */}
            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icons" />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icons" />
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icons" />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icons" />
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icons" />
                Payment
              </li>
            </div>

             {/* GROUP 2 */}
             <div className="linkGroup">
              <span className="groupTitle">Partners</span>

              <li className="footerList flex">
                <FiChevronRight className="icons" />
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icons" />
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icons" />
                HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icons" />
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icons" />
                TripAdvisor
              </li>
            </div>

             {/* GROUP 3 */}
             <div className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <FiChevronRight className="icons" />
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icons" />
                California
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icons" />
                Indonesia
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icons" />
                Europe
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icons" />
                Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv">
             <small>BEST TRAVEL AND TOURS SITE </small>
             <small>COPYRIGHTS RESERVED - ALI ABBAS 2023</small>
            </div>   

        </div>
      </div>
    </section>
  );
};

export default Footer;
