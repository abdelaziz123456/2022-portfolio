import React from "react";
import "./Experience.scss";
export default function Experience() {
  return (
    <div className="experience" id="experience">
      <div className="content">
        <div className="d-flex align-items-start">
          <div
            className="nav flex-column tab-group nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="tab-special active"
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
              Messages
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
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <h4 className="color-white">
                Front End Developer <span className="color-green">AXLR8</span>
              </h4>
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
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
