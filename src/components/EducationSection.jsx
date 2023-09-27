import "../styles/EducationSection.css";

function EducationSection({ edu, onChange }) {
  return (
    <div id={edu.id} className="education-section">
      <label>
        Field of Study:
        <input
          data-type="study"
          type="text"
          defaultValue={edu.study}
          onChange={(e) => onChange.updateEducationField(e, edu.id)}
        ></input>
      </label>
      <label>
        School Name:
        <input
          data-type="school"
          type="text"
          defaultValue={edu.school}
          onChange={(e) => onChange.updateEducationField(e, edu.id)}
        ></input>
      </label>
      <div className="education-dates-input">
        <label>
          From:
          <input
            data-type="startDate"
            type="month"
            min={"1900-01"}
            max={edu.endDate}
            defaultValue={edu.startDate}
            onChange={(e) => onChange.updateEducationField(e, edu.id)}
          ></input>
        </label>

        <label>
          To:
          <input
            data-type="endDate"
            type="month"
            min={edu.startDate}
            defaultValue={edu.endDate}
            disabled={edu.isCurrent}
            onChange={(e) => onChange.updateEducationField(e, edu.id)}
          ></input>
        </label>

        <label>
          Current?
          <input
            type="checkbox"
            defaultChecked={edu.isCurrent}
            onChange={(e) => {
              onChange.educationIsCurrent(e, edu.id);
            }}
          ></input>
        </label>
        <button
          className="push-right remove-btn"
          onClick={(e) => onChange.deleteEducation(e, edu.id)}
        >
          Remove
        </button>
      </div>

      <div className="divider-line-light"></div>
    </div>
  );
}

export default EducationSection;
