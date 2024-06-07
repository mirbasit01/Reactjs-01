import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './AirdropCarousel.css'; // Adjust the path as necessary

const AirdropCarousel = () => {
  return (
   
    <div className="carousel-container" style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
  <Carousel 
    showThumbs={false} 
    infiniteLoop 
    autoPlay 
    interval={1000} 
    transitionTime={500} 
    axis="horizontal"
    emulateTouch
    swipeable={false}
    showStatus={false}
    showArrows={false}
    showIndicators={false}
    className="carousel"
  >
    <div className="carousel-item">
      <img src="https://airdropalert.com/wp-content/uploads/2024/03/Rixor-airdrop.png" alt="Sample 1" className="carousel-image"/>
      {/* <h4>Image Title 1</h4> */}
      <p>This is a description for image 1.</p>
    </div>
    <div className="carousel-item">
      <img src="https://airdropalert.com/wp-content/uploads/2024/05/InterCellar-Airdrop.gif" alt="Sample 2" className="carousel-image"/>
      {/* <h4>Image Title 2</h4> */}
      <p>This is a description for image 2.</p>
    </div>
    <div className="carousel-item">
      <img src="https://airdropalert.com/wp-content/uploads/2024/05/Retreeb-Airdrop.jpeg" alt="Sample 3" className="carousel-image"/>
      {/* <h4>Image Title 3</h4> */}
      <p>This is a description for image 3.</p>
    </div>
    <div className="carousel-item">
      <img src="https://airdropalert.com/wp-content/uploads/2024/03/1690090677127698-1.png" alt="Sample 4" className="carousel-image"/>
      {/* <h4>Image Title 4</h4> */}
      <p>This is a description for image 4.</p>
    </div>
    
    {/* Add more items as needed */}
  </Carousel>
</div>

  );
};

export default AirdropCarousel;
