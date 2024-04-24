import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Influencers from "./components/Influencers";
import EditorsPick from "./components/EditorsPick/EditorsPick";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Influencers />
      <EditorsPick />
      
    </div>
  );
}

export default App;
