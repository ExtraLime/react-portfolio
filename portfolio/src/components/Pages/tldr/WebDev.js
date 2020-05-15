import React from 'react'
import { StyledBasics } from "./Tldr.styled"

const WebDev = () => {
    return (
        <>
        <div className='ds-info'>
            <div className='meths'><h4>Front End:</h4>
            <ul>
            <li>HTML5, JavaScript</li>
            <li>TypeScript, JQuery</li>
            <li>Bootstrap, ChartJS</li> 
            <li>ReactJS, AngularJS</li> 
            <li>WordPress, D3</li> 
            <li>VueJS, LeafletJS</li>
            </ul></div>
            <div className='ml'><h4>Back End:</h4>
            <ul>
            <li>Flask (Python)</li>
            <li>Django, MongoDB</li>
            <li>SQL, ExpressJS</li>
            <li>PHP, Node.js</li>
            </ul></div>
            <div className='langframe'><h4>Tools:</h4>
            <ul><li>GitHub</li>
            <li>Atom</li> 
            <li>VSCode</li></ul></div>
            </div>
        </>
    )
}

export default WebDev;