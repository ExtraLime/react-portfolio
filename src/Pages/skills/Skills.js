import React from "react";
import Graph from "react-graph-vis";
import Legend from './Legend'
import reacticon from '../tldr/icons/react.svg'
import btlogo from '../tldr/icons/btlogo.png'
import docker from '../tldr/icons/docker.svg'
import python from '../tldr/icons/python.svg'
import plotly from '../tldr/icons/plotly.svg'
import nodejs from '../tldr/icons/nodejs.svg'
import mongo from '../tldr/icons/mongo.svg'
import flask from '../tldr/icons/flask.svg'
import wm from '../tldr/icons/wm.svg'
import vue from '../tldr/icons/vue.svg'
import firebase from '../tldr/icons/firebase.svg'
import gcr from '../tldr/icons/gcr.svg'
import crime from '../tldr/icons/crime.svg'
import apex from '../tldr/icons/apex.svg'
import chartjs from '../tldr/icons/chartjs.svg'
import aws from '../tldr/icons/amazon-web-services-icon.svg'
import d3 from '../tldr/icons/d3js-icon.svg'
import torch from '../tldr/icons/torch.png'
import jupyter from '../tldr/icons/jupyter.svg'
import tf from '../tldr/icons/tf.png'
import heroku from '../tldr/icons/heroku.svg'
import nginx from '../tldr/icons/nginx.svg'
import php from '../tldr/icons/php.svg'
import sql from '../tldr/icons/sql.svg'
import js from '../tldr/icons/js.svg'
import gcp from '../tldr/icons/generic-gcp.svg'
import netlify from '../tldr/icons/netlify.jpeg'
import jobtrak from '../tldr/icons/jobtrak.svg'
import pg from '../tldr/icons/pg.svg'
import express from '../tldr/icons/express.svg'
import nft from '../tldr/icons/nft.svg'
import scikit from '../tldr/icons/scikit.jpeg'
import pi from '../tldr/icons/pi.svg'
import leaf from '../tldr/icons/leaflet.svg'
import colab from '../tldr/icons/colab.png'
import resto from '../tldr/icons/resto.png'
import ibm from '../tldr/icons/ibm.svg'
import linux from '../tldr/icons/linux.svg'





const Skills = () => {
  const colors = {
    'project':{physics:false,color:'#EFF6E0',shape:'circularImage',shapeProperties:{imagePadding:5,useBorderWithImage:true},mass:100,size:100},
    'lang':{color:'#124559',shape:'circularImage',shapeProperties:{useBorderWithImage:true},mass:50,size:70},
    'lib':{color:'#598392',shape:'circularImage',shapeProperties:{useBorderWithImage:true},mass:25,size:40},
   'devops':{color:'#01161E',shape:'circularImage',shapeProperties:{useBorderWithImage:true},mass:50,size:50},
    'data':{color:'#AEC3B0',shape:'circularImage',shapeProperties:{useBorderWithImage:true},mass:30,size:70},
  }
  const edgeTypes = {
    'front':{color:'#1B3022', width:20,length:200},
    'back':{color:'#395756', width:20,length:200},
    'ds':{color:'#4F5D75', width:20,length:200},
    'devops':{color:'#7261A3', width:20,length:200},
    'vis':{color:'#C6878F', width:20,length:200},
    'db':{color:'#A67DB8', width:20,length:200},
    'glb':{color:'black', width:50,length:200},
  }


  const graph = {
    nodes: [
      {...colors['project'],image:wm, label: "Portfolio" ,id: "Portfolio" },
      {...colors['project'],image:resto, label: "Restaurant" ,id: "Restaurant" },
      {...colors['devops'],image:gcr, label: "GoogleCloudRun" ,id: "GoogleCloudRun" },
      {...colors['devops'],image:firebase, label: "Firebase" ,id: "Firebase" },
      {...colors['devops'],image:ibm, label: "IBMWatson" ,id: "IBMWatson" },
      {...colors['lang'], image:flask,label: "Flask" ,id: "Flask" },
      {...colors['lang'], image:linux,label: "Linux" ,id: "Linux", physics:false },
      {...colors['project'],image:crime, label: "PDXCrimeMap" ,id: "PDXCrimeMap" },
      {...colors['lib'],image:apex, label: "ApexCharts" ,id: "ApexCharts" },
      {...colors['lib'],image:chartjs, label: "ChartJs" ,id: "ChartJs" },
      {...colors['project'], image:btlogo,label: "BasisTrade" ,id: "BasisTrade" },
      {...colors['lang'], image:reacticon,label: "React" ,id: "React" },
      {...colors['devops'],image:netlify,label: "Netlify" ,id: "Netlify" },
      {...colors['lang'], image:vue,label: "Vue" ,id: "Vue" },
      {...colors['lang'], image:python,label: "Python" ,id: "Python" },
      {...colors['lang'], image:js,label: "JavaScript" ,id: "JavaScript" },
      {...colors['lang'], image:express,label: "express" ,id: "express" },
      {...colors['data'], image:mongo,label: "MongoDB" ,id: "MongoDB" },
      {...colors['devops'],image:docker,label: "Docker" ,id: "Docker" },
      {...colors['data'], image:sql,label: "MySQL" ,id: "MySQL" },
      {...colors['devops'], image:nginx,label: "Nginx" ,id: "Nginx" },
      {...colors['project'],image:pi, label: "MathLectures" ,id: "MathLectures" },
      {...colors['lang'],image:jupyter, label: "Jupyter" ,id: "Jupyter" },
      {...colors['devops'], image:colab,label: "GoogleCloud" ,id: "GoogleCloud" },
      {...colors['project'],image:jobtrak,label: "JobTrack" ,id: "JobTrack" },
      {...colors['lib'],image:d3, label: "D3" ,id: "D3" },
      {...colors['lang'], image:nodejs,label: "node.js" ,id: "node.js" },
      {...colors['lang'], image:tf,label: "TensorFlow" ,id: "TensorFlow" },
      {...colors['devops'], image:heroku,label: "Heroku" ,id: "Heroku" },
      {...colors['devops'],image:nft, label: "NFT" ,id: "NFT" },
      {...colors['data'],image:aws,label: "AWSS3Buckets",id: "AWSS3Buckets"},
      {...colors['lib'],image:scikit,label: "SciKitLearn",id: "SciKitLearn"},
      {...colors['lang'],image:plotly,label: "Dash/Plotly",id: "Dash/Plotly"},
      {...colors['lang'],image:torch,label: "PyTorch",id: "PyTorch"},
      {...colors['lang'],image:php,label: "PHP",id: "PHP"},
      {...colors['data'],image:pg,label: "Postgres",id: "Postgres"},
      {...colors['lib'],image:leaf,label: "Leaflet",id: "Leaflet"},





    ],
   
    edges: [
     
      //porfolio
      { ...edgeTypes['devops'],from: "Portfolio",to: "Netlify" },
      { ...edgeTypes['front'],from: "Portfolio",to: "React" },
      { ...edgeTypes['front'],from: "Portfolio",to: "JavaScript" },
      { ...edgeTypes['vis'],from: "Portfolio",to: "D3" },
      { ...edgeTypes['back'],from: "Portfolio",to: "node.js" },
      //basistrade
      {...edgeTypes['front'], from: "BasisTrade",to: "Vue" },
      { ...edgeTypes['vis'],from: "BasisTrade",to: "ApexCharts" },
      { ...edgeTypes['front'],from: "BasisTrade",to: "JavaScript" },
      { ...edgeTypes['devops'],from: "BasisTrade",to: "GoogleCloudRun" },
      { ...edgeTypes['back'],from: "BasisTrade",to: "express" },
      { ...edgeTypes['devops'],from: "BasisTrade",to: "Firebase" },
      { ...edgeTypes['db'],from: "BasisTrade",to: "Python" },
      {...edgeTypes['vis'], from: "BasisTrade",to: "NFT" },
      { ...edgeTypes['back'],from: "BasisTrade", to: "Flask" },
      //childrens
      { ...edgeTypes['back'],from: "GoogleCloudRun",to: "Flask" },
      { ...edgeTypes['devops'],from: "GoogleCloudRun",to: "Docker" },
      { ...edgeTypes['back'],from: "Flask", to: "Docker" },
      { ...edgeTypes['ds'],from: "NFT", to: "TensorFlow" },
 
 
      { ...edgeTypes['db'],from: "PDXCrimeMap",to: "Python" },
      { ...edgeTypes['vis'],from: "PDXCrimeMap",to: "Leaflet" },
      { ...edgeTypes['db'],from: "PDXCrimeMap",to: "MongoDB" },
      { ...edgeTypes['vis'],from: "PDXCrimeMap",to: "ChartJs" },
      { ...edgeTypes['db'],from: "PDXCrimeMap",to: "MySQL" },
      { ...edgeTypes['devops'],from: "PDXCrimeMap",to: "Nginx" },
      { ...edgeTypes['devops'],from: "PDXCrimeMap",to: "Docker" },
      { ...edgeTypes['front'],from: "PDXCrimeMap",to: "React" },
      { ...edgeTypes['front'],from: "PDXCrimeMap",to: "JavaScript" },
      { ...edgeTypes['devops'],from: "PDXCrimeMap",to: "Heroku" },
      {...edgeTypes['vis'], from: "PDXCrimeMap",to: "D3" },
      { ...edgeTypes['back'],from: "PDXCrimeMap",to: "PHP" },
      { ...edgeTypes['devops'],from: "PDXCrimeMap",to: "AWSS3Buckets" },
      { ...edgeTypes['back'],from: "PDXCrimeMap",to: "express" },
      { ...edgeTypes['back'],from: "PDXCrimeMap",to: "node.js" },
      { ...edgeTypes['devops'],from: "PDXCrimeMap",to: "netlify" },
      { ...edgeTypes['db'],from: "PDXCrimeMap",to: "Postgres" },

      { ...edgeTypes['devops'],from: "JobTrack",to: "Heroku" },
      { ...edgeTypes['back'],from: "JobTrack",to: "PHP" },
      { ...edgeTypes['front'],from: "JobTrack",to: "React" },
      { ...edgeTypes['db'],from: "JobTrack",to: "Postgres" },
      { ...edgeTypes['db'],from: "JobTrack",to: "MongoDB" },
      { ...edgeTypes['devops'],from: "JobTrack",to: "AWSS3Buckets" },
      { ...edgeTypes['front'],from: "JobTrack",to: "JavaScript" },
      { ...edgeTypes['back'],from: "JobTrack",to: "node.js" },
      { ...edgeTypes['back'],from: "JobTrack",to: "express" },

      { ...edgeTypes['ds'],from: "MathLectures",to: "Python" },
      { ...edgeTypes['ds'],from: "MathLectures",to: "Jupyter" },
      { ...edgeTypes['ds'],from: "MathLectures",to: "TensorFlow" },
      { ...edgeTypes['ds'],from: "MathLectures",to: "SciKitLearn" },
      { ...edgeTypes['vis'],from: "MathLectures",to: "Dash/Plotly" },
      { ...edgeTypes['ds'],from: "MathLectures",to: "GoogleCloud" },
      { ...edgeTypes['ds'],from: "MathLectures",to: "PyTorch" },

      { ...edgeTypes['ds'],from: "Restaurant",to: "Python" },
      { ...edgeTypes['ds'],from: "Restaurant",to: "Jupyter" },
      { ...edgeTypes['devops'],from: "Restaurant",to: "IBMWatson" },
      { ...edgeTypes['ds'],from: "Restaurant",to: "SciKitLearn" },
      { ...edgeTypes['vis'],from: "Restaurant",to: "Dash/Plotly" },
      { ...edgeTypes['db'],from: "Restaurant",to: "GoogleCloud" },
      { ...edgeTypes['vis'],from: "Restaurant",to: "Leaflet" },
      
      { ...edgeTypes['glb'],from: "Linux",to: "Restaurant" },
      { ...edgeTypes['glb'],from: "Linux",to: "PDXCrimeMap" },
      { ...edgeTypes['glb'],from: "Linux",to: "BasisTrade" },
      { ...edgeTypes['glb'],from: "Linux",to: "MathLectures" },
      { ...edgeTypes['glb'],from: "Linux",to: "JobTrack" },
      { ...edgeTypes['glb'],from: "Linux",to: "Portfolio" },

    ],
  };

  const options = {
    layout: {
      randomSeed:1493,
      improvedLayout:true,
      clusterThreshold: 150,
      hierarchical: {
        enabled:false,
        levelSeparation: 150,
        nodeSpacing: 100,
        treeSpacing: 100,
        blockShifting: true,
        edgeMinimization: false,
        parentCentralization: true,
        direction: 'LR',        // UD, DU, LR, RL
        sortMethod: 'hubsize',  // hubsize, directed
        shakeTowards: 'leaves'  // roots, leaves
      }
    },
    edges:{
      arrows: {
        to: {
          enabled: false,
          imageHeight: undefined,
          imageWidth: undefined,
          scaleFactor: 1,
          src: undefined,
          type: "arrow"
        },
        middle: {
          enabled: false,
          imageHeight: 32,
          imageWidth: 32,
          scaleFactor: 1,
          src: "https://visjs.org/images/visjs_logo.png",
          type: "image"
        },
        from: {
          enabled: false,
          imageHeight: undefined,
          imageWidth: undefined,
          scaleFactor: 1,
          src: undefined,
          type: "arrow"
        }
      },
    },
    height: "1200px"
  };
 
  const events = {
    select: function(event) {
      var { nodes, edges } = event;
    },
    onClickNode: function (nodeId) {
        window.alert(`Clicked node ${nodeId}`);
      },
    
      onClickLink: function (from,to) {
        window.alert(`Clicked link between ${from} and ${to}`);
      }
  };
  

  return (
    <div>
        <Legend />
        <Graph
          graph={graph}
          options={options}
          events={events}
         
        />
        </div>
      );
    };


export default Skills;


