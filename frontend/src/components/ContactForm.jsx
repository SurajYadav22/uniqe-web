import React, { useState } from "react";

export const ContactForm = () => {
  const [contactData, setContectData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContectData({ ...contactData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://unique-api.onrender.com/api/leads", {
      method: "POST",
      body: JSON.stringify(contactData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setContectData({});
  };
  const { name, email, phone_number, message } = contactData;
  return (
    <>
      <form action="" className="formData" onSubmit={handleSubmit}>
        <div
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: "bolder",
          }}
        >
          Contact Us Form
        </div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <label htmlFor="number">Number</label>
        <input
          type="text"
          name="phone_number"
          id="number"
          value={phone_number}
          placeholder="Enter Phone Number"
          onChange={handleChange}
        />
        <label htmlFor="msg">Message</label>
        <textarea
          name="message"
          id="msg"
          value={message}
          placeholder="Enter Message"
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
