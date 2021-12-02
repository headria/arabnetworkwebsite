import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaYoutubeSquare,
  FaTwitter,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";
import { SocialList } from "./Footer-styled";

const SocialMedia = () => {
  return (
    <SocialList>
      <div className="WrapperIcon">
        <li>
          <a href="#">
            <FaYoutubeSquare />
          </a>
        </li>
        <li>
          <a href="#">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="#">
            <FaTwitter />
          </a>
        </li>
      </div>
      <div className="WrapperIcon mt-2">
        <li>
          <a href="#">
            <FaTelegram />
          </a>
        </li>
        <li>
          <a href="#">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagram />
          </a>
        </li>
      </div>
    </SocialList>
  );
};

export default SocialMedia;
