import "./App.css";
import { useState } from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Main from "./Projects/Main";
import Bottom from "./Bottom/Bottom";
import Footer from "./Bottom/Footer";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="body">
        <Hero></Hero>
        <Main></Main>
        <Bottom></Bottom>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
