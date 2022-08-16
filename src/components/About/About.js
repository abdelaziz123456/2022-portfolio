import React from "react";
import "./About.scss";
import { skills } from "../../data";
import Skill from "../skill/Skill";
export default function About() {
  let list1=skills.slice(0,6)
  let list2=skills.slice(6)
  return (
    <div className="about" id="about">
      <div className="content">
        <div className="left-section">
          <div className="d-flex  align-items-center">
          <h3 className="color-white mx-3">About Me</h3>
            <div className="ruler"></div>
          </div>

          <p className="text-sm color-grey my-4">
            Web Developer specializing in front end development. Experienced
            with all stages of the development cycle for dynamic web projects.
            Well-versed in numerous programming languages and frameworks
            including HTML5,CSS3,SASS,JavaScript, bootstrap,React js.
          </p>

          <p className="text-sm color-grey my-4">
            Here are a few technologies I’ve been working with recently:
          </p>

          <div className="lists d-flex color-grey">
            <ul>
              {
                list1.map(skill=>(
                  <Skill image={skill.image} name={skill.name}/>
                ))
              }
            </ul>
            <ul className="ms-5">
              {
                list2.map(skill=>(
                  <Skill image={skill.image} name={skill.name}/>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
