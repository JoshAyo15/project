import React from "react";
import NavBar from "../component/NavBar";
import { DataContext } from "../context/DataContext";

const About = () => {
  const text = "About Button";

  return (
    <DataContext.Provider value={text}>
      <div className="flex flex-col items-center">
        <NavBar text={text} />
        <p>About page</p>
      </div>
    </DataContext.Provider>
  );
};

export default About;
