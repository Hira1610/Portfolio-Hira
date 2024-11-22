import React from "react";
import { FaFacebookF,FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-60 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">BAHATI BASESELA</h3>
        <p className="text-lg font-normal text-gray-400">
          Senior Software Engineer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Experienced software developer with over 8 years of hands-on
          experience in developing scalable web applications and cloud-native
          solutions.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+1 3462790804 </span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">bahati.srengineer@outlook.com</span>
        </p>
      </div>
    </div>
  );
};

export default ContactLeft;
