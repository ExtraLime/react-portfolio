import React from "react";

const Legend = () => {
  return (

   <div className="legend">
Legend
      <div className="subleg">
      <div className="nodes">
        <div className="projects">
          <h6 className="name">Project</h6>
          <span class="project-dot"></span>
        </div>
        <div className="languages">
          <h6 className="name">Language/Framework</h6>
          <span class="language-dot"></span>
        </div>
        <div className="libraries">
        <div className="data">
          
          <h6 className="name">Data</h6>
          <span class="data-dot"></span>
        </div>
        <div className="devops">
          
          <h6 className="name">Devops</h6>
          <span class="devops-dot"></span>
        </div>
          
          <h6 className="name">Library</h6>
          <span class="library-dot"></span>
        </div>

       
      </div>
      <div className="edges">
        <div className="front">
          
          <h6 className="name">Frontend</h6>
          <span class="front-line"></span>
        </div>
        <div className="back">
          
          <h6 className="name">Backend</h6>
          <span class="backend-line"></span>
        </div>
        <div className="ds">
          
          <h6 className="name">Data Science</h6>
          <span class="ds-line"></span>
        </div>
        <div className="devops">
          
          <h6 className="name">Devops</h6>
          <span class="devops-line"></span>
        </div>
        <div className="vis">
          
          <h6 className="name">Visualization</h6>
          <span class="vis-line"></span>
        </div>
        <div className="db">
          
          <h6 className="name">DataBase</h6>
          <span class="db-line"></span>
        </div>
        <div className="glb">
          
          <h6 className="name">Foundation</h6>
          <span class="glb-line"></span>
        </div></div>
    </div></div>
  );
};

export default Legend;
