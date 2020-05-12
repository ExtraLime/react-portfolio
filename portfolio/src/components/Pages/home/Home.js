import React, { useState,useEffect,createContext}  from 'react';
import SocialButtonGroup  from './Socials/Socials'
import Connect from './Connect'
export const ModalContext = createContext();

const Home = (defaultView) => {
    const [count, setCount] = useState(null)
    const [view,setView] = useState({view:defaultView})
    
    
    return (
       <div >
           <SocialButtonGroup label='home'></SocialButtonGroup>
          <h1>Welcome</h1>
           <p>I'm Will Morgan, and this is my website.</p>          
         <Connect view={view}/>
       </div>
    );
}
 
export default Home;