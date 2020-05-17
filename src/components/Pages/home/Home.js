import React from 'react';
import Connect from './Connect'

const Home = () => {
  
  return (
    <div className='home-page'>
      <div className='home-content'>
      <h1>^</h1>

      <h1>Welcome</h1>
      <p>I'm Will Morgan, and this is my website.</p>
      <p>Click on the Link to get started>></p>
      </div>
      <Connect className='connect'/>
    </div>
  );
}

export default Home;