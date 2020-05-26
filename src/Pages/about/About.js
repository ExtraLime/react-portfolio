import React from 'react';
import { NavLink } from 'react-router-dom'
import ReactTooltip from "react-tooltip";
import willabjsmall from '../../components/Menu/will-abj-small.jpg'
import { StyledImg1 } from "../../components/Menu/Menu.styled"
import "./About.css"
import west from './west.png'
import openclose from '../../Pages/tldr/icons/openclose.svg'
import tennis from '../../Pages/tldr/icons/tennis.png'
import cacao from '../../Pages/tldr/icons/cacao.svg'
import cashew from '../../Pages/tldr/icons/cashew.png'


const About = () => {
   return (
      <div className='about-page'>
         <h1 style={{ marginTop: '70px', fontFamily: 'Bitter' }}>About Me</h1>
         <div className='about-intro'>
            <div className='about-line1'>
               <p className='into-text'>By now you know my name is Will Morgan. If you came from the TL;DR page then you may have read
             <a data-tip data-for='tldr-talk'> (this).
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
               <div><p>Just like any human, I am so much more than the
               tweet at the top of my resume. This entire site is dedicated to
                            demonstrating that point.</p></div></div>
            <div className='about-pic'><StyledImg1 id='menu-pic' src={willabjsmall} alt='profile-pic'></StyledImg1></div>
         </div>


         <h4>I am passionate about technology.</h4>
         <div className='about-container' id='tech-cont'>
            <div className='about-image-container' id='tech-pics'>
               <img height='120px' width='200px' src={openclose}></img>
            </div>
            <div className='about-text'>
               <p>I've been building and repairing computers since I was around 8 years. In early 2010 I started using linux as my primary OS.
               I love learning new languages, frameworks, and techniques and enjoy helping others understand through my
                        knowledge and experience. I get excited about efficiently designed algorithms.</p>
            </div>
         </div>

         <h4>I enjoy staying active.</h4>
         <div className='about-container' id='active-cont'>
            <div className='about-text'>
               <p>Tennis - USTA 4.0 rating, I typically play 8-10 hours per week.</p>
               <p>Biking - I typically bike about 70 miles per week.</p>
               <p>Hiking - The PNW is an amazing place to explore.</p>
            </div>

            <div className='about-image-container' id='active-pics'>
               <img height='30px' src={tennis}></img>
               <img src='https://svg-clipart.com/svg/cartoon/Oq5hQyS-bicycle-vector.svg' height='30px' alt='Bicycle form svg-clipart.com'></img>
               <img src='https://svg-clipart.com/svg/tree/FlGhgcb-evergeen-mountain-vector.svg' height='30px' alt='Mountain form svg-clipart.com'></img>
            </div>
         </div>

         <h4>I enjoy music</h4>
         <div className='about-container' id='music-cont'>
            <p>I play guitar, bass, and trunmpet.</p>
            <p>I produce electronic/hip-hop beats as a hobby. Check out my
                     <a target='_blank' rel='noopener noreferrer' href='https://soundcloud.com/willdox7'>     <img src='https://symbols.getvecta.com/stencil_65/23_soundcloud.7a21c6a8fd.svg' height='15px' alt='soundcloud-icon'></img>.</a>
            </p>
         </div>


         <h5>Early</h5>
         <div className='early'>
            <div className='west-pic'>
               <img width='100px' src={west} alt="West Coast States Outline Clipart California East Coast@pngkit.com"></img></div>
            <article className='text1' >
               <div >
                  <p>I went to highschool in the Pacific Northwest, traveling around the world during the summer.
                  I studied Economics and Mathematics in San Diego, waiting tables and working as
                  a teller to pay for my education. In fact I'm still paying for my education.
                  I moved to Portland, Oregon in 2011 and got a job investigating money laundering at Wells Fargo.
                  In 2012 I started working for OnPoint Community Credit Union, my role at OnPoint
                  revolved around building processes to improve accessibility to our digital products.
                  I mean I helped people over the phone solve their problems with our systems.
                  Eventually I went on to the managed the team charged with troubleshooting
                                    the newly deployed online banking system.</p>
               </div></article>
         </div>
         <h5>Then I moved to Africa</h5>
         <div className='africa'>
            <div className='africa-info'>
               <p>I spent most of my late 20s in the Ivory Coast. Trading cocoa (physical and paper) and cashews.
               Over the course of two years, I travelled all over India and Vietnam learning how the two countries
               processed raw cashew nuts. I traveled to Dubai, Singapore, and China to meet with suppliers, engage with
               trading partners and sign large contracts with clients. I imported the machinery necessary necessary to
               process 10,000 tons of raw cashews per year to the Ivory Coast, converted an old warehouse into a BRC
               certified food processing facility. By the time I had left Abidjan, I had shipped cacao to China,
               raw cashews to Vietnam and India, and was exporting cashew kernels to the USA. If you buy
            Kirkland Signature cashews, theres a good chance some of it came from this processing facility!</p>
            </div>
            <div className='africa-image-container'>
               <img width='100px' src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Coat_of_Arms_of_the_Ivory_Coast.svg' alt="CIV-wiki"></img>
               <img width='70px' style={{ marginTop: '30px' }} src='https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_map_of_Vietnam.svg' alt="vietnam-svg"></img>
            </div>
         </div>
         <div>
            <div className='africa-img-row'>
               <img width='160px' src={cashew} alt='cashew png'></img>
               <img width='100px' src='https://upload.wikimedia.org/wikipedia/commons/0/05/India_geo_stub.svg' alt="india"></img>
               <img width='100px' style={{ transform: 'rotate(270deg)', marginLeft: '35px' }} src={cacao} alt="West Coast States Outline Clipart California East Coast@pngkit.com"></img>
            </div>

            <h5>Then I moved back to Portland</h5>
            <div className='about-container' id='about-end'>
            <img src='https://cascadia.party/img/doug.svg' alt='cascaidapartyicons-dougfir' height='150px'></img>
               <p>For the last two years, I've been learning to code and driving Uber and Lyft to pay for it.  As I am trained in Economics and
               Math, my naturally starting point was data science, through my data science projects, I developed the need to display my projects.
               This led me to learn some front-end development. As my projects began to require more dynamic content, I eventually learned the back-end as well.
               You can check out some of my projects on the <NavLink to='/projects'>Projects</NavLink> page</p>
            </div>
         </div>
      </div>
   );
}

export default About;