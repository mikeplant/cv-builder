import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ExperienceSection from "./ExperienceSection";
import "../styles/Experience.css";

function Experience() {
  const [sections, setSections] = useState([
    <ExperienceSection key={uuidv4()} />,
  ]);

  function addExperience(e) {
    e.preventDefault();

    const updatedSectionsArr = [
      ...sections,
      <ExperienceSection
        key={uuidv4()}
        onRemove={(e) => removeExperience(e)}
      />,
    ];
    setSections(updatedSectionsArr);
  }

  function removeExperience(e) {
    e.preventDefault();

    const updatedSectionsArr = sections.slice(0, -1);

    setSections(updatedSectionsArr);
  }

  return (
    <div className="education-form-section">
      <legend>Experience</legend>
      {sections.map((section) => section)}

      <div className="education-btn-container">
        <button className="add-education-btn" onClick={(e) => addExperience(e)}>
          Add
        </button>
        {sections.length > 0 ? (
          <button className="remove-btn" onClick={(e) => removeExperience(e)}>
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
