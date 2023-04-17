import React, { useContext } from "react";
import { Login } from "../components/Login";
import { ContactData } from "../components/ContactData";
import { AuthContext } from "../context/AuthContext";

export const Admin = () => {
  const { admin } = useContext(AuthContext);
  if (!admin) {
    return (
      <>
        <Login />
      </>
    );
  }
  return (
    <>
      <ContactData />
    </>
  );
};
