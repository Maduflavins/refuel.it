import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>PMS(Petrol)</div>
          <span className='subtitle'>Buy NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Paraffin(Kerosene)</div>
          <span className='subtitle'>Buy Now</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Diesel</div>
          <span className='subtitle'>Buy NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>LPG(Cooking Gas)</div>
          <span className='subtitle'>Buy NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Accessories</div>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;