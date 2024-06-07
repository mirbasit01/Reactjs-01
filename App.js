import React from 'react';
import Navbar from './Navbar';
import './App.css';
import AirdropHeader from './Component/AirdropHeader';
import AirdropCarousel from './Component/AirdropCarousel';
// import CardComponent from './Component/CardComponent';
import Box from './Component/box';
import LatestNews from './Component/LatestNews';
import TradeCrypto from './Component/TradeCrypto'; // Importing TradeCrypto component
import Footer from './Component/Footer'
function App() {
  return (
    <div className="App">
      <Navbar />
      <AirdropHeader/>
      
      <div className="carousel-container d-flex">
        <AirdropCarousel/>
        <AirdropCarousel/>
        <AirdropCarousel/>
        <AirdropCarousel/>
      </div>
      {/* <CardComponent/> */}
      <Box/>
      <LatestNews/>
      <TradeCrypto/> {/* Replacing ImageWithLink with TradeCrypto */}
      <Footer/>
    </div>
  );
}

export default App;
