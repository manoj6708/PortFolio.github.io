import React from "react";
import socialIcons from "../../../assets/social-icons"; 
import "./style.css";

/**
 * @author
 * @function SocialConnect
 **/

const SocialConnect = (props) => {
  return (
    <div className="socialConnect" style={props.style}>
      <span className="textColor font-20">Follow me on: </span>
      <a className="socialLink" href="https://www.instagram.com/ig_manoj6708">
        <img src={socialIcons.instagram} alt="" />
      </a>
      <a className="socialLink" href="https://youtube.com/c/ManojDhiman6708">
        <img src={socialIcons.youtube} alt="" />
      </a>
      <a className="socialLink" href="https://www.linkedin.com/in/manoj-kumar-04465717a">
        <img src={socialIcons.linkedin} alt="" />
      </a>
    </div>
  );
};

export default SocialConnect;
