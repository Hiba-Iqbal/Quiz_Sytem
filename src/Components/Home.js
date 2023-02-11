import React from "react";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Nav from "./Nav/Nav";
import Part from "./Part/Part";

const Home = () => {
  return (
    <div>
      <Nav />
      <Part />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
