import "../styles/EducationSection.css";

function EducationSection({ edu, onChange }) {
  return (
    <div id={edu.id} className="education-section">
      <label>
        Field of Study:
        <input
          type="text"
          defaultValue={edu.study}
          onChange={(e) => onChange.study(e, edu.id)}
        ></input>
      </label>
      <label>
        School Name:
        <input
          type="text"
          defaultValue={edu.school}
          onChange={(e) => onChange.school(e, edu.id)}
        ></input>
      </label>
      <div className="education-dates-input">
        <label>
          From:
          <input
            type="month"
            min={"1900-01"}
            max={edu.endDate}
            defaultValue={edu.startDate}
            onChange={(e) => onChange.educationStart(e, edu.id)}
          ></input>
        </label>

        <label>
          To:
          <input
            type="month"
            min={edu.startDate}
            defaultValue={edu.endDate}
            disabled={edu.isCurrent}
            onChange={(e) => onChange.educationEnd(e, edu.id)}
          ></input>
        </label>

        <label className="push-right">
          Current?
          <input
            type="checkbox"
            defaultChecked={edu.isCurrent}
            onChange={(e) => {
              onChange.educationIsCurrent(e, edu.id);
            }}
          ></input>
        </label>
      </div>
      <div className="divider-line-light"></div>
    </div>
  );
}

export default EducationSection;
