import React, { useEffect, useState } from "react";
import "../Css/ContactData.css";
export const ContactData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch("https://unique-api.onrender.com/api/all/leads")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <table className="tableContainer" style={{ marginTop: "10%" }}>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>Message</th>
        </thead>
        {data?.data &&
          data?.data.map((el) => (
            <tbody>
              <td>{el.name}</td>
              <td>{el.email}</td>
              <td>{el.phone_number}</td>
              <td>{el.message}</td>
            </tbody>
          ))}
      </table>
    </div>
  );
};
