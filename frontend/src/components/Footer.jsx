import React from "react";
import "../Css/Footer.css";

export const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="main-footer">
          <div className="logoinfo" data-aos="fade-up">
            <h2>Website</h2>
            <p>By Suraj</p>

            <div className="contact-details">
              <h1>Contact Us</h1>
              <li>
                <div className="fa fa-phone"></div>
                <a href="tel:+919326048690">+91 1234567890</a>
              </li>
              <li>
                <div className="fa fa-envelope"></div>
                <a href="mailto:yourmail@gmail.com">suraj@gmail.com</a>
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
