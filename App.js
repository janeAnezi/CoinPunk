import React from 'react';
import { Component } from 'react';
import './App.css';
import Navbar from "../src/conponents/Navbar";
import Section from "../src/conponents/section";
import Reviews from "../src/conponents/Reviews";
import Footer from "../src/conponents/Footer";



class App extends Component{
  render(){
    return (
      <div>
        <Navbar />
        <Section />
        <Reviews />
        <Footer />
      </div>
    );
  }
}

export default App;
