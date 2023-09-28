import { v4 as uuidv4 } from "uuid";
import EducationSection from "./EducationSection";
import "../styles/Education.css";

function Education({ education, onChange }) {
  function addSection(e) {
    e.preventDefault(e);
    const newEducation = {
      id: uuidv4(),
      study: "",
      school: "",
      startDate: "",
      endDate: "",
      isCurrent: "",
      isCollapsed: "",
    };
    onChange.addEducation(newEducation);
  }

  return (
    <div className="form-inner-section">
      <legend>Education</legend>
      {education.map((edu) => (
        <div key={edu.id}>
          <div className="section-title-container">
            <h2>{edu.study}</h2>
            <svg
              onClick={() => onChange.toggleCollapsedEducation(edu.id)}
              className="collapsable-svg push-right"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              transform={edu.isCollapsed ? "" : "rotate(180)"}
            >
              <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
            </svg>
          </div>
          {edu.isCollapsed ? (
            ""
          ) : (
            <EducationSection edu={edu} onChange={onChange} />
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

export default Education;
