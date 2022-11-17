import React from "react";
import "./Experience.scss";
export default function Experience() {
  return (
    <div className="experience" id="experience">
      <div className="content">
        <div className="d-flex flex-column align-items-start">
          <div className="d-flex align-items-center">
            <h3 className="color-white mx-3">Experience </h3>
            <div className="ruler"></div>
          </div>

          <div className="d-flex my-5">
            <div
              className="nav flex-column tab-group nav-pills me-3"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                className="tab-special active"
                id="v-pills-ejada-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-ejada"
                type="button"
                role="tab"
                aria-controls="v-pills-ejada"
                aria-selected="true"
              >
                Ejada
              </button>
              <button
                className="tab-special "
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                AXLR8
              </button>
              <button
                className="tab-special"
                id="v-pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-profile"
                type="button"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Silicon Arena
              </button>
              <button
                className="tab-special"
                id="v-pills-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-messages"
                type="button"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                RAVEDO
              </button>
              <button
                className="tab-special"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                Education
              </button>
            </div>
            <div className="tab-content" id="v-pills-tabContent">
            <div
                className="tab-pane fade show active"
                id="v-pills-ejada"
                role="tabpanel"
                aria-labelledby="v-pills-ejada-tab"
              >
                <h4 className="color-white">
                  Front End Developer -React Native- <span className="color-green">Ejada</span>
                </h4>
                <p className="text-sm color-grey my-4">November 2022 - present</p>

                <ul>
                  <li>Develop cress platform apps with react native </li>
                  <li>
                    Optimize application for maximum speed and scalability
                  </li>
                  <li>Collaborate with other team members and stakeholders</li>
                  <li>Fixing bugs and testing for usability</li>
                </ul>
              </div>
              <div
                className="tab-pane fade show "
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <h4 className="color-white">
                  Front End Developer -React js- <span className="color-green">AXLR8</span>
                </h4>
                <p className="text-sm color-grey my-4">March 2022 - November 2022</p>

                <ul>
                  <li>Develop websites with react js</li>
                  <li>
                    Optimize application for maximum speed and scalability
                  </li>
                  <li>Collaborate with other team members and stakeholders</li>
                  <li>Fixing bugs and testing for usability</li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <h4 className="color-white">
                  Front End Developer{" "}
                  <span className="color-green">Silicon Arena</span>
                </h4>
                <p className="text-sm color-grey my-4">
                  January 2022 - April 2022
                </p>

                <ul>
                  <li>Develop websites with react js , Next js</li>
                  <li>
                    Optimize application for maximum speed and scalability
                  </li>
                  <li>Collaborate with other team members and stakeholders</li>
                  <li>Fixing bugs and testing for usability</li>
                </ul>
                <h4 className="color-white">
                  Front End Intern{" "}
                  <span className="color-green">Silicon Arena</span>
                </h4>
                <p className="text-sm color-grey my-4">
                  August 2021 - October 2021
                </p>

                <ul>
                  <li>
                    Working with my team on E-commerce -Alphamart- project
                  </li>
                  <li>
                    practicing agile project management - including scrum
                    framework -
                  </li>
                  <li>
                    Optimize application for maximum speed and scalability
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                <h4 className="color-white">
                  HVAC Engineer <span className="color-green">RAVEDO</span>
                </h4>

                <p className="text-sm color-grey my-4">
                  January 2020 - January 2021
                </p>

                <ul>
                  <li>
                    Research and select HVAC systems suitable for application
                    and size of the project
                  </li>
                  <li>
                    design HVAC mechanical equipment to meet client’s
                    requirements in both large and small projects.
                  </li>
                  <li>
                    supervised installation process of HVAC mechanical
                    equipment.
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                <h4 className="color-white">
                  student{" "}
                  <span className="color-green">
                    Shoubra faculty of Engineering
                  </span>
                </h4>

                <p className="text-sm color-grey my-4">
                  september 2015 - July 2019
                </p>

                <ul>
                  <li>
                  Major : Mechanical power engineering.
                  </li>
                  <li>
                  Final grade : Very Good
                  </li>
                  <li>
                  Graduation project : Excellent
                  </li>
                </ul>
                
              
               
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
