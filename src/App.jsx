import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Influencers from "./components/Influencers";
import EditorsPick from "./components/EditorsPick/EditorsPick";
import Subscribe from "./components/Subscribe";
import Health from "./components/Health";
import MoreArticle from "./components/MoreArticle"



function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <EditorsPick />
      <Influencers />
      <MoreArticle />
      <Health />
      <Subscribe />
    </div>
  );
}

export default App;
