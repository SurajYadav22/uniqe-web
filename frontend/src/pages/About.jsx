import React, { useState } from "react";
import "../Css/Aboutus.css";
export const About = () => {
  return (
    <>
      <div style={{ marginTop: "3%" }}>
        <div className="about-section">
          <h1>ABOUT US</h1>
          <p>Some text about who we are and what we do.</p>
          <p>I'm full stack developer</p>
        </div>

        <h2 style={{ textAlign: "center" }}></h2>
        <div className="row">
          <div className="column" style={{ marginLeft: "35%" }}>
            <div className="card">
              <img
                src={
                  "https://media.licdn.com/dms/image/D4D35AQHbyR1c0KNTHA/profile-framedphoto-shrink_200_200/0/1676480372603?e=1682366400&v=beta&t=U7GTVkRVTcLvJdIqSGpdiRE3MeHWGbVaHcAfxbPYg98"
                }
                alt="Suraj"
                style={{ width: "100 %" }}
              />
              <div className="container">
                <h2>Suraj Yadav</h2>
                <p className="title">Software Engineer</p>
                <p>
                  {" "}
                  I have extensive experience in developing and deploying
                  websites.
                </p>
                <p>surajybtg@gmail.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
