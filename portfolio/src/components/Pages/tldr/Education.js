import React from 'react'
import csusm from './icons/csusm.png'

const Education = () => {
    return (
        <div className='education'>
        <img src='https://www.csusm.edu/_resources/images/logos/csusm-textlogo-sp.png' alt="csusm-img" class="img-responsive" width="50px" height="50px"></img>
        <p className='position'>California State University San Marcos </p>
        <p>Bachelor of Arts in Economics 	May 2011                                      
            Focus: Econometrics & International Trade / Cum Laude, 3.65 GPA
        </p>

<p className='position'>Thinkful </p>
<p>Data Science 	January 2019
    • Completed intensive data science program with a focus on Python, mathematical tool-sets, statistical analysis, and big data techniques including machine learning, neural networks, and NLP.
    • Learned industry best practices and standards by collaborating several hours every week with a Senior Data Scientist.
        
        </p></div>
    )
}

export default Education;