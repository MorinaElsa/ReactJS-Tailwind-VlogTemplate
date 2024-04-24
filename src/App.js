import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Influencers from "./components/Influencers";
import EditorsPick from "./components/EditorsPick/EditorsPick";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Influencers />
      <EditorsPick />
      <Subscribe />
    </div>
  );
}

export default App;
