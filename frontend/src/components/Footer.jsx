import React from "react";
import "../Css/Footer.css";

export const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="main-footer">
          <div className="logoinfo" data-aos="fade-up">
            <h2>Website</h2>
            <h3>By Suraj Yadav</h3>

            <div className="contact-details">
              <h1>Contact Us</h1>
              <li>
                <div className="fa fa-phone"></div>
                <a href="tel:+919598226214">+91 9598226214</a>
              </li>
              <li>
                <div className="fa fa-envelope"></div>
                <a href="mailto:yourmail@gmail.com">surajybtg@gmail.com</a>
              </li>
            </div>
          </div>

          <div className="info" data-aos="fade-up">
            <h1>Social Media</h1>
            <div className="sociallogos">
              <div className="logobox">
                <i class="fa fa-linkedin-square"></i>
                <i class="fa fa-instagram"></i>
                <i class="fa fa-facebook"></i>
                <i class="fa fa-youtube-play"></i>
              </div>
            </div>
          </div>
        </div>

        <footer>© Your Copyright 2023 All Rights Reserved</footer>
      </section>
    </>
  );
};
