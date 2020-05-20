import React from 'react';
import ReactTooltip from "react-tooltip";
import willabjsmall from '../../components/Menu/will-abj-small.jpg'
import { StyledImg } from '../../components/Menu/Menu.styled'
import "./About.css"


const About = () => {
   return (
      <div className='about-page'>
         <h1 style={{ marginTop: '100px' }}>About Me</h1>
         <div className='about-into'>
            <StyledImg id='menu-pic' src={willabjsmall} alt='profile-pic'></StyledImg>
            <p className='into-text'>By now you know my name is Will Morgan. If you came from the TL;DR page then you may have read
             <a target='_blank' href='http://pdxcrimemap.net' rel="noopener noreferrer" data-tip data-for='tldr-talk'> this.
                                 </a></p>
            <ReactTooltip id='tldr-talk' place='bottom' color='dodgerblue' effect='solid'>
               <p style={{ maxWidth: "300px" }}>A multilingual international entrepeneur,
               economist, and programmer with a natural talent
               for efficiently developing stable solutions to problems that
               arise in highly complex systems. Ability to be a team
               player or a team leader in order to produce deliverables on time.
               Highly analytical with a proven track record of analyzing
               large amounts data to guide business decisions. Data driven,
                              deadline oriented, and always curious.</p>
            </ReactTooltip>
            <p>Obviously as a fellow human, we are all so much more than the
            tweet at the top of our resumes. This entire site is dedicated to
                            demonstrating that point.</p>
            <div>
            </div>
            <article>
               <h5>Briefly</h5>
               <p>I went to highschool in the Pacific Northwest, traveling around the world during the summer.
               I studied Economics and Mathematics in San Diego, waiting tables and working as
               a teller to pay for my education. In fact I'm still paying for my education.
               I moved to Portland, Oregon in 2011 and got a job investigating money laundering at Wells Fargo.
               In 2012 I started working for OnPoint Community Credit Union, my role at OnPoint
               revolved around building processes to improve accesability to our digital products.
               I mean I helped people over the phone solve thier problems with our systems.
               Eventually I went on to the managed the team charged with troubleshooting
                                    the newly deployed online banking system.</p>
            </article>
         </div>
         <div>
            <h5>Then I moved to Africa</h5>
            <p>I spent most of my late 20s in the Ivory Coast. Trading cocoa (physical and paper) and cashews.
            Over the course of two years, I travelled all over India and Vietnam learning how the two countries
            processed raw cashew nuts. I traveled to Dubai, Singapore, and China to meet with suppliers, engage with
            trading partners and sign large contracts with clients. I imported the machinery necessary necessary to
            process 10,000 tons of raw cashews per year to the Ivory Coast, converted an old warehouse into a BRC
            certified food processing facility. By the time I had left Abidjan, I had shipped cacao to China,
            raw cashews to Vietnam and India, and was exporting cashew kernels to the USA. If you buy
            Kirkland Signature cashews, theres a good chance some of it came from this processing facility!</p>
         </div>
         <div>
            <h5>Then I moved back to Portland</h5>
            <p>For the last two years, I've been learning to code and driving Uber/Lyft to pay for it, I also still
            consult for cashew factories around the world.
                                 </p>
         </div>

         <p>About US page body content</p>
      </div>
   );
}

export default About;