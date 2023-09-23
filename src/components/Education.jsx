import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EducationSection from "./EducationSection";
import "../styles/Education.css";

function Education() {
  const [sections, setSections] = useState([
    <EducationSection key={uuidv4()} />,
  ]);

  function addEducation(e) {
    e.preventDefault();

    const updatedSectionsArr = [
      ...sections,
      <EducationSection key={uuidv4()} onRemove={(e) => removeEducation(e)} />,
    ];
    setSections(updatedSectionsArr);
  }

  function removeEducation(e) {
    e.preventDefault();

    const updatedSectionsArr = sections.slice(0, -1);

    setSections(updatedSectionsArr);
  }

  return (
    <div className="education-form-section">
      <legend>Education</legend>
      {sections.map((section) => section)}

      <div className="education-btn-container">
        <button className="add-education-btn" onClick={(e) => addEducation(e)}>
          Add
        </button>
        {sections.length > 0 ? (
          <button className="remove-btn" onClick={(e) => removeEducation(e)}>
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