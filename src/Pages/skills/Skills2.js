import React from "react";
import { Graph } from "react-d3-graph";
import reacticon from '../tldr/icons/react.svg'
import btlogo from '../tldr/icons/btlogo.svg'
import docker from '../tldr/icons/docker-icon.svg'
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
import torch from '../tldr/icons/pytorch.svg'
import jupyter from '../tldr/icons/jupyter.svg'
import tf from '../tldr/icons/tf.svg'
import heroku from '../tldr/icons/heroku.svg'
import nginx from '../tldr/icons/nginx.svg'
import php from '../tldr/icons/php.svg'
import sql from '../tldr/icons/sql.svg'
import js from '../tldr/icons/js.svg'
import gcp from '../tldr/icons/generic-gcp.svg'
import netlify from '../tldr/icons/netlify.svg'
import jobtrak from '../tldr/icons/jobtrak.svg'
import pg from '../tldr/icons/pg.svg'
import express from '../tldr/icons/express.svg'
import nft from '../tldr/icons/nft.svg'
import scikit from '../tldr/icons/scikit.svg'
import pi from '../tldr/icons/pi.svg'



const Skills = () => {
  const data = {
    nodes: [
      {size:600,svg:wm, id: "Portfolio" },
      {svg:gcr, id: "GoogleCloudRun" },
      {svg:firebase, id: "Firebase" },
      { svg:flask,id: "Flask" },
      {svg:crime,size:500, id: "PDXCrimeMap" },
      {svg:apex, id: "ApexCharts" },
      {svg:chartjs, id: "ChartJs" },
      {size:500, svg:btlogo,id: "BasisTrade" },
      { svg:reacticon,id: "React" },
      { svg:netlify,id: "Netlify" },
      { svg:vue,id: "Vue" },
      { svg:python,id: "Python" },
      { svg:js,id: "JavaScript" },
      { svg:express,id: "express" },
      { svg:mongo,id: "MongoDB" },
      { svg:docker,id: "Docker" },
      { svg:sql,id: "MySQL" },
      { svg:nginx,id: "Nginx" },
      {svg:pi,size:500, id: "MathLectures" },
      {svg:jupyter, id: "Jupyter" },
      { svg:gcp,id: "GoogleCloud" },
      {size:500, svg:jobtrak,id: "JobTrack" },
      {svg:d3, id: "D3" },
      { svg:nodejs,id: "node.js" },
      { svg:tf,id: "TensorFlow" },
      { svg:heroku,id: "Heroku" },
      {svg:nft, id: "NFT" },
      {svg:aws,id: "AWSS3Buckets"},
      {svg:scikit,id: "SciKitLearn"},
      {svg:plotly,id: "Dash/Plotly"},
      {svg:torch,id: "PyTorch"},
      {svg:php,id: "PHP"},
      {svg:pg,id: "Postgres"},




    ],
    links: [
      { source: "Portfolio", target: "Netlify" },
      { source: "Portfolio", target: "React" },
      { source: "Portfolio", target: "JavaScript" },
      { source: "Portfolio", target: "D3" },
      { source: "BasisTrade", target: "Vue" },
      { source: "BasisTrade", target: "ApexCharts" },
      { source: "BasisTrade", target: "JavaScript" },
      { source: "BasisTrade", target: "GoogleCloudRun" },
      { source: "GoogleCloudRun", target: "GoogleCloudRun" },
      { source: "BasisTrade", target: "Firebase" },
      { source: "GoogleCloudRun", target: "Flask" },
      { source: "GoogleCloudRun", target: "Docker" },
      { source: "BasisTrade", target: "Python" },
      { source: "BasisTrade", target: "NFT" },
      { source: "NFT", target: "TensorFlow" },
      { source: "PDXCrimeMap", target: "Python" },
      { source: "PDXCrimeMap", target: "MongoDB" , length:600},
      { source: "PDXCrimeMap", target: "ChartJs" },
      { source: "PDXCrimeMap", target: "MySQL" },
      { source: "PDXCrimeMap", target: "Nginx" },
      { source: "PDXCrimeMap", target: "Docker" },
      { source: "PDXCrimeMap", target: "React" },
      { source: "PDXCrimeMap", target: "Heroku" },
      { source: "PDXCrimeMap", target: "D3" },
      { source: "PDXCrimeMap", target: "PHP" },
      { source: "PDXCrimeMap", target: "AWSS3Buckets" },
      { source: "PDXCrimeMap", target: "express" },
      { source: "PDXCrimeMap", target: "node.js" },
      { source: "JobTrack", target: "Heroku" },
      { source: "JobTrack", target: "PHP" },
      { source: "JobTrack", target: "React" },
      { source: "JobTrack", target: "Postgres" },
      { source: "JobTrack", target: "MongoDB" },
      { source: "JobTrack", target: "AWSS3Buckets" },
      { source: "JobTrack", target: "JavaScript" },
      { source: "MathLectures", target: "Python" },
      { source: "MathLectures", target: "Jupyter" },
      { source: "MathLectures", target: "TensorFlow" },
      { source: "MathLectures", target: "SciKitLearn" },
      { source: "MathLectures", target: "Dash/Plotly" },
      { source: "MathLectures", target: "GoogleCloud" },
      { source: "MathLectures", target: "PyTorch" },

    ],
  };
  const myConfig = {
    automaticRearrangeAfterDropNode: false,
    collapsible: false,
    directed: false,
    focusAnimationDuration: 0.75,
    focusZoom: 1,
    freezeAllDragEvents: true,
    height: 400,
    highlightDegree: 1,
    highlightOpacity: 1,
    linkHighlightBehavior: true,
    maxZoom: 8,
    minZoom: 0.1,
    initialZoom: null,
    nodeHighlightBehavior: false,
    panAndZoom: false,
    staticGraph: false,
    staticGraphWithDragAndDrop: false,
    bounded: false,
    width: 800,
    d3: {
      alphaTarget: 0.01,
      gravity: -200,
      linkLength: 100,
      linkStrength: .9,
      disableLinkForce: false,
    },
    node: {
      color: "#d3d3d3",
      fontColor: "black",
      fontSize: 8,
      fontWeight: "normal",
      highlightColor: "SAME",
      highlightFontSize: 8,
      highlightFontWeight: "normal",
      highlightStrokeColor: "SAME",
      highlightStrokeWidth: "SAME",
      labelProperty: "id",
      labelPosition: null,
      labelClass: "",
      mouseCursor: "pointer",
      opacity: 1,
      renderLabel: true,
      size: 200,
      strokeColor: "none",
      strokeWidth: 1.5,
      svg: "",
      symbolType: "circle",
      viewGenerator: null,
    },
    link: {
      color: "#FF1493",
      fontColor: "black",
      fontSize: 8,
      fontWeight: "normal",
      highlightColor: "SAME",
      highlightFontSize: 12,
      highlightFontWeight: "normal",
      labelProperty: "label",
      mouseCursor: "pointer",
      opacity: 1,
      renderLabel: false,
      semanticStrokeWidth: false,
      strokeWidth: 1.5,
      markerHeight: 6,
      markerWidth: 6,
      type: "STRAIGHT",
      selfLinkDirection: "TOP_RIGHT",
      strokeDasharray: 0,
      strokeDashoffset: 0,
      strokeLinecap: "butt",
    },
  };

  const onClickNode = function (nodeId) {
    window.alert(`Clicked node ${nodeId}`);
  };

  const onClickLink = function (source, target) {
    window.alert(`Clicked link between ${source} and ${target}`);
  };

  return (

    <Graph
      id="skills" // id is mandatory
      data={data}
      config={myConfig}
      onClickNode={onClickNode}
      onClickLink={onClickLink}
    />

  );
};
export default Skills;

// graph payload (with minimalist structure)

// the graph configuration, just override the ones you need
