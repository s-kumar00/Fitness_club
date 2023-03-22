import React from "react";
import "./Social.css";
import Resume from '../../images/Resume.pdf'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Social = () => {
  return (
    <div className="social">
      <div>
        <a href="https://www.linkedin.com/in/sikandar-kumar-b1a961223/" target="blank">
          Linkdin
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/s-kumar00" target="blank">
          GitHub
          <FaGithub />
        </a>
      </div>
      <div>
        <a href="mailto:sikandarsahilkumar@gmail.com">
          EMail
          <HiOutlineMail />
        </a>
      </div>
      <div>
        <a href={Resume} download target="blank">
          Resume
          <BsFillPersonLinesFill />
        </a>
      </div>
    </div>
  );
};

export default Social;
