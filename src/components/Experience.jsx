import { v4 as uuidv4 } from "uuid";
import ExperienceSection from "./ExperienceSection";
import "../styles/Experience.css";

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
    <div className="education-form-section">
      <legend>Experience</legend>
      {experience.map((exp) => (
        <ExperienceSection key={exp.id} exp={exp} onChange={onChange} />
      ))}

      <div className="education-btn-container">
        <button className="add-education-btn" onClick={(e) => addSection(e)}>
          Add
        </button>
        {experience.length > 0 ? (
          <button className="remove-btn" onClick={onChange.removeExperience}>
            Remove
          </button>
        ) : (
          ""
        )}
      </div>

      <div className="divider-line"></div>
    </div>
  );
}

export default Experience;
