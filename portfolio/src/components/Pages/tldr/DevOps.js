import React from 'react'


const DevOps = () => {
    return (
        <>
        <div className='ds-info'>
            <div className='meths'><h4>Operating Systems:</h4>
            <ul>
            <li>Microsoft Windows, Apple OSX</li> 
            <li>Debian Linux (Ubuntu, PopOs, Kali, ...etc)</li>
            <li>Android, iOS, WindowsPhone</li>
            </ul></div>

            <div className='ml'><h4>Cloud Computing:</h4>
            <ul>
            <li>Amazon Web Services (AWS)</li>
            <li>Docker, GoogleCloudConsole</li>
            <li>Azure, IBMCloud</li>
            <li>DigitalOcean, Heroku</li>
            <li>Netlify, Nginx</li>
            </ul></div>
            
            <div className='langframe'><h4>General:</h4>
            <ul>
            <li>Microsoft Office (Excel, Word, Access, Outlook)</li>
            <li>Tableau, Zoom</li> 
            <li>GitHub, Atom</li>
            <li>VSCode</li>
            </ul></div>
            </div>
        </>
    )
}

export default DevOps;