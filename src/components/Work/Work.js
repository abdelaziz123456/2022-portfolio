import React from "react";
import './Work.scss'
import { projects } from "../../data";
import Project from "../Project/Project";
export default function Work() {
  return (
    <div className="work" id="work">
      <div className="content">

        <div className="d-flex  align-items-center">
          <h3 className="color-white mx-3">Some Projects I’ve Built</h3>
          <div className="ruler"></div>
        </div>

        <div className="projects row d-flex justify-content-center mt-5">
{
    projects.map((project)=>(
        <Project image={project.images[0]} usedTools={project.usedTools} description={project.description}    name={project.name} live={project.live} code={project.code}/>
    ))
}
        </div>
   
      </div>
    </div>
  );
}
