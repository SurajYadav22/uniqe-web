import React, { useState, useEffect } from "react";

export const About = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div style={{ marginTop: "6%" }}>
      <h1>About Us</h1>
      <p>
        {data.map((el) => (
          <li key={el.title}>{el.title}</li>
        ))}
      </p>
    </div>
  );
};
