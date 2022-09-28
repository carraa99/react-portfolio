import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/charawaltaji/">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com/Carraa95362638">
          <TwitterIcon />
        </a>

        <a href="https://www.facebook.com/profile.php?id=100009424748446">
          <FacebookIcon />
        </a>

        <a href="https://linkedin.com/in/cara-walteji-6a700b197">
          <LinkedInIcon />
        </a>
      </div>{" "}
      <br />
      <p> &copy; 2022 CWH</p>
    </div>
  );
}

export default Footer;
