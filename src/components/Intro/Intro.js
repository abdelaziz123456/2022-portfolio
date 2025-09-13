import React from "react";
import "./Intro.scss";
export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="content ">
        <h1 className="color-white display-3 fw-bold">Abdelaziz Mohamed</h1>

        <h1 className="color-grey display-3 fw-bold">
          I build things for the web.
        </h1>
        <p className="color-grey my-4 fs-5">
          Software Developer Professionally connected with the web development
          industry . Well-organised person, problem solver, independent employee
          with high attention to detail. Interested in the entire frontend
          spectrum and working on ambitious projects with positive people.
        </p>
        <button className="btn-special my-4">
          <a
            className="nav-link  "
            href="https://drive.google.com/file/d/1fDbO3dpHtHvjOgAsgosBHWEnPLiTzcPY/view?usp=sharing"
            target={"_blank"}
          >
            Check Out My Resume
          </a>
        </button>
      </div>
      ≈
    </div>
  );
}
