import React from "react";
import Home from "./Home";
import About from "./About";
import Members from "./Members";
import Accordion from "./Accordion";
import Text from "./Text";

const Main = () => {
  return (
    <>
      <Home />
      <Accordion />
      <Text/>
      <About />
      <Members /> 
    </>
  );
};

export default Main;
