import React from 'react';

import {StyledIntro} from './Tldr.styled'

const Tldr = (label) => {
    return (
       <div className={label.label}>
          <h1>TL;DR</h1>
           <StyledIntro>Thanks for checking out my site. This is effectively my resume. More details about each section are discoverable throughout the site</StyledIntro>
       </div>
    );
}
 
export default Tldr;