import React from 'react';
import SocialButtonGroup from './Socials/Socials'
import Tldr from '../tldr/Tldr.js'

const Home = () => {
  
  return (
    <div className='home-page'>
            
      <SocialButtonGroup label='home'></SocialButtonGroup>
      <Tldr /> 

    </div>
  );
}

export default Home;