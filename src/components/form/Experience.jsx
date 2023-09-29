import { v4 as uuidv4 } from "uuid";
import ExperienceSection from "./ExperienceSection";
import "../../styles/Experience.css";

function Experience({ experience, onChange }) {
  function addSection(e) {
    e.preventDefault(e);
    const newExperience = {
      id: uuidv4(),
      title: "",
      company: "",
      startDate: "",
      endDate: "",
      isCurrent: "",
      responsibililities: "",
    };
    onChange.addExperience(newExperience);
  }

  return (
    <div className="form-inner-section">
      <legend>Experience</legend>
      {experience.map((exp) => (
        <div key={exp.id}>
          <div className="section-title-container">
            <h2>{exp.title}</h2>
            <svg
              onClick={() => onChange.toggleCollapsedExperience(exp.id)}
              className="collapsable-svg push-right"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              transform={exp.isCollapsed ? "" : "rotate(180)"}
            >
              <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </div>
          {exp.isCollapsed ? (
            ""
          ) : (
            <ExperienceSection exp={exp} onChange={onChange} />
          )}
        </div>
      ))}

      <div className="education-btn-container">
        <button className="add-education-btn" onClick={(e) => addSection(e)}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Experience;
