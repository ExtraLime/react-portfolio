import React from 'react'

const Education = () => {
    return (
        <div className='education'>
            <div className='csusm'>   
            <div className='edu-logo'><a rel="noopener noreferrer" href='https://www.csusm.edu' target='_blank'><img src='https://www.csusm.edu/_resources/images/logos/csusm-textlogo-sp.png' alt="csusm-img" width="250px" height="200px"></img></a></div>
            <div className='edu-info'>
                <p className='edu-name'>California State University</p>
                <p className='edu-loc'>San Marcos</p>
                <p className='degree'>Bachelor of Arts in Economics 	May 2011 </p>
                <p className='focus'>Minor: Mathematics</p>                                     
                <p className='focus'>Focus: Econometrics & International Trade / Cum Laude, 3.65 GPA</p>
                </div>
            </div>

            <div className='thinkful'>
            <div className='edu-logo'><a rel="noopener noreferrer" href='https://www.thinkful.com' target='_blank'><img style={{borderRadius:'5%'}} src='https://tf-assets-prod.s3.amazonaws.com/splash/social/thinkful_logo.png' alt="tf-img" width="250px" height="225px"></img></a></div>
            <div className='edu-info'>
            <p className='edu-name'>Thinkful</p>
            <p className='degree'>Data Science 	January 2019 </p> 
            <p className='focus'>Completed intensive data science program with a focus on Python, mathematical tool-sets, statistical analysis, and big data techniques including machine learning, neural networks, and NLP.</p>
            <p className='focus'>Learned industry best practices and standards by collaborating several hours every week with a Senior Data Scientist.</p>
            </div>
            </div>
            <div className='fcc'>
            <div className='edu-logo'><a rel="noopener noreferrer" href='https://www.freecodecamp.com' target='_blank'><img alt='fcc-logo' style={{borderRadius:'5%'}} src='https://design-style-guide.freecodecamp.org/downloads/fcc_primary_small.jpg' width="250px" height="225px"></img></a></div>
            <div className='edu-info'>
            <p className='edu-name'>freeCodeCamp</p>
            <p className='degree'>Full Stack Web Development 	March 2020 </p> 
            <p className='focus'>Completed over 1000 learning hours covering responsive web design(HTML5,CSS), algorithms and data structures in javascript(mapReduce), front end libraries (React, Redux).</p>
            <p className='focus'>Completed numerous projects employing skills and techniques learned throughout the course.
            <a rel="noopener noreferrer" href='https://www.github.com/ExtraLime' target='_blank'><img width='15px' alt='lilgit' src='https://symbols.getvecta.com/stencil_65/16_github.acd49fdd74.svg'></img></a></p>
            </div>
            </div>
        </div>
    )
}

export default Education;