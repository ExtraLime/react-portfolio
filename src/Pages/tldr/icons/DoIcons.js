import React from 'react'


import linux from './linux.svg'
import nginx from './nginx.svg'
import docker from './docker-icon.svg'
import digitalocean from './digital-ocean-icon.svg'
import gcp from './generic-gcp.svg'
import azure from './microsoft-azure-icon.svg'
import AWS from './amazon-web-services-icon.svg'
import heroku from './heroku.svg'
import apache from './apache-software-foundation-official.svg'
import xlsx from './microsoft-excel.svg'
import access from './microsoft-access.svg'
import word from './microsoft-word.svg'
import ubuntu from './ubuntu-icon.svg'
import git from './github.svg'




const DoIcons = () => {
    return (
        <>
        <img alt="docker-icon" src={docker} height="20px"></img>
        <img alt="do-icon" src={digitalocean} height='20px'></img>
        <img alt="gcp-icon" src={gcp} height='20px'></img>
        <img alt="azure-icon" src={azure} height='20px'></img>
        <img alt="linux-icon" src={linux} height="20px"></img>
        <img alt="AWS-icon" src={AWS} height='20px'></img>
        <img alt="heroku-icon" src={heroku} height='20px'></img>
        <img alt="nginx" src={nginx} height='20px'></img>
        <img alt="apache" src={apache} height='20px'></img>
        <img alt="xlsx" src={xlsx} height='20px'></img>
        <img alt="access" src={access} height='20px'></img>
        <img alt="word" src={word} height='20px'></img>
        <img alt="ubuntu" src={ubuntu} height='20px'></img>
        <img alt="git-icon" src={git} height='20px'></img>       
        </>
    )
}

export default DoIcons