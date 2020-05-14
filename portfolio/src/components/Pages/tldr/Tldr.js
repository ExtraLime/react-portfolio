import React from 'react';
import useHover from '../../popup/useToggle'
import { StyledIntro, StyledSection, StyledBasics, StyledPic, StyledSectionHeader, IconGroup, DsBit } from './Tldr.styled'
import profile from './profile.jpeg'
import { faWhatsapp, fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DsIcons from './icons/DsIcons'
import WdIcons from './icons/webdevicons'
import DoIcons from './icons/DoIcons'


library.add(fab, faEnvelope)

const Tldr = () => {
    const [hoverDS, isDSHovered] = useHover();
    const [hoverWD, isWDHovered] = useHover()
    const [hoverDO, isDOHovered] = useHover()
    const [hoverPhone, isPHHovered] = useHover()
    const [hoverMail, isMailHovered] = useHover()



    return (
        <div className='tldr-page'>
            <h1>TL;DR</h1>
            <StyledIntro>Thanks for checking out my site. This is effectively my resume. More details about each section are discoverable throughout the site</StyledIntro>
            <StyledSectionHeader>Basics</StyledSectionHeader>
              <StyledSection>
                <StyledBasics><StyledPic src={profile}></StyledPic></StyledBasics>
                <StyledBasics>William Morgan</StyledBasics>
                <StyledBasics>32 years old</StyledBasics>
                <StyledBasics>Portland, Oregon</StyledBasics>
                <div ref={hoverPhone} onClick={() => console.log('i was clicked')}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/8/83/Circle-icons-phone.svg' height="35px"></img>{isPHHovered && 
                  <div>+1 (619) 246-7888</div>}</div>
                <a href='mailto:willdox7@live.com'><div ref={hoverMail} href='mailto:willdox7@live.com'>
                <img style={{borderRadius:'50%'}} src='https://symbols.getvecta.com/stencil_64/9_email.cf5807406d.png' height="35px"></img>{isMailHovered && 
                  <div>Email Me!</div>}</div></a>
              </StyledSection>
            <StyledSectionHeader>Skills</StyledSectionHeader>              

              <StyledSectionHeader ref={hoverDS}>Data Science {isDSHovered && 
                  <div className='ds-icons'><DsIcons /></div>}
              </StyledSectionHeader>                

                <StyledSection>Methodologies:</StyledSection> 
                <DsBit>Data access (API calls, advanced web scraping), experimental design, complex data visualization, natural language processing (NLP), data cleaning/preprocessing, feature engineering, algorithm design.</DsBit>
                <StyledSection>Machine Learning:</StyledSection> 
                <DsBit>Regression (linear/logistic/regularized), classification, decision tree ensemble learning/random forest, neural networks.</DsBit>
                <StyledSection>Languages and Frameworks:</StyledSection> 
                <DsBit>Python, Jupyter, SQL, NumPy, Pandas, Matplotlib/Seaborn, SciPy, Scikit-learn (SKLearn), TensorFlow/Keras, PyTorch/Fastai, Docker, Tableau, Spark, Hadoop, xgboost.</DsBit>

              
              <StyledSectionHeader ref={hoverWD}>Web Development {isWDHovered && 
                  <div className='wd-icons'><WdIcons /></div>}
              </StyledSectionHeader>
                                              
                <StyledSection>Front End:</StyledSection> 
                <DsBit>HTML5, JavaScript, TypeScript, JQuery, Bootstrap, ChartJS, ReactJS, AngularJS, WordPress, D3, VueJS, LeafletJS</DsBit>
                <StyledSection>Back End</StyledSection> 
                <DsBit>Flask (Python), Django, MongoDB, SQL, ExpressJS, Php, Node.js</DsBit>
              
                <StyledSectionHeader ref={hoverDO}>DevOps + Others {isDOHovered && 
                  <div className='do-icons'><DoIcons /></div>}
              </StyledSectionHeader>

              <StyledSection>Operating Systems</StyledSection> 
                <DsBit>Microsoft Windows, Apple OSX, Debian Linux (Ubuntu, PopOs, Kali, ...etc), Android, iOS, WindowsPhone</DsBit>
              <StyledSection>Cloud Computing</StyledSection> 
                <DsBit>Amazon Web Services (AWS), Docker, GoogleCloudConsole, Azure, IBMCloud, DigitalOcean, Heroku, Netlify, Nginx</DsBit>
                


        </div>
    );
}

export default Tldr;