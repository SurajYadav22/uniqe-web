import React, { useContext } from "react";
import "../Css/Login.css";
import { AuthContext } from "../context/AuthContext";

const loginData = {
  email: "",
  password: "",
};
export const Login = () => {
  const { setAdmin } = useContext(AuthContext);

  const emailChange = (e) => {
    let { value } = e.target;
    loginData.email = value;
  };
  const passwordChange = (e) => {
    let { value } = e.target;
    loginData.password = value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      loginData.email === "admin@gmail.com" &&
      loginData.password === "123456"
    ) {
      setAdmin(true);
    } else {
      alert("Wrong Credantial");
    }
  };
  return (
    <div>
      <form action="" className="formData" onSubmit={handleSubmit}>
        <div
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: "bolder",
            marginBottom: "15px",
          }}
        >
          ADMIN LOGIN
        </div>
        <label htmlFor="email">Email</label>
        <input type="email" name="" id="email" onChange={emailChange} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name=""
          id="password"
          onChange={passwordChange}
        />
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
