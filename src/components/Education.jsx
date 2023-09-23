import { useState } from "react";
import EducationSection from "./EducationSection";

function Education() {
  const [sections, setSections] = useState([<EducationSection />]);

  function addEducation(e) {
    e.preventDefault();
    const updatedSectionsArr = [...sections, <EducationSection />];
    setSections(updatedSectionsArr);
  }

  return (
    <div className="education-form-section">
      <legend>Education</legend>
      {sections.map((section) => section)}

      <button className="add-education-btn" onClick={(e) => addEducation(e)}>
        Add
      </button>
      <div className="divider-line"></div>
    </div>
  );
}

export default Education;
