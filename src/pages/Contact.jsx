import React from "react";
import NavBar from "../component/NavBar";
import Form2 from "../component/Form2";
import { DataContext } from "../context/DataContext";

const Contact = () => {
  const text = "Contact Button";

  return (
    <DataContext.Provider value={text}>
      <div className="flex flex-col items-center">
        <NavBar text={text} />
        <p>Contact page</p>
        <Form2 />
      </div>
    </DataContext.Provider>
  );
};

export default Contact;
