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
    };
    onChange.addEducation(newEducation);
  }

  return (
    <div className="education-form-section">
      <legend>Education</legend>
      {education.map((edu) => (
        <EducationSection key={edu.id} edu={edu} onChange={onChange} />
      ))}

      <div className="education-btn-container">
        <button className="add-education-btn" onClick={(e) => addSection(e)}>
          Add
        </button>
        {education.length > 0 ? (
          <button className="remove-btn" onClick={onChange.removeEducation}>
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

export default Education;
