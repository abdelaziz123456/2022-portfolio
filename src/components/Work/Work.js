import React, { useState } from "react";
import "./Work.scss";
import { projects } from "../../data";
import Project from "../Project/Project";
export default function Work() {
  const [selectedType, setSelectedType] = useState("");

  let selected = projects.filter((proj) => {
    if (selectedType) {
      return proj.type == selectedType;
    } else {
      return proj;
    }
  });

  let shared = {
    border: 0,

    color: "#c4ffdd",
    width: "150px",
    height: "50px",
    textAlign: "center",
    fontWeight: "500",
  };

  return (
    <div className="work" id="work">
      <div className="content">
        <div className="d-flex  align-items-center">
          <h3 className="color-white mx-3">Some Projects I’ve Built</h3>
          <div className="ruler"></div>
        </div>

        {/* tabs start  */}
        <ul class="nav nav-pills mb-3 tab-group" id="pills-tab" role="tablist">
          <li class="nav-item " role="presentation">
            <button
              className="tab-special"
              class="nav-link active"
              style={
                selectedType == ""
                  ? { backgroundColor: "#c4ffdd4e", ...shared }
                  : { ...shared }
              }
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
              onClick={() => setSelectedType("")}
            >
              All
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              className="tab-special"
              class="nav-link"
              style={
                selectedType == "mobile"
                  ? { backgroundColor: "#c4ffdd4e", ...shared }
                  : { ...shared }
              }
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
              onClick={() => setSelectedType("mobile")}
            >
              Mobile
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              className="tab-special"
              class="nav-link"
              style={
                selectedType == "web"
                  ? { backgroundColor: "#c4ffdd4e", ...shared }
                  : { ...shared }
              }
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
              onClick={() => setSelectedType("web")}
            >
              Web
            </button>
          </li>
        </ul>

        {/* tabs end  */}

        <div className="projects row d-flex justify-content-center mt-5">
          {selected.map((project) => (
            <Project
              image={project.images[0]}
              usedTools={project.usedTools}
              description={project.description}
              name={project.name}
              live={project.live}
              code={project.code}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
