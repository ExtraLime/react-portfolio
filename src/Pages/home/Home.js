import React from 'react';
import Connect from './Connect'
import SocialButtonGroup from './Socials/Socials'

const Home = () => {
  
  return (
    <div className='home-page'>
      <SocialButtonGroup label='home'></SocialButtonGroup> 
      <div className='home-content' style={{ textAlign: 'center',fontFamily: 'Bitter' }}>      
      <h1>Welcome</h1>
      <p>I'm Will Morgan, and this is my website.</p>
      <p>Click on the Link to get started!</p>
      </div>
      <Connect />
    </div>
  );
}

export default Home;